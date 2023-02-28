<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Permission;
use App\Models\Role;
use App\Traits\CacheHelper;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    use CacheHelper;

    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            try {
                $this->authorizeForUser(auth()->user(), 'role_management');
            } catch (AuthorizationException $e) {
                abort(401);
            }
            return $next($request);
        });
    }

    public function index()
    {
        return view('admin.role.index');
    }

    public function create()
    {
        $permissions = Permission::all();
        return view('admin.role.create', compact('permissions'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'label'       => 'required',
            'permissions' => 'required',
        ], [
            'label.required' => 'The role name field is required.'
        ]);
        $role = Role::create($request->only('label'));
        $role->permissions()->sync($request->get('permissions'));
        $this->rebuildCache('forever', Permission::with('roles')->get());
        $request->session()->flash('success', 'Role Create Successfully!');
        return to_route('admin.role.index');
    }
}
