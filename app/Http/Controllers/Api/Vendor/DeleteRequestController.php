<?php

namespace App\Http\Controllers\Api\Vendor;

use App\Abstracts\ApiDeleteAccountHelper;
use App\Models\Vendor;

class DeleteRequestController extends ApiDeleteAccountHelper
{
    public function model()
    {
        return Vendor::class;
    }
}
