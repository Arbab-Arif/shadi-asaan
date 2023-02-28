<x-admin.app>
    <x-slot name="title">
        Shadi Asaan - Customer Listing
    </x-slot>
    <x-slot name="styles">
        <livewire:styles/>
    </x-slot>
    <x-slot name="breadcrumb">
        <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
            <a href="{{ route('admin.dashboard') }}" class="breadcrumb--active">Dashboard</a>
            <i data-feather="chevron-right" class="breadcrumb__icon"></i>
            <a href="javascript:void(0)">Customer</a>
        </div>
    </x-slot>
    <livewire:customer-list/>

    <x-slot name="scripts">
        <livewire:scripts/>
    </x-slot>
</x-admin.app>
