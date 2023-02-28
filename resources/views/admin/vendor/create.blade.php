<x-admin.app>
    <x-slot name="title">
        Shadi Asaan - Create Vendor
    </x-slot>
    <x-slot name="breadcrumb">
        <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
            <a href="" class="breadcrumb--active">Dashboard</a>
            <i data-feather="chevron-right" class="breadcrumb__icon"></i>
            <a href="" class="breadcrumb--active">Vendor</a>
            <i data-feather="chevron-right" class="breadcrumb__icon"></i>
            <a href="javascript:void(0)">Create</a>
        </div>
    </x-slot>
    <div class="content">
        <div class="intro-y flex items-center mt-8">
            <h2 class="text-lg font-medium mr-auto">
                Create Vendor
            </h2>
        </div>
        <div class="grid grid-cols-12 gap-6 mt-5">
            <div class="intro-y col-span-12 lg:col-span-12">
                <div class="intro-y box">
                    <div class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5">
                        <h2 class="font-medium text-base mr-auto">
                            Vendor
                        </h2>
                    </div>
                    <form action="{{route('admin.vendor.store')}}" method="post" class="p-5" id="form-validation"
                          enctype="multipart/form-data">
                        @csrf
                        <div class="preview">
                            <div class="flex flex-wrap -mx-3 mb-2 sm:grid grid-cols-2 gap-2">
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Full Name
                                    </label>
                                    <input type="text" name="name" id="name"
                                           class="cols-3 input w-full border mt-2" placeholder="Enter Full Name"
                                           minlength="2" value="{{old('name')}}">
                                </div>
                                <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Email
                                    </label>
                                    <input type="email" name="email" id="email"
                                           class="cols-3 input w-full border mt-2"
                                           placeholder="Please Enter Your Email" value="{{old('email')}}">
                                </div>
                                <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Date Of Birth
                                    </label>
                                    <input type="date" name="date_of_birth" id="date_of_birth"
                                           class="cols-3 input w-full border mt-2"
                                           placeholder="Please Enter Your Date Of Birth"
                                           value="{{old('date_of_birth')}}" max="2999-12-31">
                                </div>
                                {{--                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">--}}
                                {{--                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">--}}
                                {{--                                        Password--}}
                                {{--                                    </label>--}}
                                {{--                                    <input type="password" name="password" id="password"--}}
                                {{--                                           class="cols-3 input w-full border mt-2" placeholder="Enter Password"--}}
                                {{--                                           value="{{old('password')}}">--}}
                                {{--                                </div>--}}
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        CNIC No
                                    </label>
                                    <input type="tel" name="cnic_no" id="cnic_no"
                                           class="cols-3 input w-full border mt-2"
                                           data-inputmask=" 'mask' : '#####-#######-#'" value="{{old('cnic_no')}}"/>
                                    {{--                                    <input id="cc" type="tel" name="ccnum" placeholder ="XXXX XXXX XXXX XXXX" pattern="\d{4} \d{4} \d{4} \d{4}" class="masked" title="Enter the 16 digits of credit card">--}}
                                    {{--                                    <input type="tel" name="cnic_no"--}}
                                    {{--                                           id="cnic_no"--}}
                                    {{--                                           data-inputimask="'mask': '#####-#######-#'"--}}
                                    {{--                                           class="cols-3 input w-full border mt-2"--}}
                                    {{--                                           placeholder="Enter CNIC No #" min="13" value="{{old('cnic_no')}}">--}}
                                </div>


                                {{--<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Status
                                    </label>
                                    <select class="form-select mt-2 sm:mr-2"
                                            aria-label=".form-select-sm example">
                                        <option value="">Select Status</option>
                                        <option value="approve">Approve</option>
                                        <option value="pending">Pending</option>
                                        <option value="reject">Reject</option>
                                    </select>
                                </div>--}}
                                <div class="w-full md:w-1/3 px-3 mb-6  md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Mobile No
                                    </label>
                                    <input type="tel" name="phone" id="phone"
                                           data-inputimask="'mask': '+923172134445'"
                                           class="cols-3 input w-full border mt-2"
                                           placeholder="Enter Mobile #" value="{{old('phone') ?? '+92'}}">
                                </div>
                                <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        CNiC Front
                                    </label>
                                    <input type="file" name="cnic_front" id="cnic_front"
                                           class="cols-3 input w-full border mt-2" value="{{old('cnic_front')}}"
                                           accept="image/*">
                                </div>
                                <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        CNiC Back
                                    </label>
                                    <input type="file" name="cnic_back" id="cnic_back" value="{{old('cnic_back')}}"
                                           class="cols-3 input w-full border mt-2">
                                </div>
                                {{--                                <div class="w-full md:w-1/3 px-3 mb-6 mt-4 md:mb-0">--}}
                                {{--                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">--}}
                                {{--                                        Phone No--}}
                                {{--                                    </label>--}}
                                {{--                                    <input type="number" name="phone" id="phone"--}}
                                {{--                                           class="cols-3 input w-full border mt-2" maxlength="11"--}}
                                {{--                                           placeholder="Enter Phone #" minlength="2" value="{{old('phone')}}">--}}
                                {{--                                </div>--}}
                            </div>

                            <button type="submit" class=" button btn btn-primary text-white mt-5">
                                Submit
                            </button>
                            <a class="btn btn-danger w-24 inline-block mr-1 mb-2"
                               href="{{route('admin.vendor.index')}}">
                                Cancel
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <x-slot name="scripts">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script type='text/javascript'
                src="https://rawgit.com/RobinHerbots/jquery.inputmask/3.x/dist/jquery.inputmask.bundle.js"></script>
        <script>


            $(document).ready(function () {
                // $("#cnic_no").inputmask('#####-#######-#');
            });
        </script>
        <script>
            $(document).ready(function () {
                $("#cnic_no").inputmask('#####-#######-#', {
                    radixPoint: "-",
                    groupSeparator: "-",
                    autoGroup: false,
                    digits: 13,
                    digitsOptional: false,
                    placeholder: '#####-#######-#',
                    rightAlign: false,
                    onBeforeMask: function (value, opts) {
                        console.log(value);
                        return value;
                    }
                });
                $("#phone").inputmask('+92##########', {
                    radixPoint: "-",
                    groupSeparator: "-",
                    autoGroup: false,
                    digits: 13,
                    digitsOptional: false,
                    placeholder: '+92##########',
                    rightAlign: false,
                    onBeforeMask: function (value, opts) {
                        console.log(value);
                        return value;
                    }
                });
            });

        </script>
    </x-slot>
</x-admin.app>
