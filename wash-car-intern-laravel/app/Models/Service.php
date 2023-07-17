<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;
    protected $fillable=[
        'service_name',
        'price',
        'vehicle_id',
        'description'
    ];
    public function vehicle(){
        $this->belongsTo(Vehicle::class);
    }
    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    } 
}
