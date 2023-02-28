<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Area;
use App\Models\BusinessType;
use App\Models\BusinessTypeCapacity;
use App\Models\Vendor;
use App\Models\Venue;
use App\Models\VenueGallery;
use App\Models\VenueVideo;
use App\Traits\FileHelper;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class VenueController extends Controller
{
    use  FileHelper;

    public function index()
    {
        return view('admin.venue.index');
    }

    public function create()
    {
        $vendors = Vendor::all('id', 'name');
        $areas = Area::all('id', 'name');
        $businessTypes = BusinessType::all('id', 'name');
        return view('admin.venue.create')->with([
            'vendors'       => $vendors,
            'areas'         => $areas,
            'businessTypes' => $businessTypes,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'vendor_id'        => 'required',
            'business_type_id' => 'required',
            'name'             => 'required',
            'location_address' => 'required',
            'person_capacity'  => 'required',
            'images.*'         => 'image|required|mimes:jpeg,jpg,png,gif|required',
//            'video.*'          => 'required|mimes:mp4',
        ], [
            'vendor_id.required'        => 'Select Vendor required',
            'business_type_id.required' => 'Select Business Type required',
            'name.required'             => 'Business Name required',
        ]);
        DB::transaction(function () use ($request) {
            $data = $request->all();
            $imagePaths = [];
            $videoPaths = [];
            if ($request->hasFile('feature_image')) {
                $data['feature_image'] = $this->saveFileAndGetName($request->file('feature_image'));
            }
            foreach ($request->images as $image) {
                $imagePaths[] = $this->saveFileAndGetName($image, VenueGallery::class);
            }
            $data['full_address'] = $request->get('location_address');
//            foreach ($request->video as $video) {
//                $videoPaths[] = $this->saveFileAndGetName($video, VenueVideo::class);
//            }
            $venue = Venue::create($data);
            foreach ($imagePaths as $imagePath) {
                VenueGallery::create([
                    'image'    => $imagePath,
                    'venue_id' => $venue->id,
                ]);
            }
//            foreach ($videoPaths as $videoPath) {
//                VenueVideo::create([
//                    'video'    => $videoPath,
//                    'venue_id' => $venue->id,
//                ]);
//            }
        });

        $request->session()->flash('success', 'Venue Create Successfully!');
        return to_route('admin.venue.index');
    }

    public function show(Venue $venue)
    {
        return view('admin.venue.show', compact('venue'));
    }

    public function edit(Venue $venue)
    {
        $vendors = Vendor::all('id', 'name');
        $businessTypes = BusinessType::all('id', 'name');
        return view('admin.venue.edit', compact('venue', 'vendors', 'businessTypes'));
    }

    public function update(Venue $venue, Request $request)
    {
        $request->validate([
            'vendor_id'        => 'required',
            'business_type_id' => 'required',
            'name'             => 'required',
            'person_capacity'  => 'required',
//            'images.*'         => 'image|required|mimes:jpeg,jpg,png,gif|required',
//            'video.*'          => 'required|mimes:mp4',
        ], [
            'vendor_id.required'        => 'Select Vendor required',
            'business_type_id.required' => 'Select Business Type required',
            'name.required'             => 'Business Name required',
        ]);
        $updateData = $request->all();
        if ($request->hasFile('feature_image')) {
            $updateData['feature_image'] = $this->updateFileAndGetName($request->file('feature_image'), $venue->feature_image);
        }
        $updateData['full_address'] = $request['location_address'];
        $venue->update($updateData);
        $request->session()->flash('success', 'Venue Details  Update Successfully!');
        return to_route('admin.venue.index');
    }

    public function updateStatus(Venue $venue, Request $request)
    {
        $request->validate([
            'status' => 'required'
        ], [
            'status.required' => 'Select Status required',
        ]);
        $venue->update($request->all());
        $request->session()->flash('success', 'Status Update Successfully!');
        return to_route('admin.venue.index');
    }

    public function BusinessTypeCapacity(Request $request)
    {
        $businessTypeId = $request->get('id');
        $data = BusinessTypeCapacity::where('business_type_id', $businessTypeId)->get();
        return response()->json($data);
    }

}
