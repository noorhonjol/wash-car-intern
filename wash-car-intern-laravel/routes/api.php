<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\VehicleController;
use App\Models\Reservation;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);


Route::middleware(["auth:sanctum"])->group(function(){
    //any authiniticated user can use
    
    
    Route::get('/vehicle/{id}',[VehicleController::class,'getVehicleById'])->whereNumber("id");
    Route::post('reservation',[ReservationController::class,'create']);
    
    Route::get('/vehicles',[VehicleController::class,'index']);
    
    Route::get('/service/{id}',[ServicesController::class,'getServiceById'])->whereNumber("id");
    
    Route::get('/vehicle/{id}/services',[ServicesController::class,'servicesByVehicleId'])->whereNumber("id");

    Route::post('/logout',[AuthController::class,'logout']);
    
    // just for admin
    
    Route::middleware(["can:Admin"])->group(function(){
        Route::get('/services',[ServicesController::class,'index']);
        
        Route::delete('/service/{id}/delete',[ServicesController::class,'delete']); 
        Route::post('/service/add',[ServicesController::class,'add']);
        Route::post('/vehicle/add',[VehicleController::class,'add']);
        Route::post('/vehicle/{id}/delete',[VehicleController::class,'delete']);

    });


    //just for worker
    Route::middleware(["can:Worker"])->group(function(){
        Route::get('/worker/reservations',[ReservationController::class,'index']);
        Route::get('/reservation/{id}',[ReservationController::class,'getReservationById']);
        Route::patch('/reservation/{id}',[ReservationController::class,'updateStatusOfReservation']);
    });
    Route::get('/customer/reservations',[ReservationController::class,'getCustomerReservation']);
    
});

