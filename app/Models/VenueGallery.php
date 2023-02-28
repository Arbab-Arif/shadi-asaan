<?php

namespace App\Models;

use App\Traits\FileHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VenueGallery extends Model
{
    use HasFactory, FileHelper;

    protected $fillable = ['image', 'venue_id'];

    protected $appends = ['image_link'];

    public function getImageLinkAttribute()
    {
        return $this->getImagePath('image');
    }
}
