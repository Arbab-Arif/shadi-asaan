<?php

namespace App\Http\Controllers\Api\Vendor;

use App\Abstracts\ApiMediaHelper;
use App\Models\VenueVideo;

class VenueVideoController extends ApiMediaHelper
{
    public function rules(): array
    {
        return [
            'video' => 'required',
        ];
    }

    public function model(): array
    {
        return [
            'videos',
            VenueVideo::class,
            'video'
        ];
    }
}
