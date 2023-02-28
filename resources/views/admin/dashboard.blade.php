<x-admin.app>
    <x-slot name="title">Shadi Asaan - Dashboard</x-slot>
    <x-slot name="breadcrumb">
        <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
            <a href="{{ route('admin.dashboard') }}" class="breadcrumb--active">Shadi Asaan</a>
            <i data-feather="chevron-right" class="breadcrumb__icon"></i>
            <a href="javascript:void(0)">Dashboard</a>
        </div>
    </x-slot>
    <div class="grid grid-cols-12 gap-12">
        <div class="col-span-12 xxl:col-span-12 grid grid-cols-12 gap-12">
            <div class="col-span-12 mt-8">
                <div class="intro-y flex items-center h-10 ml-2">
                    <h2 class="text-lg font-medium truncate mr-5">
                    </h2>
                </div>
                <div class="grid grid-cols-12 gap-6 mt-5">
                    <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                        <a href="{{route('admin.customer.index')}}">
                            <div class="report-box zoom-in">
                                <div class="box p-5 h-40">
                                    <div class="flex">
                                        <div class="text-base text-black mt-1 ">
                                            No Of Customers
                                        </div>
                                        <div class="ml-auto">
                                        </div>
                                    </div>
                                    <i data-feather="shopping-cart"
                                       class="report-box__icon text-theme-10 pd-2 float-right mt-6"></i>
                                    <div
                                        class="text-3xl font-bold leading-8 mt-6 my-2">{{$customers}}
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                        <a href="{{route('admin.vendor.index')}}">
                            <div class="report-box zoom-in">
                                <div class="box p-5 h-40">
                                    <div class="flex">
                                        <div class="text-base text-black mt-1 ">
                                            No Of Vendors
                                        </div>
                                        <div class="ml-auto">
                                        </div>
                                    </div>
                                    <i data-feather="shopping-cart"
                                       class="report-box__icon text-theme-10 pd-2 float-right mt-6"></i>
                                    <div
                                        class="text-3xl font-bold leading-8 mt-6 my-2">{{$vendors}}
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                        <a href="{{route('admin.venue.index')}}">
                            <div class="report-box zoom-in">
                                <div class="box p-5 h-40">
                                    <div class="flex">
                                        <div class="text-base text-black mt-1 ">
                                            No Of Venue
                                        </div>
                                        <div class="ml-auto">
                                        </div>
                                    </div>
                                    <i data-feather="shopping-cart"
                                       class="report-box__icon text-theme-10 pd-2 float-right mt-6"></i>
                                    <div
                                        class="text-3xl font-bold leading-8 mt-6 my-2">{{$venus}}
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                        <a href="{{route('admin.inquire.index')}}">
                            <div class="report-box zoom-in">
                                <div class="box p-5 h-40">
                                    <div class="flex">
                                        <div class="text-base text-black mt-1 ">
                                            No Of Queries
                                        </div>
                                        <div class="ml-auto">
                                        </div>
                                    </div>
                                    <i data-feather="shopping-cart"
                                       class="report-box__icon text-theme-10 pd-2 float-right mt-6"></i>
                                    <div
                                        class="text-3xl font-bold leading-8 mt-6 my-2">2
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                        <a href="#">
                            <div class="report-box zoom-in">
                                <div class="box p-5 h-40">
                                    <div class="flex">
                                        <div class="text-base text-black mt-1 ">
                                            No Of Active Users
                                        </div>
                                        <div class="ml-auto">
                                        </div>
                                    </div>
                                    <i data-feather="shopping-cart"
                                       class="report-box__icon text-theme-10 pd-2 float-right mt-6"></i>
                                    <div
                                        class="text-3xl font-bold leading-8 mt-6 my-2">2
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                        <a href="#">
                            <div class="report-box zoom-in">
                                <div class="box p-5 h-40">
                                    <div class="flex">
                                        <div class="text-base text-black mt-1 ">
                                            Monthly Collection
                                        </div>
                                        <div class="ml-auto">
                                        </div>
                                    </div>
                                    <i data-feather="shopping-cart"
                                       class="report-box__icon text-theme-10 pd-2 float-right mt-6"></i>
                                    <div
                                        class="text-3xl font-bold leading-8 mt-6 my-2">2
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                        <a href="#">
                            <div class="report-box zoom-in">
                                <div class="box p-5 h-40">
                                    <div class="flex">
                                        <div class="text-base text-black mt-1 ">
                                            Yearly Collection
                                        </div>
                                        <div class="ml-auto">
                                        </div>
                                    </div>
                                    <i data-feather="shopping-cart"
                                       class="report-box__icon text-theme-10 pd-2 float-right mt-6"></i>
                                    <div
                                        class="text-3xl font-bold leading-8 mt-6 my-2">2
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {{--<x-slot name="scripts">
    </x-slot>--}}
</x-admin.app>
