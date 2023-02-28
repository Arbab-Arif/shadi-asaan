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
                <div class="max-w-[50%] truncate mr-1">Name: <strong>{{$vendor->name ?? 'N/A'}}</strong></div>
            </a>
            <a href="javascript:;"
               class="flex items-center p-3 cursor-pointer transition duration-300 ease-in-out bg-white dark:bg-darkmode-600 hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md">
                <div class="max-w-[50%] truncate mr-1">Email: <strong>{{$vendor->email   ?? 'N/A'}}</strong>
                </div>
            </a>
            <a href="javascript:;"
               class="flex items-center p-3 cursor-pointer transition duration-300 ease-in-out bg-white dark:bg-darkmode-600 hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md">
                <div class="max-w-[50%] truncate mr-1">Vendor No: <strong>{{$vendor->phone   ?? 'N/A'}}</strong>
                </div>
            </a>
            <a href="javascript:;"
               class="flex items-center p-3 cursor-pointer transition duration-300 ease-in-out bg-white dark:bg-darkmode-600 hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md">
                <div class="max-w-[50%] truncate mr-1">CNIC No: <strong>{{$vendor->cnic_no   ?? 'N/A'}}</strong>
                </div>
            </a>
            <a href="javascript:;"
               class="flex items-center p-3 cursor-pointer transition duration-300 ease-in-out bg-white dark:bg-darkmode-600 hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md">
                <div class="max-w-[50%] truncate mr-1">Date Of
                    Birth: <strong>{{$vendor->date_of_birth   ?? 'N/A'}}</strong>
                </div>
            </a>

            <a href="javascript:;"
               class="flex items-center p-3 cursor-pointer transition duration-300 ease-in-out bg-white dark:bg-darkmode-600 hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md">
                <div class="max-w-[50%] truncate mr-1">CNIC Front:
                    <img data-action="zoom" class="w-full w-1/4"
                         src="{{$vendor->getImagePath('cnic_front')}}">
                </div>
            </a><a href="javascript:;"
                   class="flex items-center p-3 cursor-pointer transition duration-300 ease-in-out bg-white dark:bg-darkmode-600 hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md">
                <div class="max-w-[50%] truncate mr-1">CNIC Back:
                    <img data-action="zoom" class="w-full w-1/4"
                         src="{{$vendor->getImagePath('cnic_back')}}">
                </div>
            </a>
        </div>
    </div>
    <x-slot name="scripts">

    </x-slot>
</x-admin.app>
