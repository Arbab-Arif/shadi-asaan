<?php

namespace App\Http\Controllers\Api\Vendor\Auth;

use App\Abstracts\ApiLoginHelper;
use App\Models\Vendor;

class LoginController extends ApiLoginHelper
{

    public function model()
    {
        return new Vendor();
    }

}
