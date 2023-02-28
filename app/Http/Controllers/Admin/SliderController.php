<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Slider;
use App\Models\Venue;
use App\Traits\FileHelper;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Request;
use function GuzzleHttp\Promise\all;

class SliderController extends Controller
{
    use  FileHelper;

    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            try {
                $this->authorizeForUser(auth()->user(), 'slider');
            } catch (AuthorizationException $e) {
                abort(401);
            }
            return $next($request);
        });
    }

    public function index()
    {
        return view('admin.slider.index');
    }

    public function create()
    {
        return view('admin.slider.create');
    }

    public function venues(Request $request)
    {
        $venues = Venue::query()
            ->where('name', 'like', "%{$request->get('q')}%")
            ->select('id', 'name as text')
            ->paginate(10);
        return [
            'results'    => $venues->items(),
            "pagination" => [
                'more' => $venues->hasMorePages()
            ]
        ];
    }

    public function store(Request $request)
    {
        $request->validate([
            'venue_id' => 'required',
            'banner'   => 'required|image|mimes:jpeg,png,jpg,gif',
            'sort'     => 'required',
        ], [
            'venue_id.required' => 'select venue',
            'sort.required'     => 'The sorting field is required.',

        ]);
        $data = $request->all();
        if ($request->hasFile('banner')) {
            $data['banner'] = $this->saveFileAndGetName($request->file('banner'));

        }
        Slider::create($data);
        $request->session()->flash('success', 'Banner Create Successfully!');
        return to_route('admin.slider.index');
    }

    public function edit(Slider $slider)
    {
        $venues = Venue::all('id', 'name');
        return view('admin.slider.edit', compact('slider', 'venues'));
    }

    public function update(Slider $slider, Request $request)
    {
        $request->validate([
            'venue_id' => 'required',
            'banner'   => "image|mimes:jpeg,png,jpg,gif",
            'sort'     => 'required',
        ], [
            'venue_id.required' => 'select venue',
            'sort.required'     => 'The sorting field is required.',

        ]);
        $updateData = $request->all();
        if ($request->hasFile('banner')) {
            $updateData['banner'] = $this->updateFileAndGetName($request->file('banner'), $slider->banner);

        }
        $slider->update($updateData);
        $request->session()->flash('success', 'Banner Update Successfully!');
        return to_route('admin.slider.index');

    }
}
