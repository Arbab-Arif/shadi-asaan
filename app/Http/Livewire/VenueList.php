<?php

namespace App\Http\Livewire;

use App\Exports\VenueExport;
use App\Http\Resources\VenueCollection;
use App\Models\Venue;
use Livewire\Component;
use Livewire\WithPagination;
use Maatwebsite\Excel\Facades\Excel;

class VenueList extends Component
{
    use WithPagination;

    public $perPage = 10;
    public $sortField = 'id';
    public $sortAsc = true;
    public $search = '';

    protected $listeners = [
        'venueDelete' => 'deleteVenue',
    ];

    public function deleteVenue($id)
    {
        Venue::find($id)->delete();
    }

    public function venueExport()
    {
        $data = Venue::with('vendor', 'businessType')->get();
        return Excel::download(new VenueExport(VenueCollection::collection($data)), 'venue.xlsx');
    }

    protected function filter()
    {
        $venues = Venue::with('vendor', 'area', 'businessType');

        if ($this->search) {
            $venues = $venues
                ->where('name', 'like', "%{$this->search}%")
                ->orWhereHas('vendor', function ($query) {
                    $query->where('name', 'like', "%{$this->search}%");
                });

        }
        return $venues
            ->orderBy($this->sortField, 'desc')
            ->paginate($this->perPage);
    }

    public function render()
    {
        return view('livewire.venue-list')->with([
            'venues' => $this->filter(),
        ]);
    }
}
