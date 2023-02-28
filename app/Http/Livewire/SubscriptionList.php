<?php

namespace App\Http\Livewire;

use App\Models\Subscription;
use Livewire\Component;
use Livewire\WithPagination;

class SubscriptionList extends Component
{
    use WithPagination;

    public $perPage = 10;
    public $sortField = 'id';
    public $sortAsc = true;
    public $search = '';

    protected $listeners = [
        'subscriptionDelete' => 'deleteSubscription',
    ];

    public function deleteSubscription($id)
    {
        Subscription::find($id)->delete();
    }

    protected function filter()
    {
        $subscription = Subscription::query();

        if ($this->search) {
            $subscription = $subscription
                ->where('name', 'like', "%{$this->search}%")
                ->orWhere('price', 'like', "%{$this->search}%");
        }
        return $subscription
            ->orderBy($this->sortField, 'desc')
            ->paginate($this->perPage);
    }

    public function render()
    {
        return view('livewire.subscription-list')->with([
            'subscriptions' => $this->filter()
        ]);
    }
}
