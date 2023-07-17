<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    public function customer()
    {
        return $this->belongsTo(User::class,"customer_id");
    }
    public function worker()
    {
        return $this->belongsTo(User::class,"worker_id");
    }

    public function service()
    {
        return $this->belongsTo(Service::class);
    }
    
    

}
