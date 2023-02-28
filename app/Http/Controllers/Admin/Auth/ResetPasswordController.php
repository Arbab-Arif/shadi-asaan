<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Providers\RouteServiceProvider;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;

class ResetPasswordController extends Controller
{
    /**
     * Where to redirect users after resetting their password.
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::ADMIN_HOME;

    public function showResetForm($token)
    {
        try {
            $this->checkTimeStamp($token);
            Admin::where('hash_key', $token)
                ->firstOrFail();
            return view('admin.auth.passwords.reset', compact('token'));
        } catch (ModelNotFoundException $e) {
            return abort(404);
        } catch (Exception $e) {
            return abort(410, 'Link Has Been Expired Generate A New One');
        }
    }

    function reset(Request $request)
    {
        $this->validate($request, [
            'password'              => 'min:8',
            'password_confirmation' => 'required_with:password|same:password|min:8'
        ]);
        try {
            Admin::where('hash_key', $request->token)
                ->firstOrFail()
                ->update([
                    'password' => bcrypt($request->get('password')),
                    'hash_key' => ''
                ]);
            return redirect('admin/login')->with(['success' => 'Your password has been changed !']);
        } catch (Exception $e) {
            return abort(410, 'Link Has Been Expired Generate A New One');
        }
    }

    protected function checkTimeStamp($token)
    {
        $now = Carbon::now();
        $timestamp = intval(Arr::last(explode(':', $token)));
        if (is_integer($timestamp)) {
            $dateFromTimeStamp = new Carbon($timestamp);
            $difference = $dateFromTimeStamp->diffInHours($now);
            if ($difference < 2) {
                return true;
            }
        }
        throw new Exception();
    }

    public function guard()
    {
        return Auth::guard('admin');
    }
}
