<?php

namespace App\Abstracts;

use App\Http\Controllers\Controller;
use App\Traits\FileHelper;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

abstract class ApiMediaHelper extends Controller
{
    use FileHelper;

    public abstract function model(): array;

    public abstract function rules(): array;

    public function update($id, Request $request)
    {
        try {
            $validator = Validator::make($request->all(), $this->rules());
            if ($validator->fails()) {
                return makeJsonResponse('Error', [], 422, collect($validator->errors())->values()->map(fn($error) => $error));
            }
            [$relation, $model, $key] = $this->model();
            $media = auth()->user()->venues()->findOrFail($id)->$relation()->create([
                $key => $this->saveFileAndGetName($request->file($key), $model)
            ]);
            return makeJsonResponse('Created Successful', $media, 201);
        } catch (ModelNotFoundException $e) {
            return makeJsonResponse('Some Thing Went Wrong', [], 404);
        }
    }

    public function destroy($id, $mediaId)
    {
        try {
            [$relation, $model, $key] = $this->model();
            $media = auth()->user()->venues()->findOrFail($id)->$relation()->findOrFail($mediaId);
            $this->deleteFile($media->$key);
            $media->delete();
            return makeJsonResponse('Delete Successful', [], 204);
        } catch (ModelNotFoundException $e) {
            return makeJsonResponse('Some Thing Went Wrong', [], 404);
        }
    }

}
