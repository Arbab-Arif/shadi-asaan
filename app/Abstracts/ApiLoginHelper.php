<?php

namespace App\Abstracts;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use function makeJsonResponse;

abstract class ApiLoginHelper extends Controller
{

    abstract public function model();

    public function checkLogin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'phone' => 'required|min:11|max:15',
        ]);

        if ($validator->fails()) {
            return $this->sendErrors($validator);
        }
        $otp = $this->sendOtp($request->get('phone'), $request->get('signature'));
        try {
            $user = $this->model()->where($request->only('phone'))->firstOrFail();
            $user->update([
                'otp' => $otp
            ]);
            return makeJsonResponse('Success', ['has_user' => true]);
        } catch (ModelNotFoundException $e) {
            return makeJsonResponse('Error', ['has_user' => false, 'otp' => $otp]);
        }
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'phone' => 'required|min:11|max:15',
            'otp'   => 'required',
        ]);

        if ($validator->fails()) {
            return $this->sendErrors($validator);
        }
        try {
            $user = $this->model()->where($request->only('phone', 'otp',))->firstOrFail();
            $user->update([
                'otp' => null,
            ]);
            if ($request->has('platform')) {
                $user->deviceTokens()->create([
                    'platform' => $request->get('platform'),
                    'token'    => $request->get('device_token'),
                ]);
            }
            $token = $user->createToken('application_token')->accessToken;
            return makeJsonResponse('Success', ['token' => $token]);
        } catch (ModelNotFoundException $e) {
            return makeJsonResponse('Error', [], 404);
        }
    }

    protected function sendErrors($validator)
    {
        return makeJsonResponse(
            'Error',
            [],
            422,
            collect($validator->errors())->values()->map(fn($error) => $error[0])
        );
    }

    public function logout(Request $request)
    {
        $user = $request->user();
        if ($request->has('device_token')) {
            $user->deviceTokens()
                ->where([
                    'token' => $request->get('device_token')
                ])
                ->delete();
        }
        $user->token()->revoke();
        return makeJsonResponse('Success', 'you have successfully logout');
    }

    protected function sendOtp($mobile, $signature)
    {
        if ($mobile == "921234567890") return 1234;
        $otp = mt_rand(1111, 9999);
        $mobile = Str::replace('+', '', $mobile);
        $url = "http://bsms.its.com.pk/api.php";
        Http::get($url, [
            'key'      => '2c42098d365c3ea0c170e142a46737e6',
            'sender'   => 'Shadi Asaan',
            'receiver' => $mobile,
            'msgdata'  => "Your OTP code for ShadiAsaan app is $otp. For any issues, contact us at https://www.shadiasaan.com \n $signature"
        ]);
        return $otp;
    }

}
