<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Http\Request;

class VehicleController extends Controller
{
    public function index(Request $request){
        return response()->json(Vehicle::all());
    }
    
    public function add(Request $request){

        $request->validate([
            'vehicle_type'=>['required','alpha:ascii','unique:'.Vehicle::class]
        ]);
        
        $newVehicle = Vehicle::create([
            'vehicle_type' => $request->vehicle_type
        ]);

        return response()->json(['message' => 'Vehicle created successfully', 'data' => $newVehicle], 201);
        
    }
        
    public function delete($id){

        $serchedVehicle=Vehicle::find($id);

        if(!$serchedVehicle){
            
            return response()->json(['massage'=>'the service not exist'],404);
        }
        
        $serchedVehicle->delete();
        return response()->json(["message"=>"done delete element","data"=>$serchedVehicle],204);
        
    }
    
}
