<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Admin extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $guard = 'admin';

    protected $fillable = ['name', 'email', 'password', 'hash_key'];

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

    public function hasRole($role)
    {
        if (is_string($role))
            return $this->roles->contains('name', $role);

        return !!$role->intersect($this->roles)->count();
    }

    public function isSuperAdmin()
    {
        return $this->id < 3;
    }
}
