<?php

namespace App\Http\Controllers\Api\Customer;

use App\Http\Controllers\Controller;
use App\Models\Venue;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class VenueController extends Controller
{
    public function show($id)
    {
        try {
            $venue = Venue::with('businessType', 'vendor')
                ->where('status', 'approve')
                ->findOrFail($id);
            $venue->increment('view');
            return makeJsonResponse('Success', $venue);
        } catch (ModelNotFoundException $e) {
            return makeJsonResponse('error', [], 404);

        }
    }
}
