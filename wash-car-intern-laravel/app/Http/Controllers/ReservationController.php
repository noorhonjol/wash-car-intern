<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReservationController extends Controller
{
    public function index(){
        return Reservation::all();
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
}
