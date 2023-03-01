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
        Schema::create('properties', function (Blueprint $table) {
            $table->id();

            //main>
            $table->string('title');
            $table->longText('description');
            $table->integer('price')->nullable()->default(0);
            $table->integer('priceMonthly')->nullable();
            $table->integer('expensesPerMonth')->nullable();
            $table->bigInteger('property_categories')->unsigned()->index()->nullable();
            $table->foreign('property_categories')->references('id')->on('propertyCategories')->onDelete('cascade');
            $table->integer('status')->nullable();
            //show in?
            
            //advertising>
            $table->integer('livingArea')->default(0);
            $table->integer('groundArea')->default(0);
            $table->integer('rooms')->default(0);
            $table->integer('bedRooms')->default(0);
            $table->integer('bathRooms')->default(0);
            $table->integer('garages')->default(0);
            $table->string('builtRebuilt')->nullable();
            $table->string('ownerExpensesPerMonth')->nullable();
            $table->date('availableFrom')->nullable();
            $table->integer('basementm2')->default(0);
            $table->bigInteger('property_structure_type_id')->unsigned()->index()->nullable();
            $table->foreign('property_structure_type_id')->references('id')->on('property_structure_type')->onDelete('cascade');
            


            $table->integer('floors')->default(0);
            $table->string('checkWithBroker')->nullable();
            $table->string('tags')->nullable();      
            //?? >> 
            $table->string('ownerBrokerNotes')->nullable();      
            $table->string('energyClass')->default('A');      
            //Energy index in kWh/m2a ??
            

            //location
            $table->string('adress')->nullable();
            $table->string('Region')->nullable();
            $table->string('latitude')->nullable();
            $table->string('longitude')->nullable();
            //2. Region ??
            //3. Town ??
            //4. Territory ??
            //5. Zip Code
            //6. Country
            //9. Activate Google Street View
            //10. Google Street View - Camera angle (value from 0 to 360)
            
            //media>
            //?? images?
            $table->string('video')->nullable();
            $table->string('videoLink')->nullable();
            $table->string('virtialVideoLink')->nullable();

            
            //facilities??

            $table->bigInteger('property_type_id')->unsigned()->index()->nullable();
            $table->foreign('property_type_id')->references('id')->on('property_types')->onDelete('cascade');
            $table->timestamps();
        });    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properties');
    }
};


