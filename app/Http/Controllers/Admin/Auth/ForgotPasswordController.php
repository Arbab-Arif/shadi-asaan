<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Notifications\AdminForgotPassword;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    use SendsPasswordResetEmails;

    public function showLinkRequestForm()
    {
        return view('admin.auth.passwords.email');
    }

    protected function validateEmail(Request $request)
    {
        $request->validate(['email' => 'required|email|exists:admins,email']);
    }

    public function sendResetLinkEmail(Request $request)
    {
        $this->validateEmail($request);

        $key = Str::random(50) . ':' . now()->timestamp;

        $admin = tap(Admin::whereEmail($request->get('email'))
            ->first())
            ->update([
                'hash_key' => $key
            ]);

        $admin->notify(new AdminForgotPassword($admin));

        return to_route('admin.login')->with('success', 'Your reset link has been sent. Please check your email !');
    }
}
