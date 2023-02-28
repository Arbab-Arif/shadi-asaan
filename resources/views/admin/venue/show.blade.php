<x-admin.app>
    <x-slot name="styles">
    </x-slot>
    <x-slot name="title">
        Shadi Asaan - Venue Detail
    </x-slot>
    <x-slot name="breadcrumb">
        <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
            <a href="" class="breadcrumb--active">Dashboard</a>
            <i data-feather="chevron-right" class="breadcrumb__icon"></i>
            <a href="" class="breadcrumb--active">Venue</a>
            <i data-feather="chevron-right" class="breadcrumb__icon"></i>
            <a href="javascript:void(0)">Detail</a>
        </div>
    </x-slot>
    <div class="content">
        <div class="intro-y flex items-center mt-8">
            <h2 class="text-lg font-medium mr-auto">
                Venue Detail
            </h2>
        </div>
        <div class="box p-2 mt-5">
            <a href="javascript:;"
               class="flex items-center p-3 cursor-pointer transition duration-300 ease-in-out bg-white dark:bg-darkmode-600 hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md">
                <div class="max-w-[50%] truncate mr-1">Venue: <strong>{{$venue->name ?? 'N/A'}}</strong></div>
            </a>
            <a href="javascript:;"
               class="flex items-center p-3 cursor-pointer transition duration-300 ease-in-out bg-white dark:bg-darkmode-600 hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md">
                <div class="max-w-[50%] truncate mr-1">Vendor: <strong>{{$venue->vendor->name ?? 'N/A'}}</strong></div>
            </a>
            <a href="javascript:;"
               class="flex items-center p-3 cursor-pointer transition duration-300 ease-in-out bg-white dark:bg-darkmode-600 hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md">
                <div class="max-w-[50%] truncate mr-1">Vendor No.: <strong>{{$venue->vendor->phone   ?? 'N/A'}}</strong>
                </div>
            </a>
            <a href="javascript:;"
               class="flex items-center p-3 cursor-pointer transition duration-300 ease-in-out bg-white dark:bg-darkmode-600 hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md">
                <div class="max-w-[50%] truncate mr-1">Business Type:
                    <strong>{{$venue->businessType->name ?? 'N/A'}}</strong>
                </div>
            </a>
            {{--            <a href="javascript:;"--}}
            {{--               class="flex items-center p-3 cursor-pointer transition duration-300 ease-in-out bg-white dark:bg-darkmode-600 hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md">--}}
            {{--                <div class="max-w-[50%] truncate mr-1">Per Head: <strong>{{$venue->per_head ?? 'N/A'}}</strong>--}}
            {{--                </div>--}}
            {{--            </a>--}}
            {{--            <a href="javascript:;"--}}
            {{--               class="flex items-center p-3 cursor-pointer transition duration-300 ease-in-out bg-white dark:bg-darkmode-600 hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md">--}}
            {{--                <div class="max-w-[50%] truncate mr-1">Rent Amount: <strong>{{$venue->rent_amount ?? 'N/A'}}</strong>--}}
            {{--                </div>--}}
            {{--            </a>--}}
            <a href="javascript:;"
               class="flex items-center p-3 cursor-pointer transition duration-300 ease-in-out bg-white dark:bg-darkmode-600 hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md">
                <div class="max-w-[50%] truncate mr-1">Person Capacity:
                    <strong>{{$venue->person_capacity ?? 'N/A'}}</strong>
                </div>
            </a>
            <a href="javascript:;"
               class="flex items-center p-3 cursor-pointer transition duration-300 ease-in-out bg-white dark:bg-darkmode-600 hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md">
                <div class="max-w-[50%] truncate mr-1">Address:
                    <strong>{{$venue->address ?? 'N/A'}}</strong>
                </div>
            </a><a href="javascript:;"
                   class="flex items-center p-3 cursor-pointer transition duration-300 ease-in-out bg-white dark:bg-darkmode-600 hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md">
                <div class="max-w-[50%] truncate mr-1">Description:
                    <strong>{{$venue->description ?? 'N/A'}}</strong>
                </div>
            </a>
            <a href="javascript:;"
               class="flex items-center p-3 cursor-pointer transition duration-300 ease-in-out bg-white dark:bg-darkmode-600 hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md">
                <div class="max-w-[50%] truncate mr-1">Feature Image:
                    <img data-action="zoom" class="w-full w-1/4"
                         src="{{$venue->getImagePath('feature_image')}}">
                </div>
            </a>

        </div>
        @if(count($venue->galleries))
            <div class="intro-y grid grid-cols-12 gap-3 sm:gap-6 mt-5\">
                <div class="intro-y col-span-12 lg:col-span-12">
                    <div class="intro-y box">
                        <div
                            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5">
                            <h2 class="font-medium text-base mr-auto">
                                Venue Gallery
                            </h2>
                        </div>
                    </div>
                </div>
                @foreach($venue->galleries as $gallery)
                    <div class="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                        <div class="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                            <a href="javascript:;" class="w-3/5 file__icon file__icon--image mx-auto">
                                <div class="file__icon--image__preview image-fit">
                                    <img data-action="zoom" class="w-full"
                                         src="{{$gallery->getImagePath('image')}}">
                                </div>
                            </a>
                        </div>
                    </div>
                @endforeach
                @endif
                @if(count($venue->videos))
                    <div class="intro-y col-span-12 lg:col-span-12">
                        <div class="intro-y box">
                            <div
                                class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5">
                                <h2 class="font-medium text-base mr-auto">
                                    Venue Video
                                </h2>
                            </div>
                        </div>
                    </div>
                    @foreach($venue->videos as $video)
                        <div class="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2">
                            <div class="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                                <a href="{{$video->getImagePath('video')}}" download
                                   class="w-3/5 file__icon file__icon--file mx-auto">
                                    <div class="file__icon__file-name">MP4</div>
                                </a>
                            </div>
                        </div>
                    @endforeach
                @endif
                <div class="intro-y col-span-12 lg:col-span-12 mt-10 ">
                    <div class="intro-y box">
                        <div
                            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5">
                            <h2 class="font-medium text-base mr-auto">
                                Venue Status Update
                            </h2>
                        </div>
                        <form action="{{route('admin.venue.status.update',$venue->id)}}" method="post" class="p-5"
                              id="form-validation"
                              enctype="multipart/form-data">
                            @csrf
                            @method('put')
                            <div class="preview">
                                <div class="flex flex-wrap -mx-3 mb-2 sm:grid grid-cols-2 gap-2">
                                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label
                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Select Status
                                        </label>
                                        <select class="form-select mt-2 sm:mr-2"
                                                aria-label=".form-select-sm example" name="status">
                                            <option value="">Select Status</option>
                                            <option
                                                value="approve" @if($venue->status == 'approve') {{'selected'}} @endif >
                                                Approve
                                            </option>
                                            <option
                                                value="pending" @if($venue->status == 'pending') {{'selected'}} @endif >
                                                Pending
                                            </option>
                                            <option
                                                value="reject" @if($venue->status == 'reject') {{'selected'}} @endif >
                                                Reject
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" class=" button btn btn-primary text-white mt-5">
                                    Update
                                </button>
                                <a class="btn btn-danger w-24 inline-block mr-1 mb-2"
                                   href="{{route('admin.venue.index')}}">
                                    Cancel
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

    </div>
    <x-slot name="scripts">

    </x-slot>
</x-admin.app>
