<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Reservation;
use App\Models\Service;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReservationController extends Controller
{   
    public function index(){
        $reservations = Reservation::with([
            "customer:id,first_name,last_name,phone_number",
            'vehicle:vehicle_type',
            "service:id,service_name,price"
        ])->where("status", "pending")->get();
        return $reservations;
        
    }
    public function create(Request $request){

        $request->validate([
            'lng'=>'required|Decimal:0,20',
            'lat'=>"required|Decimal:0,20",
            'serviceid'=>"required|Numeric",   
        ]);

        $newReservation=Reservation::create([

            'longitude'=>$request->lng,
            'latitude'=>$request->lat,
            'customer_id'=>Auth::id(),
            'service_id'=>$request->serviceid
            ]
        );  
        return response()->json([
            "message"=>"done create new request",
            "data"=>$newReservation
        ]);
    }

    public function getReservationById($id){
        return Reservation::with([
            "customer:id,first_name,last_name,phone_number",
            'vehicle:vehicle_type',
            "service:id,service_name,price"
        ])->find($id);
    }
    public function updateStatusOfReservation($id,Request $request){
        $reservation=Reservation::find($id);
        $reservation->status=$request->newstatus;
        $reservation->worker_id=Auth::user()->id;
        $reservation->save();
        return response()->json(["message"=>"done edit","data"=>$reservation],204);
    }
    public function getCustomerReservation(){
        return Reservation::where('customer_id',Auth::user()->id)->with(
        "vehicle"
        ,"service:id,service_name,price,image_url"
        ,'worker:id,first_name,last_name,phone_number'
        )->get();
    }

}
