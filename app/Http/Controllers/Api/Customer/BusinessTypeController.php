<?php

namespace App\Http\Controllers\Api\Customer;

use App\Http\Controllers\Controller;
use App\Models\BusinessType;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

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
