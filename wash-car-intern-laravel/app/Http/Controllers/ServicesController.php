<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\Return_;

class ServicesController extends Controller
{
    public function index(){
        return Service::all();
    }
    public function servicesByVehicleId($id){

        $vehicle=Vehicle::find($id);

        if(!$vehicle){
            
            return response()->json(['massage'=>'the vehicle not exist'],404);
        }
        return response()->json($vehicle->services);
        
    
    }
    public function getServiceById($id){
        return Service::find($id);
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

    public function delete($id){
        $serchedService=Service::find($id);

        if(!$serchedService){
            
            return response()->json(['massage'=>'the service not exist'],404);
        }
        
        $serchedService->delete();
        return response()->json(["message"=>"done delete element","data"=>$serchedService],204);
        
    }
    public function edit($id,Request $request){
        $serchedService=Service::find($id);

        if(!$serchedService){
            
            return response()->json(['massage'=>'the service not exist'],404);
        }
        $serchedService->update($request->input());
        return $serchedService;
    }

}
