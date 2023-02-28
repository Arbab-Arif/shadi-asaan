<?php

namespace App\Http\Controllers\Api\Vendor;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        try {
            $venuesCount = auth()->user()->venues()->count();
            $viewCount = auth()->user()->venues()->sum('view');

            return makeJsonResponse('Success', [
                'venue_count' => $venuesCount,
                'venue_views'  => $viewCount,
            ]);
        } catch (ModelNotFoundException $e) {
            return makeJsonResponse('Error', [], 404);
        }
    }
}
