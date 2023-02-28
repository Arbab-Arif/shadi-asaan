<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Request;

class CustomerFeedbackController extends Controller
{
    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            try {
                $this->authorizeForUser(auth()->user(), 'customer_feed_back');
            } catch (AuthorizationException $e) {
                abort(401);
            }
            return $next($request);
        });
    }
    public function index()
    {
        return view('admin.customer.feedback');
    }
}
