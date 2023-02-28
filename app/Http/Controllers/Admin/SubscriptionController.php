<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Subscription;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            try {
                $this->authorizeForUser(auth()->user(), 'subscription');
            } catch (AuthorizationException $e) {
                abort(401);
            }
            return $next($request);
        });
    }

    public function index()
    {
        return view('admin.subscription.index');
    }

    public function create()
    {
        return view('admin.subscription.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name'  => 'required',
            'price' => 'required',
            'point' => 'required',
        ]);
        $points = [];
        foreach ($request->point as $point) {
            $points[]['name'] = $point;
        }
        $subscription = Subscription::create($request->all());
        $subscription->subscriptionPoint()->createMany($points);
        $request->session()->flash('success', 'Subscription Create Successfully!');
        return to_route('admin.subscription.index');
    }
}
