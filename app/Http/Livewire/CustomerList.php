<?php

namespace App\Http\Livewire;

use App\Exports\CustomerExport;
use App\Models\User;
use Livewire\Component;
use Livewire\WithPagination;
use Maatwebsite\Excel\Facades\Excel;

class CustomerList extends Component
{
    use WithPagination;

    public $perPage = 10;
    public $sortField = 'id';
    public $sortAsc = true;
    public $search = '';


    public function customerExport()
    {
        $data = User::select('id', 'name', 'email', 'phone', 'created_at')->get();
        return Excel::download(new CustomerExport($data), 'customer.xlsx');
    }

    protected function filter()
    {
        $customer = User::query();

        if ($this->search) {
            $customer = $customer
                ->where('name', 'like', "%{$this->search}%")
                ->orWhere('email', 'like', "%{$this->search}%")
                ->orWhere('phone', 'like', "%{$this->search}%");
        }
        return $customer
            ->orderBy($this->sortField, 'desc')
            ->paginate($this->perPage);
    }

    public function render()
    {
        return view('livewire.customer-list')->with([
            'customers' => $this->filter(),
        ]);
    }
}
