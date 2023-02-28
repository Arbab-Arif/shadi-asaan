<?php

namespace App\Http\Livewire;

use App\Models\Slider;
use Livewire\Component;
use Livewire\WithPagination;

class SliderList extends Component
{
    use WithPagination;

    public $perPage = 10;
    public $sortField = 'id';
    public $sortAsc = true;
    public $search = '';

    protected $listeners = [
        'sliderDeleted' => 'deleteSlider',
    ];

    public function sortBy($field)
    {
        if ($this->sortField == $field) {
            $this->sortAsc = !$this->sortAsc;
        } else {
            $this->sortAsc = true;
        }

        $this->sortField = $field;
    }

    public function deleteSlider($id)
    {
        Slider::find($id)->delete();
    }

    protected function filter()
    {
        $slider = Slider::query();

        if ($this->search) {
            $slider = $slider
                ->where('sort', 'like', "%{$this->search}%")
                ->orWhereHas('venue', function ($query) {
                    $query->where('name', 'like', "%{$this->search}%");
                });
        }
        return $slider
            ->orderBy($this->sortField, 'desc')
            ->paginate($this->perPage);
    }


    public function render()
    {
        return view('livewire.slider-list')->with(['sliders' => $this->filter()]);

    }
}
