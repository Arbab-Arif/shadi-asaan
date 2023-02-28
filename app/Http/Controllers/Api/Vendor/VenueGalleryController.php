<?php

namespace App\Http\Controllers\Api\Vendor;

use App\Abstracts\ApiMediaHelper;
use App\Models\VenueGallery;

class VenueGalleryController extends ApiMediaHelper
{
    public function rules(): array
    {
        return [
            'image' => 'image|required',
        ];
    }

    public function model(): array
    {
        return [
            'galleries',
            VenueGallery::class,
            'image'
        ];
    }
}
