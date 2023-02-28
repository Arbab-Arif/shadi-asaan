<x-admin.app>
    <x-slot name="title">
        Create Role & Permission
    </x-slot>
    <x-slot name="breadcrumb">
        <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
            <a href="" class="breadcrumb--active">Dashboard</a>
            <i data-feather="chevron-right" class="breadcrumb__icon"></i>
            <a href="" class="breadcrumb--active">Role & Permission</a>
            <i data-feather="chevron-right" class="breadcrumb__icon"></i>
            <a href="javascript:void(0)">Create</a>
        </div>
    </x-slot>
    <div class="content">
        <div class="grid grid-cols-12 gap-6 mt-5">
            <div class="intro-y col-span-12 lg:col-span-12">
                <form class="intro-y box" action="{{route('admin.role.store')}}" method="post">
                    @csrf
                    <div
                        class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5">
                        <h2 class="font-medium text-base mr-auto">
                            Role
                        </h2>
                    </div>
                    <div class="p-5">
                        <div class="preview">
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Name
                                    </label>
                                    <input type="text" name="label"
                                           class="cols-3 input w-full border mt-2"
                                           placeholder="Enter Role Name" value="{{old('label')}}">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex flex-col sm:flex-row items-center pl-5 border-b border-gray-200 dark:border-dark-5">
                        <h2 class="font-medium text-base mr-auto mb-5">
                            Permissions
                        </h2>
                    </div>
                    <div class="p-5 flex flex-wrap" id="form-validation">
                        @foreach($permissions as $permission)
                            <div class="preview w-full md:w-1/3">
                                <input class="input flex-wrap flex-none border border-gray-500 mt-1"
                                       name="permissions[]"
                                       type="checkbox" value="{{$permission->id}}">
                                <span class="">{{$permission->label }}</span>
                            </div>
                        @endforeach
                    </div>
                    <div class="p-5">
                        <button type="submit" class="button btn btn-primary text-white mt-5">
                            Submit
                        </button>
                        <a class="btn btn-danger w-24 inline-block mr-1 mb-2" href="{{route('admin.role.index')}}">
                            Cancel
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-admin.app>
