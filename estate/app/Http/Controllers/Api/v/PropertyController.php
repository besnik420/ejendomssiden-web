<?php

namespace App\Http\Controllers\Api\v;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePropertyRequest;
use App\Http\Resources\v\PropertyResource;
use App\Models\property;
use Illuminate\Http\Request;

class PropertyController extends Controller{
    
    public function index(){
        return PropertyResource::collection(property::paginate(2));
        return response()->json('this is a json resp');
    }
    
    public function show(property $property){
        return new PropertyResource($property);
    }

    public function store(StorePropertyRequest $request){
        property::create($request ->validated());
        return response()->json('created');
    }
    
    public function update(StorePropertyRequest $request , property $property){
        $property ->update($request -> validated());
        return response()->json('updated');
    }
    
    public function destroy(property $property){
        $property->delete();
        return response()->json('deleted');

    }

}
