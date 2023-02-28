<?php

namespace App\Http\Controllers\Api\Vendor;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;

class GoogleMapController extends Controller
{

    public function autocomplete()
    {
        $url = 'https://maps.googleapis.com/maps/api/place/queryautocomplete/json';
        return makeJsonResponse('Success', Http::get($url, [
            'input'      => request('input'),
            'key'        => env('GOOGLE_MAP_KEY'),
            'type'       => 'address',
            'components' => 'country:pk',
        ])->json());
    }

    public function placeById($placeId)
    {
        $url = 'https://maps.googleapis.com/maps/api/place/details/json';
        return makeJsonResponse('Success', Http::get($url, [
            'place_id' => $placeId,
            'key'      => env('GOOGLE_MAP_KEY')
        ])->json());
    }

}
