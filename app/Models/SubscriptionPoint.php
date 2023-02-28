<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubscriptionPoint extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'subscription_point';
    protected $fillable = ['subscription_id', 'name'];
}
