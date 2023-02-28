<?php

namespace App\Http\Livewire;

use App\Models\Inquire;
use App\Models\Rating;
use Livewire\Component;
use Livewire\WithPagination;

class InquireList extends Component
{
    use WithPagination;

    public $perPage = 10;
    public $sortField = 'id';
    public $sortAsc = true;
    public $search = '';

    protected function filter()
    {
        $inquire = Inquire::with('user', 'venue');

        if ($this->search) {
            $inquire = $inquire
//                ->where('message', 'like', "%{$this->search}%")
//                ->orWhere('rating', 'like', "%{$this->search}%")
                ->orWhereHas('user', function ($query) {
                    $query->where('name', 'like', "%{$this->search}%");
                })
                ->orWhereHas('venue', function ($query) {
                    $query->where('name', 'like', "%{$this->search}%");
                });
        }
        return $inquire
            ->orderBy($this->sortField, 'desc')
            ->paginate($this->perPage);
    }

    public function render()
    {
        return view('livewire.inquire-list')->with([
            'inquires' => $this->filter(),
        ]);
    }
}
