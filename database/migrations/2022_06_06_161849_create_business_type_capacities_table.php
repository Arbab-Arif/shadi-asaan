<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('business_type_capacities', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\BusinessType::class)->constrained()->cascadeOnDelete();
            $table->longText('label');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('business_type_capacities');
    }
};
