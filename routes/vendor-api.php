<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Vendor;
use App\Http\Controllers\Api\ChatController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('logout', [Vendor\Auth\LoginController::class, 'logout']);
Route::post('/autocomplete', [Vendor\GoogleMapController::class, 'autocomplete']);
Route::post('/get-place/{placeId}', [Vendor\GoogleMapController::class, 'placeById']);
Route::get('/home', [Vendor\HomeController::class, 'index']);
Route::get('/business_type', [Vendor\BusinessTypeController::class, 'index']);
Route::controller(Vendor\VenueController::class)->group(function () {
    Route::get('/venues', 'index');
    Route::get('/venue/{id}', 'show');
    Route::post('/venue', 'store');
    Route::get('venue/{id}/edit', 'edit');
    Route::put('venue/{id}', 'update');
    Route::get('venue/{id}/media', 'media');
    Route::get('venue/{id}/inquire', 'inquires');
});
Route::controller(Vendor\VenueGalleryController::class)->group(function () {
    Route::post('venue/{id}/gallery', 'update');
    Route::delete('venue/{id}/gallery/{galleryId}', 'destroy');
});
Route::controller(Vendor\VenueVideoController::class)->group(function () {
    Route::post('venue/{id}/video', 'update');
    Route::delete('venue/{id}/video/{videoId}', 'destroy');
});
Route::get('/profile', [Vendor\ProfileController::class, 'index']);
Route::post('/chat', [ChatController::class, 'store']);

Route::controller(Vendor\DeleteRequestController::class)
    ->prefix('delete')
    ->group(function () {
        Route::post('request', 'request');
        Route::post('cancel', 'cancel');
    });
