<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Area;
use Illuminate\Http\Request;

class AreaController extends Controller
{
    public function index()
    {
        return view('admin.area.index');
    }

    public function create()
    {
        return view('admin.area.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);
        $data = $request->all();
        Area::create($data);
        $request->session()->flash('success', 'Area Create Successfully!');
        return redirect()->route('admin.area.index');
    }

    public function edit(Area $area)
    {
        return view('admin.area.edit', compact('area'));
    }

    public function update(Area $area, Request $request)
    {
        $area->update($request->all());
        $request->session()->flash('success', 'Area Update Successfully!');
        return redirect()->route('admin.area.index');
    }
}
