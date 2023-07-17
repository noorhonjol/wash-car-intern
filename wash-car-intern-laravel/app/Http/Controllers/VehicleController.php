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
    public function add(Request $request){

        $request->validate([
            'vehicle_type'=>['required','alpha:ascii','unique:'.Vehicle::class]
        ]);
        
        $newVehicle = Vehicle::create([
            'vehicle_type' => $request->vehicletype
        ]);

        return response()->json(['message' => 'Vehicle created successfully', 'data' => $newVehicle], 201);
    
    }
}
