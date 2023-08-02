<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;
    protected $fillable=[
        'longitude',
        'latitude',
        'status',
        'customer_id',
        "service_id",
        "worker_id"
    ];
    public function customer()
    {
        return $this->belongsTo(User::class,"customer_id");
    }
    public function worker()
    {
        return $this->belongsTo(User::class,"worker_id");
    }

    public function vehicle(){
        return $this->hasOneThrough(Vehicle::class,Service::class,"id","id",'service_id','vehicle_id');

    }
    public function service()
    {
        return $this->belongsTo(Service::class,"service_id");
    }
    
    

}
