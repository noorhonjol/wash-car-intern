<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\Vehicle;
use Illuminate\Http\Request;

class ServicesController extends Controller
{
    public function servicesByVehicleId($id){

        $vehicle=Vehicle::find($id);

        if($vehicle){
            return response()->json($vehicle->services);

        }
        
        return response(['massage'=>'the vehicle not exist'],404);
    
    }
    public function index(){
        return Service::all();
    }

}
