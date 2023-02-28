<?php

namespace App\Models;

use App\Traits\FileHelper;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Venue extends Model
{
    use HasFactory, FileHelper;

    protected $fillable = [
        'vendor_id',
        'business_type_id',
        'area_id',
        'name',
        'manager_phone',
        'per_head',
        'rent_amount',
        'person_capacity',
        'latitude',
        'longitude',
        'status',
        'feature_image',
        'description',
        'view',
        'address',
        'full_address',
    ];
    protected $casts = [
        'created_at'    => 'date:Y-m-d',
    ];


    protected $with = ['galleries', 'videos'];

    protected $appends = ['feature_image_link', 'inquire_count'];

    public function scopeCheckDistance($query, $lat, $lng, $radius = 2000, $unit = "km")
    {
        if (!$lat || !$lng) return $query;
        $unit = ($unit === "km") ? 6378.10 : 3963.17;
        $lat = (float)$lat;
        $lng = (float)$lng;
        $radius = (double)$radius;
        return $query
            ->whereNotNull('latitude')
            ->whereNotNull('longitude')
            ->select(\DB::raw("*,
                            ($unit * ACOS(COS(RADIANS($lat))
                                * COS(RADIANS(latitude))
                                * COS(RADIANS($lng) - RADIANS(longitude))
                                + SIN(RADIANS($lat))
                                * SIN(RADIANS(latitude)))) AS distance")
            )
            ->orderBy('distance', 'asc');
    }


    public function vendor()
    {
        return $this->belongsTo(Vendor::class);
    }

    public function businessType()
    {
        return $this->belongsTo(BusinessType::class);
    }

    public function area()
    {
        return $this->belongsTo(Area::class);
    }

    public function galleries()
    {
        return $this->hasMany(VenueGallery::class);
    }

    public function videos()
    {
        return $this->hasMany(VenueVideo::class);
    }

    public function getFeatureImageLinkAttribute()
    {
        return $this->getImagePath('feature_image');
    }

    public function chats()
    {
        return $this->hasMany(Chat::class)
            ->where('user_type', '!=', Vendor::class)
            ->groupBy('room');
    }

    public function inquire()
    {
        return $this->hasMany(Inquire::class);
    }

    public function inquireCount(): Attribute
    {
        return Attribute::get(fn() => $this->chats()->count());
    }
}
