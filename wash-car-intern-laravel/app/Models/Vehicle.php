<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model{
    use HasFactory;

    protected $fillable=[
        "vehicle_type",
        "id"
    ];

    public function services(){

        return $this->hasMany(Service::class,'vehicle_id');
    }

}
