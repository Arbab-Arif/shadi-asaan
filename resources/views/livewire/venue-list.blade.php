<div class="content">
    <div class="intro-y flex items-center mt-8">
        <h2 class="text-lg font-medium mr-auto">
            Venue List
        </h2>
        <h2 class="text-right font-medium">
            <a href="{{ route('admin.venue.create') }}">
                <button type="button" class="button btn btn-primary text-white mt-5">Create</button>
            </a>
            <button type="submit" wire:click="venueExport()" class="button btn btn-primary text-white mt-5">
                Export
            </button>
        </h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="intro-y col-span-12 lg:col-span-12">
            <div class="intro-y box">
                <div class="p-5" id="form-validation">
                    <div class="flex flex-wrap px-3 mb-3">
                        <div class="w-full md:w-full">
                            <label>Search:</label>
                            <input type="text" name="search" wire:model="search" id="search"
                                   class="cols-3 input w-full border mt-2 form-control"
                                   placeholder="Search By Venue Name Vendor Name "
                                   minlength="2">
                        </div>
                    </div>
                    <div class="preview">
                        <div class="overflow-x-auto">
                            @if(count($venues))
                                <table class="table scrollable">
                                    <thead>
                                    <tr>
                                        <th class="border-b-2 dark:border-dark-5 whitespace-no-wrap">#</th>
                                        <th class="border-b-2 dark:border-dark-5 whitespace-no-wrap">Name</th>
                                        <th class="border-b-2 dark:border-dark-5 whitespace-no-wrap">Vendor</th>
                                        <th class="border-b-2 dark:border-dark-5 whitespace-no-wrap">Business Type</th>
                                        <th class="border-b-2 dark:border-dark-5 whitespace-no-wrap">Person Capacity
                                        </th>
                                        <th class="border-b-2 dark:border-dark-5 whitespace-no-wrap">Status</th>
                                        <th class="border-b-2 dark:border-dark-5 whitespace-no-wrap">Registration date
                                        </th>
                                        <th class="border-b-2 dark:border-dark-5 whitespace-no-wrap">Show
                                        </th>
                                        <th class="border-b-2 dark:border-dark-5 whitespace-no-wrap">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($venues as $key=> $venue)
                                        <tr id="">
                                            <td class="border-b whitespace-no-wrap">{{$key + 1}}</td>
                                            <td class="border-b whitespace-no-wrap">{{$venue->name ?? 'N/A'}}</td>
                                            <td class="border-b whitespace-no-wrap">{{$venue->vendor->name ?? 'N/A'}}</td>
                                            <td class="border-b whitespace-no-wrap">{{$venue->businessType->name}}</td>
                                            <td class="border-b whitespace-no-wrap">{{$venue->person_capacity}}</td>
                                            <td class="border-b whitespace-no-wrap">{{$venue->status}}</td>
                                            <td class="border-b whitespace-no-wrap">{{$venue->created_at->format('Y-m-d')}}</td>
                                            <td class="border-b whitespace-no-wrap">
                                                <a class="btn btn-primary py-1 px-2 mr-2"
                                                   href="{{route('admin.venue.show',$venue->id)}}">
                                                    <i class="fa fa-eye"></i>
                                                </a>
                                            </td>
                                            <td class="border-b whitespace-no-wrap">
                                                <a class="btn btn-instagram py-1 px-2 mr-2"
                                                   href="{{route('admin.venue.edit',$venue->id)}}">
                                                    <i class="fa fa-edit"></i>
                                                </a>
                                                <a class="btn btn-facebook py-1 px-2 mr-2"
                                                   href="{{route('admin.venue.gallery',$venue->id)}}">
                                                    <i class="fa fa-image"></i>
                                                </a>
{{--                                                <a class="btn btn-twitter text-white py-1 px-2 mr-2"--}}
{{--                                                   href="{{route('admin.venue.video',$venue->id)}}">--}}
{{--                                                    <i class="fa fa-video"></i>--}}
{{--                                                </a>--}}

                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                                <br>
                                @if($venues->total() > $venues->perPage())
                                    {{ $venues->links() }}
                                @else
                                    Showing {{ $venues->firstItem() }} to {{ $venues->lastItem() }} out
                                    of {{ $venues->total() }}
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
