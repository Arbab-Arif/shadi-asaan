<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Vendor;
use App\Models\Venue;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $vendors = Vendor::count();
        $customers = User::count();
        $venus = Venue::count();
        return view('admin.dashboard', compact('customers', 'vendors', 'venus'));
    }
}
