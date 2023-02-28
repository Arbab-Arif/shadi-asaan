<x-admin.app>
    <x-slot name="title">
        Shadi Asaan - Create Subscription
    </x-slot>
    <x-slot name="breadcrumb">
        <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
            <a href="" class="breadcrumb--active">Dashboard</a>
            <i data-feather="chevron-right" class="breadcrumb__icon"></i>
            <a href="" class="breadcrumb--active">Subscription</a>
            <i data-feather="chevron-right" class="breadcrumb__icon"></i>
            <a href="javascript:void(0)">Create</a>
        </div>
    </x-slot>
    <div class="content">
        <div class="intro-y flex items-center mt-8">
            <h2 class="text-lg font-medium mr-auto">
                Create Subscription
            </h2>
        </div>
        <div class="grid grid-cols-12 gap-6 mt-5">
            <div class="intro-y col-span-12 lg:col-span-12">
                <div class="intro-y box">
                    <div class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5">
                        <h2 class="font-medium text-base mr-auto">
                            Subscription
                        </h2>
                    </div>
                    <form action="{{route('admin.subscription.store')}}" method="post" class="p-5" id="form-validation"
                          enctype="multipart/form-data">
                        @csrf
                        <div class="preview ">
                            <div class="flex flex-wrap -mx-3 mb-2 sm:grid grid-cols-2 gap-2">
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Name
                                    </label>
                                    <input type="text" name="name" id="name"
                                           class="cols-3 input w-full border mt-2" placeholder="Enter Name"
                                           minlength="2" value="{{old('name')}}">
                                </div>
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Price
                                    </label>
                                    <input type="number" name="price" id="price"
                                           class="cols-3 input w-full border mt-2" placeholder="Enter price"
                                           minlength="2" value="{{old('price')}}">
                                </div>
                            </div>
                            <div class="fieldGroup">
                                <div class="flex flex-wrap -mx-3 mb-2 sm:grid grid-cols-2 gap-2">
                                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label
                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Point
                                        </label>
                                        <input type="text" name="point[]" id="name"
                                               class="cols-3 input w-full border mt-2" placeholder="Enter Name"
                                               minlength="2" value="{{old('name')}}">
                                    </div>
                                    <div class="mb-6 md:mb-0 md:w-1/3 mt-1.5 px-3 w-full">
                                        <a href="javascript:;" class="addMore button btn btn-primary text-white mt-6">
                                            Add
                                        </a>
                                        <a href="javascript:;" class="remove button btn btn-danger text-white mt-6">
                                            Remove
                                        </a>
                                    </div>
                                </div>
                            </div>


                            <button type="submit" class=" button btn btn-primary text-white mt-5">
                                Submit
                            </button>
                            <a class="btn btn-danger w-24 inline-block mr-1 mb-2"
                               href="{{route('admin.business_type.index')}}">
                                Cancel
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <x-slot name="scripts">
        <script>
            $(document).ready(function () {
                //group add limit
                const maxGroup = 10;

                //add more fields group
                const $body = $("body");
                $body.on("click", ".addMore", function () {
                    if ($('body').find('.fieldGroup').length < maxGroup) {
                        var fieldHTML = '<div class="fieldGroup">' + $(".fieldGroup").html() + '</div>';
                        $('body').find('.fieldGroup:last').after(fieldHTML);
                    } else {
                        alert('Maximum ' + maxGroup + ' groups are allowed.');
                    }
                });

                //remove fields group
                $body.on("click", ".remove", function () {
                    if ($(".remove").length != 1) {
                        $(this).parents(".fieldGroup").remove();
                    }
                });
            });
        </script>
    </x-slot>
</x-admin.app>
