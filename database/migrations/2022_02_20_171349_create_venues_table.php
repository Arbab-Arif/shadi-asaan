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
        Schema::create('venues', function (Blueprint $table) {
            $table->id();
            $table->foreignId('vendor_id')->constrained();
            $table->foreignId('business_type_id')->constrained()->cascadeOnDelete();
            $table->foreignId('area_id')->nullable();
            $table->string('name');
            $table->enum('status', ['approve', 'pending', 'reject'])->default('pending');
            $table->string('manager_phone');
            $table->decimal('per_head', 20)->nullable();
            $table->decimal('rent_amount', 20)->nullable();
            $table->string('feature_image');
            $table->longText('description');
            $table->string('person_capacity');
            $table->decimal('latitude', 20, 10);
            $table->decimal('longitude', 20, 10);
            $table->integer('view')->nullable();
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
        Schema::dropIfExists('venues');
    }
};
