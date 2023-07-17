<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Http\Request;

class VehicleController extends Controller
{
    public function index(){

        return response()->json([Vehicle::all()]);

    }
    public function servicesByVehicleId($id){

        $vehicle=Vehicle::find($id);

        if($vehicle){
            return response()->json($vehicle->services);

        }
        
        return response(['massage'=>'the vehicle not exist'],404);
    
    }
}
