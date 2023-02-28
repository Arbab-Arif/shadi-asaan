<?php

namespace App\Models;

use App\Traits\FileHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasFactory, FileHelper;

    protected $fillable = ['user_id', 'venue_id', 'user_type', 'message', 'attachment', 'send_type', 'room'];

    public function user()
    {
        return $this->morphTo('user');
    }
}
