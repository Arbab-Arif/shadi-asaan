<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Venue;
use App\Models\VenueGallery;
use App\Traits\FileHelper;
use Illuminate\Http\Request;

class VenueGalleryController extends Controller
{
    use FileHelper;

    public function show(Venue $venue)
    {
        return view('admin.venue.gallery', compact('venue'));
    }

    public function create(Request $request)
    {
        $galleryData = $request->all();
        if ($request->hasFile('image')) {
            $galleryData['image'] = $this->saveFileAndGetName($request->file('image'));
        }
        VenueGallery::create($galleryData);
        $request->session()->flash('success', 'add image Successfully!');
        return back();

    }

    public function destroy(VenueGallery $venueGallery)
    {
        $this->deleteFile($venueGallery->image);
        $venueGallery->delete();
        session()->flash('success', 'Image Deleted Successfully!');
        return response()->json();
    }
}
