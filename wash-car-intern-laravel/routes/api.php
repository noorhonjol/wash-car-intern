<?php

use App\Http\Controllers\AuthController;
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
Route::get('/vehicles',[VehicleController::class,'index']);
Route::get('/vehicle/{id}/services',[VehicleController::class,'servicesByVehicleId'])->whereNumber("id");
Route::post('/vehicle/add',[VehicleController::class,'add'])->whereNumber("id");
// Route::get('/',function(){


//     return Reservation::with('customer', 'service')->get('status');
// });