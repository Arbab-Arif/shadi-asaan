<?php

namespace App\Http\Controllers\Api\Customer;

use App\Http\Controllers\Controller;
use App\Models\Inquire;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class InquireController extends Controller
{
    public function store(Request $request)
    {
        try {
            $data = $request->all();
            $validator = Validator::make($request->all(), [
                'venue_id' => 'required',
                'user_id'  => 'required',
                'message'  => 'required',
            ]);
            if ($validator->fails()) {
                return makeJsonResponse('Error', [], 422, collect($validator->errors())->values()->map(fn($error) => $error));
            }

            Inquire::create($data);
            return makeJsonResponse('You are request has submitted');

        } catch (ModelNotFoundException $e) {
            return makeJsonResponse('Some Thing Went Wrong', [], 404);
        }
    }
}
