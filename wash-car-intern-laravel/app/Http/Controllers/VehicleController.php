<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Http\Request;

class VehicleController extends Controller
{
    public function index(){

        return response()->json([Vehicle::all()]);

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
