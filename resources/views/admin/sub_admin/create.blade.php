<x-admin.app>
    <x-slot name="title">
        Shadi Asaan - Create Sub Admin
    </x-slot>
    <x-slot name="breadcrumb">
        <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
            <a href="" class="breadcrumb--active">Dashboard</a>
            <i data-feather="chevron-right" class="breadcrumb__icon"></i>
            <a href="" class="breadcrumb--active">Sub Admin</a>
            <i data-feather="chevron-right" class="breadcrumb__icon"></i>
            <a href="javascript:void(0)">Create</a>
        </div>
    </x-slot>
    <div class="content">
        <div class="intro-y flex items-center mt-8">
            <h2 class="text-lg font-medium mr-auto">
                Create Sub Admin
            </h2>
        </div>
        <div class="grid grid-cols-12 gap-6 mt-5">
            <div class="intro-y col-span-12 lg:col-span-12">
                <div class="intro-y box">
                    <div class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5">
                        <h2 class="font-medium text-base mr-auto">
                            Sub Admin
                        </h2>
                    </div>
                    <form action="{{route('admin.sub_admin.store')}}" method="post" class="p-5" id="form-validation"
                          enctype="multipart/form-data">
                        @csrf

                        <div class="preview">
                            <div class="flex flex-wrap -mx-3 mb-2 sm:grid grid-cols-2 gap-2">
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Role
                                    </label>
                                    <select class="form-select mt-2 sm:mr-2"
                                            aria-label=".form-select-sm example" name="role_id">
                                        <option value="">Select Role</option>
                                        @foreach($roles as $role)
                                            <option value="{{$role->id}}">{{$role->label}}</option>
                                        @endforeach
                                    </select>
                                </div>
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
                                           placeholder="Please Enter Your Email" value="{{old('email')}}" minlength="2">
                                </div>

                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Password
                                    </label>
                                    <input type="password" name="password" id="password"
                                           class="cols-3 input w-full border mt-2" placeholder="Enter Password"
                                           minlength="2" value="{{old('password')}}">
                                </div>
                            </div>

                            <button type="submit" class=" button btn btn-primary text-white mt-5">
                                Submit
                            </button>
                            <a class="btn btn-danger w-24 inline-block mr-1 mb-2"
                               href="{{route('admin.sub_admin.index')}}">
                                Cancel
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <x-slot name="scripts">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/jquery.inputmask.bundle.js"></script>
        <script>
            $(":input").inputmask();
        </script>
    </x-slot>
</x-admin.app>
