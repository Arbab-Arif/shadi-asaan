<?php

use App\Http\Controllers\Admin;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin', 'as' => 'admin.', 'middleware' => 'admin'], function () {
    Route::get('/dashboard', [Admin\DashboardController::class, 'index'])->name('dashboard');
    Route::resource('vendor', Admin\VendorController::class);
    Route::resource('business_type', Admin\BusinessTypeController::class)->except('show');
    Route::resource('area', Admin\AreaController::class)->except('show');
    Route::resource('subscription', Admin\SubscriptionController::class)->except('show');
    Route::resource('sub_admin', Admin\SubAdminController::class)->except('show');
    Route::resource('slider', Admin\SliderController::class)->except('show');
    Route::get('slider/venue/search', [Admin\SliderController::class, 'venues'])->name('slider.venue.search');

//    Route::controller(Admin\VenueController::class)->group(function () {
//        Route::get('venue', 'index')->name('venue.index');
//        Route::get('venue', 'create')->name('venue.create');
//        Route::get('/venue', 'store')->name('venue.store');
//    });
    Route::resource('venue', Admin\VenueController::class)->except('destroy');
    Route::put('venue_status/{venue}', [Admin\VenueController::class, 'updateStatus'])->name('venue.status.update');
    Route::controller(Admin\VenueGalleryController::class)->group(function () {
        Route::get('venue/{venue}/gallery', 'show')->name('venue.gallery');
        Route::post('venue/gallery/add', 'create')->name('venue.gallery.create');
        Route::delete('venue/gallery/delete/{venueGallery}', 'destroy')->name('venue.gallery.delete');
    });
    Route::controller(Admin\VenueVideoController::class)->group(function () {
        Route::get('venue/{venue}/video', 'show')->name('venue.video');
        Route::post('venue/video/add', 'create')->name('venue.video.create');
        Route::delete('venue/video/delete/{venueVideo}', 'destroy')->name('venue.video.delete');
    });
    Route::controller(Admin\RoleController::class)->group(function () {
        Route::get('role', 'index')->name('role.index');
        Route::get('role/create', 'create')->name('role.create');
        Route::post('/role', 'store')->name('role.store');
    });
    Route::get('customer', [Admin\CustomerController::class, 'index'])->name('customer.index');
    Route::get('customer_feed_back', [Admin\CustomerFeedbackController::class, 'index'])->name('customer-feedback.index');
    Route::get('inquire', [Admin\InquireController::class, 'index'])->name('inquire.index');
    Route::get('/business_type_capacity', [Admin\VenueController::class, 'BusinessTypeCapacity'])->name('business.type.capacity');
});
