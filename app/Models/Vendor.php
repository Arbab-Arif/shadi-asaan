<?php

namespace App\Models;

use App\Traits\FileHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class Vendor extends Authenticatable
{

    use HasApiTokens, HasFactory, Notifiable, FileHelper;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'cnic_front',
        'cnic_back',
        'password',
        'cnic_no',
        'date_of_birth',
        'otp',
        'platform',
        'device_token'
    ];
    protected $casts = [
        'created_at' => 'date:Y-m-d'
    ];


    public function venues()
    {
        return $this->hasMany(Venue::class);
    }

    public function deviceTokens()
    {
        $this->morphMany(DeviceToken::class, 'user');
    }
}
