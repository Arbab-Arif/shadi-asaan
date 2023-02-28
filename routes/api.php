<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('/vendor/send_otp', [\App\Http\Controllers\Api\Vendor\Auth\LoginController::class, 'checkLogin']);
Route::post('/vendor/login', [\App\Http\Controllers\Api\Vendor\Auth\LoginController::class, 'login']);
Route::post('/vendor/register', [\App\Http\Controllers\Api\Vendor\Auth\RegisterController::class, 'store']);
Route::post('/customer/send_otp', [\App\Http\Controllers\Api\Customer\Auth\LoginController::class, 'checkLogin']);
Route::post('/customer/login', [\App\Http\Controllers\Api\Customer\Auth\LoginController::class, 'login']);
Route::post('/customer/register', [\App\Http\Controllers\Api\Customer\Auth\RegisterController::class, 'register']);
