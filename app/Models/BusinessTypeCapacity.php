<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BusinessTypeCapacity extends Model
{
    use HasFactory;

    protected $fillable = ['business_type_id', 'label'];
}
