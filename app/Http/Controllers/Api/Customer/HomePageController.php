<?php

namespace App\Http\Controllers\Api\Customer;

use App\Http\Controllers\Controller;
use App\Models\Slider;
use App\Models\Venue;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class HomePageController extends Controller
{
    public function index()
    {
        try {
            $sliders = Slider::query()
                ->with(['venue' => function ($query) {
                    $query->select('id', 'name')->without('galleries', 'videos');
                }])
                ->whereHas('venue', function ($venue) {
                    $venue->where('status', 'approve');
                })
                ->orderBy('sort', 'ASC')
                ->get();
            return makeJsonResponse('Success', $sliders);
        } catch (ModelNotFoundException $e) {
            return makeJsonResponse('No Venues Found', [], 404);
        }
    }
}
