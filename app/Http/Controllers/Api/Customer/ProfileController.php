<?php

namespace App\Http\Controllers\Api\Customer;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProfileController extends Controller
{
    public function show()
    {
        try {
            return makeJsonResponse('Success', request()->user());
        } catch (ModelNotFoundException $e) {
            return makeJsonResponse('Error', [], 404);

        }
    }

    public function update()
    {
        try {
            $validator = Validator::make(request()->all(), [
                'name' => 'required',
            ]);
            if ($validator->fails()) {
                return makeJsonResponse('Error', [], 422, collect($validator->errors())->values()->map(fn($error) => $error));
            }
            auth()->user()->update([
                'name' => request()->get('name'),
            ]);
            return makeJsonResponse('your profile update successful');
        } catch (ModelNotFoundException $e) {
            return makeJsonResponse('Some Thing Went Wrong', [], 404);

        }

    }
}
