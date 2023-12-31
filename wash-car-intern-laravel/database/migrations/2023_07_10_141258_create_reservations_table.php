<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reservations', function (Blueprint $table) {
            
            $table->id();
            
            $table->foreignId("worker_id")->constrained("users")->cascadeOnDelete()->nullable()->default(null);
            
            $table->foreignId("customer_id")->constrained("users")->cascadeOnDelete();
            
            $table->foreignId("service_id")->constrained("services")->cascadeOnDelete();

            $table->string("status")->default("pending");

            $table->decimal("longitude");
            
            $table->decimal("latitude");
 
            $table->timestamps();
 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
