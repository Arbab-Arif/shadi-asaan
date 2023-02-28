<x-admin.app>
    <x-slot name="title">
        Shadi Asaan - Role Listing
    </x-slot>
    <x-slot name="styles">
        <livewire:styles/>
    </x-slot>
    <x-slot name="breadcrumb">
        <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
            <a href="{{ route('admin.dashboard') }}" class="breadcrumb--active">Dashboard</a>
            <i data-feather="chevron-right" class="breadcrumb__icon"></i>
            <a href="javascript:void(0)">Role</a>
        </div>
    </x-slot>
    <livewire:role-permission-list/>

    <x-slot name="scripts">
        <livewire:scripts/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <script>
            function deleteRole(id) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't to delete this Role",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#08503d',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Livewire.emit('roleDeleted', id);
                        Swal.fire(
                            'Deleted!',
                            'Poof! Your role has been deleted.',
                            'success'
                        )
                    }
                })
            }
        </script>
    </x-slot>
</x-admin.app>
