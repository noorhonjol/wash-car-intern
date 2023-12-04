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
            'firstname'=>'required|min:2|max:25|alpha',

            'lastname'=>'required|min:2|max:25|alpha',
            
            'phonenumber'=>['required','regex:/^(059|056|\+97059|\+97056)\d{7}$/'],
            
            'password'=>'required|min:7|max:255'
        ]);

        $newUser=User::create([
            'first_name'=>$request->firstname,
            'last_name'=>$request->lastname,
            'phone_number'=>$request->phonenumber,
            'password'=> Hash::make($request->password),
            'role'=>'customer'
            ]
        );
        

        
        return response()->json([
            "UserToken"=>$newUser->createToken("user token")->plainTextToken,
            "UserInfo"=>$newUser
        
        ]);

    }

    public function login(Request $request){
        
        $request->validate([
            
            'phonenumber'=>['required','regex:/^(059|056|\+97059|\+97056)\d{7}$/'],
            
            'password'=>'required|min:7|max:255'
        ]);

        if(!Auth::attempt(['password'=>$request->password,'phone_number'=>$request->phonenumber])){

            return response()->json(['message'=>'user credenitial not match'],401);
        }
        $loggingIn=User::where(["phone_number"=>$request->phonenumber])->first();

        return response()->json([
            'UserInfo'=>$loggingIn,
            "UserToken"=>$loggingIn->createToken("user token")->plainTextToken
        ]);
    }
    public function logout(Request $request){
        
        
        $request->user()->currentAccessToken()->delete();
        return response()->json(["message"=>"your token deleted success"]);

    }
}
