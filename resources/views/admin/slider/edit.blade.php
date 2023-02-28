<x-admin.app>
    <x-slot name="title">
        Shadi Asaan - Edit Slider
    </x-slot>
    <x-slot name="styles">
        <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet"/>
        <style>
            .select2 {
                width: 100% !important;
            }
        </style>
    </x-slot>
    <x-slot name="breadcrumb">
        <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
            <a href="" class="breadcrumb--active">Dashboard</a>
            <i data-feather="chevron-right" class="breadcrumb__icon"></i>
            <a href="" class="breadcrumb--active">Slider</a>
            <i data-feather="chevron-right" class="breadcrumb__icon"></i>
            <a href="javascript:void(0)">Edit</a>
        </div>
    </x-slot>
    <div class="content">
        <div class="intro-y flex items-center mt-8">
            <h2 class="text-lg font-medium mr-auto">
                Edit Slider
            </h2>
        </div>
        <div class="grid grid-cols-12 gap-6 mt-5">
            <div class="intro-y col-span-12 lg:col-span-12">
                <div class="intro-y box">
                    <div class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5">
                        <h2 class="font-medium text-base mr-auto">
                            Slider
                        </h2>
                    </div>
                    <form action="{{route('admin.slider.update',$slider->id)}}" method="post" class="p-5" id="form-validation"
                          enctype="multipart/form-data">
                        @csrf
                        @method('put')
                        <div class="preview">
                            <div class="flex flex-wrap -mx-3 mb-2 sm:grid grid-cols-2 gap-2">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0" id="venue_id_div">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Venue
                                    </label>
                                    <select name="venue_id" id="venue_id" class="w-full">
                                        @foreach($venues as $venue)
                                            <option
                                                value="{{$venue->id}}" @if($venue->id == $slider->venue_id) {{"selected"}} @endif>{{$venue->name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                                        Banner
                                    </label>
                                    <input multiple="" type="file" name="banner" id="banner" accept="image/*"
                                           class="cols-3 input w-full border mt-2" minlength="2" value="">
                                </div>
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                                        Sorting
                                    </label>
                                    <input type="number" name="sort" id="sort" accept=""
                                           class="cols-3 input w-full border mt-2" minlength="2"
                                           value="{{$slider->sort}}">
                                </div>
                            </div>
                            <button type="submit" class=" button btn btn-primary text-white mt-5">
                                Submit
                            </button>
                            <a href="{{route('admin.slider.index')}}"
                               class="btn btn-danger w-24 inline-block mr-1 mb-2">
                                Cancel
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <x-slot name="scripts">
        <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>

        <script>
            $(() => {
                const baseSelect2Config = {
                    delay: 200,
                    data: function (params) {
                        return {
                            q: params.term,
                            page: params.page || 1
                        };
                    },
                    minimumInputLength: 2
                };
                $('#venue_id').select2({
                    ajax: {
                        url: '{{ route('admin.slider.venue.search') }}',
                        placeholder: 'Search for multiple venues',
                        ...baseSelect2Config
                    }
                });
            });


        </script>
    </x-slot>
</x-admin.app>
