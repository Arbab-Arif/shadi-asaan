<x-admin.app>
    <x-slot name="title">
        Shadi Asaan - Create Area
    </x-slot>
    <x-slot name="breadcrumb">
        <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
            <a href="" class="breadcrumb--active">Dashboard</a>
            <i data-feather="chevron-right" class="breadcrumb__icon"></i>
            <a href="" class="breadcrumb--active">Area</a>
            <i data-feather="chevron-right" class="breadcrumb__icon"></i>
            <a href="javascript:void(0)">Create</a>
        </div>
    </x-slot>
    <div class="content">
        <div class="intro-y flex items-center mt-8">
            <h2 class="text-lg font-medium mr-auto">
                Create Area
            </h2>
        </div>
        <div class="grid grid-cols-12 gap-6 mt-5">
            <div class="intro-y col-span-12 lg:col-span-12">
                <div class="intro-y box">
                    <div class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5">
                        <h2 class="font-medium text-base mr-auto">
                            Area
                        </h2>
                    </div>
                    <form action="{{route('admin.area.store')}}" method="post" class="p-5" id="form-validation"
                          enctype="multipart/form-data">
                        @csrf
                        <div class="preview">
                            <div class="flex flex-wrap -mx-3 mb-2 sm:grid grid-cols-2 gap-2">
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Name
                                    </label>
                                    <input type="text" name="name" id="name"
                                           class="cols-3 input w-full border mt-2" placeholder="Enter Name"
                                           minlength="2" value="{{old('name')}}">
                                </div>
                            </div>
                            <button type="submit" class=" button btn btn-primary text-white mt-5">
                                Submit
                            </button>
                            <a href="{{route('admin.area.index')}}">
                                <button class="btn btn-danger w-24 inline-block mr-1 mb-2">Cancel</button>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-admin.app>
