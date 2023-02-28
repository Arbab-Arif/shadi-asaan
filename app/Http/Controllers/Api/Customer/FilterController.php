<?php

namespace App\Http\Controllers\Api\Customer;

use App\Http\Controllers\Controller;
use App\Models\Venue;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FilterController extends Controller
{
    public function filter(Request $request)
    {
        try {
            $personCapacity = (string)$request->get('person_capacity');
            $BusinessTypeId = $request->get('business_type_id');
            $venue = Venue::query()->where('status', 'approve')
                ->when($personCapacity, function ($query, $capacity) {
                    return $query->where('person_capacity', $capacity);
                })
                ->when($BusinessTypeId, function ($q, $businessId) {
                    return $q->where('business_type_id', $businessId);
                })
                ->checkDistance($request->get('lat'), $request->get('lng'))
                ->without('galleries', 'videos')
                ->paginate(10);
            return makeJsonResponse('Success', $venue);
        } catch (ModelNotFoundException $e) {
            return makeJsonResponse('Error', [], 404);

        }
    }

}
