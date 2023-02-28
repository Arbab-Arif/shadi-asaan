<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;

class BusinessTypeExport implements FromCollection
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
        $this->data->prepend([
            'S.No',
            'Name',
        ]);

        return $this->data;
    }
}
