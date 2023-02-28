<?php

namespace App\Http\Controllers\Api\Vendor;

use App\Http\Controllers\Controller;
use App\Models\Venue;
use App\Models\VenueGallery;
use App\Models\VenueVideo;
use App\Traits\FileHelper;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use function Symfony\Component\Translation\t;

class VenueController extends Controller
{

    use  FileHelper;

    public function index()
    {
        try {
            $venues = auth()->user()->venues()->get(['id', 'name', 'address', 'feature_image']);
            return makeJsonResponse('Success', $venues);
        } catch (ModelNotFoundException $e) {
            return makeJsonResponse('Error', [], 404);
        }
    }

    public function store(Request $request)
    {
        try {
            $data = $request->all();
            $validator = Validator::make($request->all(), [
                'business_type_id' => 'required',
                'name' => 'required',
//                'per_head' => 'numeric',
//                'rent_amount' => 'numeric',
                'description' => 'required',
                'person_capacity' => 'required',
                'feature_image' => 'required',
                'latitude' => 'required',
                'longitude' => 'required',
                'full_address' => 'required',
                'address' => 'required',
                'images.*' => 'image|required',
                //'video.*' => 'file|required'
            ], [
                'vendor_id.required' => 'Select Vendor required',
                'business_type_id.required' => 'Select Business Type required',
            ]);

            if ($validator->fails()) {
                return makeJsonResponse('Error', [], 422, collect($validator->errors())->values()->map(fn($error) => $error));
            }
            $data['feature_image'] = $this->saveFileAndGetName($request->file('feature_image'));

            $venue = auth('vendor-api')->user()->venues()->create($data);
            $videoPaths = $imagePaths = [];
            foreach ($request->images as $image) {
                $imagePaths[] = ['image' => $this->saveFileAndGetName($image, VenueGallery::class)];
            }
            //foreach ($request->video as $video) {
            //    $videoPaths[] = ['video' => $this->saveFileAndGetName($video, VenueVideo::class)];
            //}
            $venue->galleries()->createMany($imagePaths);
            //$venue->videos()->createMany($videoPaths);
            return makeJsonResponse('VenueCollection Created Successful');
        } catch (ModelNotFoundException $e) {
            return makeJsonResponse('Some Thing Went Wrong', [], 404);
        }

    }

    public function edit($id)
    {
        try {
            $venue = auth()->user()->venues()->findOrFail($id);
            return makeJsonResponse('Success', $venue);
        } catch (ModelNotFoundException $e) {
            return makeJsonResponse('Error', [], 404);
        }
    }

    public function update($id, Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'business_type_id' => 'required',
                'name' => 'required',
//                'per_head' => 'numeric',
//                'rent_amount' => 'numeric',
                'description' => 'required',
                'person_capacity' => 'required',
                'latitude' => 'required',
                'longitude' => 'required',
                'full_address' => 'required',
                'address' => 'required',
            ], [
                'vendor_id.required' => 'Select Vendor required',
                'business_type_id.required' => 'Select Business Type required',
            ]);
            if ($validator->fails()) {
                return makeJsonResponse('Error', [], 422, collect($validator->errors())->values()->map(fn($error) => $error));
            }
            $data = $request->all();
            if ($request->hasFile('feature_image')) {
                $data['feature_image'] = $this->updateFileAndGetName($request->file('feature_image'), auth()->user()->venues()->find($id)->feature_image);
            }
            auth()->user()->venues()->find($id)->update($data);
            return makeJsonResponse('VenueCollection Update Successful');
        } catch (ModelNotFoundException $e) {
            return makeJsonResponse('Some Thing Went Wrong', [], 404);
        }
    }

    public function show($id)
    {
        try {
            $venue = auth()->user()->venues()->findOrFail($id);
            return makeJsonResponse('Success', $venue);
        } catch (ModelNotFoundException $e) {
            return makeJsonResponse('Error', [], 404);
        }
    }

    public function media($id)
    {
        try {
            $venue = auth()->user()->venues()->findOrFail($id);
            return makeJsonResponse('Success', [
                'gallery' => $venue->galleries,
                'videos' => $venue->videos
            ]);
        } catch (ModelNotFoundException $e) {
            return makeJsonResponse('Error', [], 404);
        }
    }

    public function inquires($id)
    {
        try {
            $venue = auth()->user()->venues()->findOrFail($id);
            return makeJsonResponse('Success', [
                'chats' => $venue->chats()->with('user')->get()
            ]);
        } catch (ModelNotFoundException $e) {
            return makeJsonResponse('Error', [], 404);
        }
    }

}
