<?php

namespace App\Http\Livewire;

use App\Exports\BusinessTypeExport;
use App\Models\BusinessType;
use App\Models\Vendor;
use Livewire\Component;
use Livewire\WithPagination;
use Maatwebsite\Excel\Facades\Excel;

class BusinessTypeList extends Component
{
    use WithPagination;

    public $perPage = 10;
    public $sortField = 'id';
    public $sortAsc = true;
    public $search = '';

    protected $listeners = [
        'businessTypeDelete' => 'deleteBusinessType',
    ];

    public function deleteBusinessType($id)
    {
        BusinessType::find($id)->delete();
    }

    public function businessTypeExport()
    {
        $data = BusinessType::select('id', 'name')->get();
        return Excel::download(new BusinessTypeExport($data), 'business.type.xlsx');
    }

    protected function filter()
    {
        $businessType = BusinessType::query();

        if ($this->search) {
            $businessType = $businessType
                ->where('name', 'like', "%{$this->search}%");
        }
        return $businessType
            ->orderBy($this->sortField, 'desc')
            ->paginate($this->perPage);
    }

    public function render()
    {
        return view('livewire.business-type-list')->with([
            'businessTypes' => $this->filter(),
        ]);
    }
}
