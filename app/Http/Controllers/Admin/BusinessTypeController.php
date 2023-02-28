<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BusinessType;
use App\Models\BusinessTypeCapacity;
use App\Traits\FileHelper;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class BusinessTypeController extends Controller
{
    use  FileHelper;

    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            try {
                $this->authorizeForUser(auth()->user(), 'business_type');
            } catch (AuthorizationException $e) {
                abort(401);
            }
            return $next($request);
        });
    }

    public function index()
    {
        return view('admin.business_type.index');
    }

    public function create()
    {
        return view('admin.business_type.create');
    }

    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name'    => 'required',
                'icon'    => 'required',
                'status'  => 'required',
                'label.*' => 'required'
            ], [
                'label.*.required' => 'The capacity name field is required.'
            ]);
            if ($validator->fails()) {
                return redirect()->back()->withErrors($validator);
            }
            DB::transaction(function () use ($request) {
                $data = $request->all();
                if ($request->hasFile('icon')) {
                    $data['icon'] = $this->saveFileAndGetName($request->file('icon'));
                }
                $label = [];
                $businessTyoe = BusinessType::create($data);
                foreach ($request->label as $label2) {
                    $label[] = ['label' => $label2];
                }
                $businessTyoe->capacities()->createMany($label);
            });
            $request->session()->flash('success', 'Business Type Create Successfully!');
            return redirect()->route('admin.business_type.index');

        } catch (ModelNotFoundException $e) {
            $request->session()->flash('error', 'Failed To Create Business Type!');
            return redirect()->route('admin.business_type.index');

        }
    }

    public function edit(BusinessType $businessType)
    {
        return view('admin.business_type.edit', compact('businessType'));
    }

    public function update(BusinessType $businessType, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'    => 'required',
            'icon'    => "image|mimes:jpeg,png,jpg,gif",
            'status'  => "required",
            'label.*' => 'required'
        ], [
            'label.*.required' => 'The capacity name field is required.'
        ]);
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator);
        }
        $businessTypeData = $request->all();
        if ($request->hasFile('icon')) {
            $businessTypeData['icon'] = $this->updateFileAndGetName($request->file('icon'), $businessType->icon);

        }
        $businessType->update($businessTypeData);
        $businessType->capacities()->delete();
        for ($i = 0; $i < count($request->get('label')); $i++) {
            BusinessTypeCapacity::create([
                'business_type_id' => $businessType->id,
                'label'            => $request->get('label')[$i],
            ]);
        }
        $request->session()->flash('success', 'Business Type Update Successfully!');
        return redirect()->route('admin.business_type.index');
    }

    public function destory(BusinessType $businessType)
    {
        $businessType->delete();

    }
}
