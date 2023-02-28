<?php

namespace App\Abstracts;

use App\Http\Controllers\Controller;
use App\Models\DeleteRequest;

abstract class ApiDeleteAccountHelper extends Controller
{
    public abstract function model();

    public function request()
    {
        DeleteRequest::create([
            'user_type' => $this->model(),
            'user_id'   => auth()->id(),
            'delete_at' => today()->addDays(15)
        ]);

        return makeJsonResponse('You request has been submitted your account will be deleted in 15 days if you change your mind Re-Login to cancel the request');
    }

    public function cancel()
    {
        DeleteRequest::where([
            'user_type' => $this->model(),
            'user_id'   => auth()->id()
        ])->delete();
        return makeJsonResponse('Success');
    }
}
