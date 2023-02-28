<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BusinessType;
use App\Models\BusinessTypeCapacity;
use App\Models\Vendor;
use App\Traits\FileHelper;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class VendorController extends Controller
{
    use FileHelper;

    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            try {
                $this->authorizeForUser(auth()->user(), 'vendor');
            } catch (AuthorizationException $e) {
                abort(401);
            }
            return $next($request);
        });
    }

    public function index()
    {
        return view('admin.vendor.index');
    }

    public function create()
    {
        return view('admin.vendor.create');
    }

    public function show(Vendor $vendor)
    {
        return view('admin.vendor.show', compact('vendor'));
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $request['cnic_no'] = Str::remove('#', $request->get('cnic_no'));
        $request['phone'] = Str::remove('#', $request->get('phone'));

        $request->validate([
            'name'       => 'required',
            'email'      => 'required|email|regex:/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix|unique:vendors,email',
            'phone'      => "required|min:13|max:13|unique:vendors",
            'cnic_front' => 'mimes:jpeg,jpg,png,gif|required',
            'cnic_back'  => 'mimes:jpeg,jpg,png,gif|required',
            'cnic_no'    => 'required|min:15|max:15',
        ]);
//        if ($validator->fails()) {
//            return collect($validator->errors())->values()->map(fn($error) => $error);
//        }

        if ($request->hasFile('cnic_front')) {
            $data['cnic_front'] = $this->saveFileAndGetName($request->file('cnic_front'));
        }
        if ($request->hasFile('cnic_back')) {
            $data['cnic_back'] = $this->saveFileAndGetName($request->file('cnic_back'));
        }
        if ($request->password) {
            $data['password'] = bcrypt($request->get('password'));
        }

        Vendor::create($data);
        $request->session()->flash('success', 'Vendor Create Successfully!');
        return redirect()->route('admin.vendor.index');
    }

    public function edit(Vendor $vendor)
    {
        return view('admin.vendor.edit', compact('vendor'));
    }

    public function update(Vendor $vendor, Request $request)
    {

        $request['cnic_no'] = Str::remove('#', $request->get('cnic_no'));
        $request['phone'] = Str::remove('#', $request->get('phone'));
        $request->validate([
            'name'    => 'required',
            'email'   => "required|email|regex:/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix|unique:vendors,email,{$vendor->id}",
            'phone'   => "required|min:13|max:13|unique:vendors,phone,{$vendor->id}",
            'cnic_no' => 'required|min:15|max:15',
            //  'password' => 'required|min:8|confirmed',
        ]);

        $data = $request->all();
        if ($request->hasFile('cnic_front')) {
            $data['cnic_front'] = $this->updateFileAndGetName($request->file('cnic_front'), $vendor->cnic_front);
        }
        if ($request->hasFile('cnic_back')) {
            $data['cnic_back'] = $this->updateFileAndGetName($request->file('cnic_back'), $vendor->cnic_back);
        }
        $vendor->update($data);
        $request->session()->flash('success', 'Vendor Update Successfully!');
        return redirect()->route('admin.vendor.index');
    }

}
