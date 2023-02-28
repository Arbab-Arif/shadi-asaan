<?php

namespace App\Models;

use App\Traits\FileHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BusinessType extends Model
{
    use HasFactory, FileHelper;

    protected $fillable = ['name', 'icon', 'status'];

    protected $appends = ['iconLink'];

    public function capacities()
    {
        return $this->hasMany(BusinessTypeCapacity::class);
    }

    public function getIconLinkAttribute()
    {
        return $this->getImagePath('icon');
    }
}
