<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\hash;


class AuthController extends Controller
{

    public function register(Request $request){
        
        $request->validate([
            'firstname'=>'required|max:255|alpha',

            'lastname'=>'required|max:255|alpha',
            
            'phonenumber'=>'required|max:255',
            
            'password'=>'required'
        ]);

        $newUser=User::create([
            'first_name'=>$request->firstname,
            'last_name'=>$request->lastname,
            'phone_number'=>$request->phonenumber,
            'password'=> hash::make($request->password),
            'role'=>'customer'
            ]
        );
        

        
        return response()->json([
            "UserToken "=>$newUser->createToken("user token")->plainTextToken,
            "UserInfo"=>$newUser
        
        ]);

    }

    public function login(Request $request){
        
        if(!Auth::attempt(['password'=>$request->password,'phone_number'=>$request->phonenumber])){

            return response()->json(['message'=>'user credenitial not match']);
        }
        $loggingIn=User::where(["phone_number"=>$request->phonenumber])->first();

        return response()->json([
            'UserInfo'=>$loggingIn,
            "UserToken"=>$loggingIn->createToken("user token")->plainTextToken
        ]);



    }
}
