<?php

use App\Http\Controllers\Api\ChatController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Customer;

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

Route::post('filter', [Customer\FilterController::class, 'filter']);
Route::get('/home_page', [Customer\HomePageController::class, 'index']);
Route::get('/venue_detail/{id}', [Customer\VenueController::class, 'show']);
Route::post('/inquire', [Customer\InquireController::class, 'store']);
Route::get('/business_type', [Customer\BusinessTypeController::class, 'index']);
Route::post('/chat', [ChatController::class, 'store']);

Route::post('logout', [Customer\Auth\LoginController::class, 'logout']);

//Route::post('/rating', [Customer\RatingController::class, 'store']);
Route::controller(Customer\ProfileController::class)->group(function () {
    Route::get('/profile', 'show');
    Route::put('profile', 'update');
});

Route::controller(Customer\DeleteRequestController::class)
    ->prefix('delete')
    ->group(function () {
        Route::post('request', 'request');
        Route::post('cancel', 'cancel');
    });
