<div class="content">
    <div class="intro-y flex items-center mt-8">
        <h2 class="text-lg font-medium mr-auto">
            Slider List
        </h2>
        <h2 class="text-right font-medium">
            <a href="{{ route('admin.slider.create') }}">
                <button type="button" class="button btn btn-primary text-white mt-5">Create</button>
            </a>
        </h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="intro-y col-span-12 lg:col-span-12">
            <div class="intro-y box">
                <div class="p-5" id="form-validation">
                    <div class="flex flex-wrap px-3  mb-3">
                        <div class="w-full md:w-full">
                            <label>Search:</label>
                            <input type="text" name="search" wire:model="search" id="search"
                                   class="cols-3 input w-full border mt-2 form-control"
                                   placeholder="Search By Every Thing" minlength="2">
                        </div>
                    </div>
                    <div class="preview">
                        <div class="overflow-x-auto">
                            @if(count($sliders))
                                <table class="table scrollable">
                                    <thead>
                                    <tr>
                                        <th class="border-b-2 dark:border-dark-5 whitespace-no-wrap">#</th>
                                        <th class="border-b-2 dark:border-dark-5 whitespace-no-wrap">Name</th>
                                        <th class="border-b-2 dark:border-dark-5 whitespace-no-wrap">Sorting</th>
                                        <th class="border-b-2 dark:border-dark-5 whitespace-no-wrap">Banner</th>
                                        <th class="border-b-2 dark:border-dark-5 whitespace-no-wrap">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($sliders as $key => $slider)
                                        <tr id="tr_{{$slider->id}}">
                                            <td class="border-b whitespace-no-wrap">{{ $key +1 }}</td>
                                            <td class="border-b whitespace-no-wrap">{{ $slider->venue->name }}</td>
                                            <td class="border-b whitespace-no-wrap">{{ $slider->sort }}</td>
                                            <td class="border-b whitespace-no-wrap">
                                                <img data-action="zoom" class="w-full w-24"
                                                     src="{{$slider->getImagePath('banner')}}">
                                            </td>
                                            <td class="border-b whitespace-no-wrap">
                                                <a href="{{ route('admin.slider.edit', $slider->id) }}">
                                                    <button type="submit" class="btn btn-primary py-1 px-2 mr-2">Edit
                                                    </button>
                                                </a>
                                                <button type="button" onclick="deleteSlider({{ $slider->id }})"
                                                        class="btn btn-danger py-1 px-2 mr-2"> Delete
                                                </button>
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                                <br>
                                @if($sliders->total() > $sliders->perPage())
                                    {{ $sliders->links() }}
                                @else
                                    Showing {{ $sliders->firstItem() }} to {{ $sliders->lastItem() }} out
                                    of {{ $sliders->total() }}
                                    results
                                @endif
                            @else
                                <div
                                    class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative m-3"
                                    role="alert">
                                    <span class="block sm:inline">There Is No Record Found.</span>
                                    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                                                                </span>
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
