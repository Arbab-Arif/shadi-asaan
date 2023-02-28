<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Traits\FileHelper;
use App\Models\Chat;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    use FileHelper;

    public function store(Request $request)
    {
        try {
            $path = $this->saveFileAndGetName($request->file('attachment'));
            return makeJsonResponse('Chat Created Successful', ['path' => $path]);
        } catch (ModelNotFoundException $exception) {
            return makeJsonResponse('Some Thing Went Wrong', [], 404);
        }
    }
}
