<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;

class CustomerExport implements FromCollection
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
            'Email',
            'Phone',
            'cnic_no',
            'registration Date'

        ]);

        return $this->data;
    }

}
