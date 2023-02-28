<?php

namespace App\Http\Livewire;

use App\Models\Area;
use Livewire\Component;
use Livewire\WithPagination;

class AreaList extends Component
{
    use WithPagination;

    public $perPage = 10;
    public $sortField = 'id';
    public $sortAsc = true;
    public $search = '';

    protected $listeners = [
        'areaDelete' => 'deleteArea',
    ];

    public function deleteArea($id)
    {
        Area::find($id)->delete();
    }

    protected function filter()
    {
        $area = Area::query();

        if ($this->search) {
            $area = $area
                ->where('name', 'like', "%{$this->search}%");
        }
        return $area
            ->orderBy($this->sortField, $this->sortAsc ? 'asc' : 'desc')
            ->paginate($this->perPage);
    }

    public function render()
    {
        return view('livewire.area-list')->with([
            'areas' => $this->filter(),
        ]);
    }
}
