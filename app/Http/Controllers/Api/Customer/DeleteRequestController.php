<?php

namespace App\Http\Controllers\Api\Customer;

use App\Abstracts\ApiDeleteAccountHelper;
use App\Models\User;

class DeleteRequestController extends ApiDeleteAccountHelper
{
    public function model()
    {
        return User::class;
    }
}
