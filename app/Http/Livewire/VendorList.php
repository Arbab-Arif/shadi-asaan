<?php

namespace App\Http\Livewire;

use App\Exports\VendorExport;
use App\Models\Vendor;
use Livewire\Component;
use Livewire\WithPagination;
use Maatwebsite\Excel\Facades\Excel;

class VendorList extends Component
{
    use WithPagination;

    public $perPage = 10;
    public $sortField = 'id';
    public $sortAsc = true;
    public $search = '';

    protected $listeners = [
        'vendorDelete' => 'deleteVendor',
    ];

    public function vendorExport()
    {
        $data = Vendor::select('id', 'name', 'email', 'phone', 'cnic_no', 'created_at')->get();
        return Excel::download(new VendorExport($data), 'vendor.xlsx');
    }

    public function deleteVendor($id)
    {
        Vendor::find($id)->delete();
    }

    protected function filter()
    {
        $vendor = Vendor::query();

        if ($this->search) {
            $vendor = $vendor
                ->where('name', 'like', "%{$this->search}%")
                ->orWhere('email', 'like', "%{$this->search}%")
                ->orWhere('phone', 'like', "%{$this->search}%")
//                ->orWhere('mobile', 'like', "%{$this->search}%")
                ->orWhere('cnic_no', 'like', "%{$this->search}%");
        }
        return $vendor
            ->orderBy($this->sortField, 'desc')
            ->paginate($this->perPage);
    }

    public function render()
    {
        return view('livewire.vendor-list')->with([
            'vendors' => $this->filter(),
        ]);
    }
}
