<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;

class VenueExport implements FromCollection
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public $data = [];

    public function __construct($data)
    {

        $this->data = $data;

    }

    public function collection()
    {
        $date = $this->data->prepend([
            'S.No',
            'Name',
            'Vendor',
            'Business Type',
            'Manger Phone',
            'Per Head',
            'Person Capacity',
            'Address',
            'Description',
            'Status',
            'registration Date'

        ]);

        return $this->data;
    }
}
