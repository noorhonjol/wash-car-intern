<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vehicle;
use App\Models\Service;
use App\Models\Reservation;

class HomeController extends Controller
{
    public function homeAdmin (Request $request) {
        $servicesWithReservationsCount = Service::select('service_name', 'price')->withcount("reservations")->get();
        $vehiclesWithServicesCount = Vehicle::select('vehicle_type')->withcount('services')->get();
        $statusWithCount = Reservation::selectRaw('count(status) as count,status')->groupBy('status')->get();

        return response()->json([
            "services_reservations_count" => $servicesWithReservationsCount,
            "vehicles_services_count" => $vehiclesWithServicesCount,
            "status_count" => $statusWithCount
        ]);
    }
}
