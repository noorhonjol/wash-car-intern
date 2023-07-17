<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\Vehicle;
use Illuminate\Http\Request;

class ServicesController extends Controller
{
    public function index(){
        return Service::all();
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
            'service_name'=>['required','alpha:ascii'],
            'description'=>['required'],
            'vehicle_id'=>['required','numeric','exists:vehicles,id'],
            'price'=>['required','numeric']

        ]);
        
        $newService = Service::create([
            'service_name' => $request->service_name,
            'description'=>$request->description,
            'vehicle_id'=>$request->vehicle_id,
            'price'=>$request->price

        ]);

        return response()->json(['message' => 'Service created successfully', 'data' => $newService], 201);
    
    }

}
