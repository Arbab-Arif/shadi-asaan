<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\Role;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Request;

class SubAdminController extends Controller
{
    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            try {
                $this->authorizeForUser(auth()->user(), 'admin_management');
            } catch (AuthorizationException $e) {
                abort(401);
            }
            return $next($request);
        });
    }

    public function index()
    {
        return view('admin.sub_admin.index');
    }

    public function create()
    {
        $roles = Role::all();
        return view('admin.sub_admin.create', compact('roles'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name'     => 'required',
            'email'    => 'required|unique:admins,email',
            'password' => 'required|min:8',
            'role_id'  => 'required',
        ],
            [
                'role_id.required' => 'select role required'
            ]);
        $subAdminData = $request->except('role_id');
        $subAdminData['password'] = bcrypt($subAdminData['password']);

        $admin = Admin::create($subAdminData);
        $admin->roles()->sync($request->get('role_id'));
        $request->session()->flash('success', 'Sub Admin Create Successfully!');
        return to_route('admin.sub_admin.index');
    }

    public function edit(Admin $sub_admin)
    {
        $roles = Role::all('id', 'label');
        $subAdminData = Admin::with('roles')->findOrFail($sub_admin->id);
        return view('admin.sub_admin.edit', compact('sub_admin', 'subAdminData', 'roles'));

    }

    public function update(Request $request, Admin $sub_admin)
    {
        $request->validate([
            'name'    => 'required',
            'email'   => "required|unique:admins,email,{$sub_admin->id}",
            'role_id' => "required",
        ], [
            'role_id.required' => 'select role required'
        ]);

        $subAdminData = $request->all();
//        if ($request->has('password')) {
//            $subAdminData['password'] = bcrypt($request->get('password'));
//        }

        $admin = tap(Admin::find($sub_admin->id))->update($subAdminData);

        $admin->roles()->sync($request->get('role_id'));
        $request->session()->flash('success', 'Sub Admin Update Successfully!');
        return to_route('admin.sub_admin.index');
    }
}
