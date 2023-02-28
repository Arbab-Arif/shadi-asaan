<?php

namespace App\Http\Controllers\Api\Vendor\Auth;

use App\Http\Controllers\Controller;
use App\Models\Vendor;
use App\Traits\FileHelper;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use function makeJsonResponse;

class RegisterController extends Controller
{

    use FileHelper;

    public function store(Request $request)
    {

        try {
            $validator = Validator::make($request->all(), [
                'name'          => 'required',
                'email'         => 'email|required|unique:vendors',
                'phone'         => 'required|min:12|max:13|unique:vendors',
                'date_of_birth' => 'required',
                'cnic_no'       => 'required|max:16|unique:vendors',
                'cnic_front'    => 'required',
                'cnic_back'     => 'required',
            ], [
                'name.required'       => 'Full Name is required',
                'cnic_no.required'    => 'CNIC No is required',
                'cnic_no.unique'      => 'The CNIC No has already been taken',
                'cnic_front.required' => 'CNIC Front Image Is required',
                'cnic_back.required'  => 'CNIC back Image is required',
            ]);

            if ($validator->fails()) {
                return makeJsonResponse('Error', [], 422, collect($validator->errors())->values()->map(fn($error) => $error));
            }
            $data = $request->all();
            $data['cnic_front'] = $this->saveFileAndGetName($request->file('cnic_front'), Vendor::class);
            $data['cnic_back'] = $this->saveFileAndGetName($request->file('cnic_back'), Vendor::class);
            if ($request->password) {
                $data['password'] = bcrypt($request->get('password'));
            }
            $vendor = Vendor::create($data);
            $token = $vendor->createToken('application_token')->accessToken;
            return makeJsonResponse('Vendor Register Successful', ['token' => $token]);
        } catch (ModelNotFoundException $e) {
            return makeJsonResponse('Some Thing Went Wrong', [], 404);
        }
    }

}
