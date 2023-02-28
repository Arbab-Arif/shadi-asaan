<?php

namespace App\Http\Controllers\Api\Customer\Auth;

use App\Abstracts\ApiLoginHelper;
use App\Models\User;

class LoginController extends ApiLoginHelper
{

    public function model()
    {
        return new User();
    }

}
