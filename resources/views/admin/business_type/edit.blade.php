<x-admin.app>
    <x-slot name="title">
        Shadi Asaan - Edit Business Type
    </x-slot>
    <x-slot name="breadcrumb">
        <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
            <a href="" class="breadcrumb--active">Dashboard</a>
            <i data-feather="chevron-right" class="breadcrumb__icon"></i>
            <a href="" class="breadcrumb--active">Business Type</a>
            <i data-feather="chevron-right" class="breadcrumb__icon"></i>
            <a href="javascript:void(0)">Edit</a>
        </div>
    </x-slot>
    <div class="content">
        <div class="intro-y flex items-center mt-8">
            <h2 class="text-lg font-medium mr-auto">
                Edit Business Type
            </h2>
        </div>
        <div class="grid grid-cols-12 gap-6 mt-5">
            <div class="intro-y col-span-12 lg:col-span-12">
                <div class="intro-y box">
                    <div class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5">
                        <h2 class="font-medium text-base mr-auto">
                            Business Type
                        </h2>
                    </div>
                    <form action="{{route('admin.business_type.update',$businessType->id)}}" method="post" class="p-5"
                          id="form-validation"
                          enctype="multipart/form-data">
                        @csrf
                        @method('put')
                        <div class="preview">
                            <div class="flex flex-wrap -mx-3 mb-2 sm:grid grid-cols-2 gap-2">
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Name
                                    </label>
                                    <input type="text" name="name" id="name"
                                           class="cols-3 input w-full border mt-2" placeholder="Enter Name"
                                           minlength="2" value="{{$businessType->name}}">
                                </div>
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Select Status
                                    </label>
                                    <select class="form-select mt-2 sm:mr-2"
                                            aria-label=".form-select-sm example" name="status">
                                        <option value="">Select Status</option>
                                        <option value="1"@if($businessType->status === 1) {{"selected"}}@endif>Active
                                        </option>
                                        <option value="0"@if($businessType->status === 0) {{"selected"}}@endif>
                                            Deactivate
                                        </option>
                                    </select>
                                </div>
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Icon
                                    </label>
                                    <input type="file" name="icon" id="icno"
                                           accept="image/*"
                                           class="cols-3 input w-full border mt-2" placeholder="Enter Name"
                                           minlength="2" value="{{old('name')}}">
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-2 sm:grid grid-cols-2 gap-2">
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <a class="btn btn-facebook w-24 inline-block mr-1 mb-2 addMore"
                                       href="javascript:;">
                                        add more
                                    </a>
                                </div>
                            </div>
                            <div class="add-div">
                                @foreach($businessType->capacities as $capacity)
                                    <div class="flex flex-wrap -mx-3 mb-2 sm:grid grid-cols-2 gap-2">
                                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                            <label
                                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                Capacity Name
                                            </label>
                                            <input type="text" name="label[]" id="name"
                                                   class="cols-3 input w-full border mt-2"
                                                   placeholder="Enter Capacity Name"
                                                   minlength="2" value="{{$capacity->label}}">
                                        </div>
                                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                            <a href="javascript:;"
                                               class="remove btn btn-danger w-24 inline-block mr-1 mb-2  "
                                               style="margin-top: 31px">Remove</a> '
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                            <button type="submit" class=" button btn btn-primary text-white mt-5">
                                Update
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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

        <script>
            $(document).ready(function () {
                var maxField = 10; //Input fields increment limitation
                var addButton = $('.addMore'); //Add button selector
                var wrapper = $('.add-div'); //Input field wrapper OR nop
                var x = {{$businessType->capacities->count()}}; //Initial field counter is 1
                //Once add button is clicked
                $(addButton).click(function () {
                    //Check maximum number of input fields
                    if (x < maxField) {
                        var fieldHTML =
                            '<div>' +
                            '<div class="flex flex-wrap -mx-3 mb-2 sm:grid grid-cols-2 gap-2">' +
                            '<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">' +
                            '<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">' +
                            'Capacity Name</label>' +
                            '<input type="text" class="cols-3 input w-full border mt-2" id="label" name="label[]" placeholder="enter Capacity Name" value="">' +
                            '</div>' +
                            '<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">' +
                            '<a href="javascript:;" class="remove btn btn-danger w-24 inline-block mr-1 mb-2  " style="margin-top: 31px">Remove</a> ' +
                            '</div>' +
                            '</div>' +
                            '</div>';
                        x++; //Increment field counter
                        $(wrapper).append(fieldHTML); //Add field html
                    }
                });
                //Once remove button is clicked
                $(wrapper).on('click', '.remove', function (e) {
                    e.preventDefault();
                    $(this).parent('div').parent('div').remove(); //Remove field html
                    x--; //Decrement field counter
                });
            })
        </script>
    </x-slot>
</x-admin.app>
