<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\OrderProductCollection;

class VenueCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'   => $this->id,
            'Name' => $this->name,
            'Vendor' => $this->vendor->name ?? 'N/A',
            'Business Type' => $this->businessType->name,
            'Manger Phone' => $this->manager_phone,
            'Per Head' => $this->per_head,
            'Person Capacity' => $this->person_capacity,
            'Address' => $this->address,
            'Description' => $this->description,
            'Status' => $this->status,
            'Registration Date' => $this->created_at,


        ];
    }
}
