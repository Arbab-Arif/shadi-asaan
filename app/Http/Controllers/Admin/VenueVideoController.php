<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Venue;
use App\Models\VenueVideo;
use App\Traits\FileHelper;
use Illuminate\Http\Request;

class VenueVideoController extends Controller
{
    use FileHelper;

    public function show(Venue $venue)
    {
        return view('admin.venue.video', compact('venue'));
    }

    public function create(Request $request)
    {
        $videoData = $request->all();
        if ($request->hasFile('video')) {
            $videoData['video'] = $this->saveFileAndGetName($request->file('video'));
        }
        VenueVideo::create($videoData);
        $request->session()->flash('success', 'add video Successfully!');
        return back();

    }

    public function destroy(VenueVideo $venueVideo)
    {
        $this->deleteFile($venueVideo->video);
        $venueVideo->delete();
        session()->flash('success', 'video Deleted Successfully!');
        return response()->json();
    }
}
