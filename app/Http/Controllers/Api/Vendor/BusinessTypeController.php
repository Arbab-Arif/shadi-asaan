<?php

namespace App\Http\Controllers\Api\Vendor;

use App\Http\Controllers\Controller;
use App\Models\BusinessType;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use function makeJsonResponse;

class BusinessTypeController extends Controller
{
    public function index()
    {
        try {
            return makeJsonResponse('Success', BusinessType::with('capacities')->where('status', 1)->get());
        } catch (ModelNotFoundException $e) {
            return makeJsonResponse('Business Types  Not Found');
        }
    }
}
