<x-admin.app>
    <x-slot name="title">
        Shadi Asaan - Customer Listing
    </x-slot>
    <x-slot name="styles">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <livewire:styles/>
    </x-slot>
    <x-slot name="breadcrumb">
        <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
            <a href="{{ route('admin.dashboard') }}" class="breadcrumb--active">Dashboard</a>
            <i data-feather="chevron-right" class="breadcrumb__icon"></i>
            <a href="javascript:void(0)">Customer FeedBack</a>
        </div>
    </x-slot>
    <livewire:customer-feed-back-list/>

    <x-slot name="scripts">
        <livewire:scripts/>
    </x-slot>
</x-admin.app>
