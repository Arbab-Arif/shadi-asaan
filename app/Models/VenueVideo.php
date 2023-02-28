<?php

namespace App\Models;

use App\Traits\FileHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VenueVideo extends Model
{
    use HasFactory, FileHelper;

    protected $fillable = ['video', 'venue_id'];

    protected $appends = ['video_link'];

    public function getVideoLinkAttribute()
    {
        return $this->getImagePath('video');
    }
}
