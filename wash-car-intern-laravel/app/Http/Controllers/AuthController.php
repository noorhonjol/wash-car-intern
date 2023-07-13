<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\hash;

class AuthController extends Controller
{
    //
    public function register(Request $request){
        
        $request->validate([
            'firstname'=>'required|max:255|alpha',

            'lastname'=>'required|max:255|alpha',
            
            'phonenumber'=>'required|max:255',
            
            'password'=>'required'
        ]);

        $newUser=Customer::create([
            'first_name'=>$request->firstname,
            'last_name'=>$request->lastname,
            'phone_number'=>$request->phonenumber,

            'password'=> hash::make($request->password),


        ]);
    


        return response()->json($newUser);
    }
}
