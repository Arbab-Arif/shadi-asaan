<?php

namespace App\Models;

use App\Traits\FileHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{

    use HasFactory, FileHelper;

    protected $fillable = ['venue_id', 'sort', 'banner'];
    protected $appends = [
        'banner_link'
    ];

    public function venue()
    {
        return $this->belongsTo(Venue::class);
    }

    public function getBannerLinkAttribute()
    {
        return $this->getImagePath('banner');
    }
}
