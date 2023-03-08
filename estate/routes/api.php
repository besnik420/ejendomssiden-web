<?php

use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\api\propertiesController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
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


Route::options('/{any}', function () {
         \Log::info('any routes');
    return response('', 200)
        ->header('Access-Control-Allow-Origin', 'http://localhost:3000')
        ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization, access-control-allow-origin')
        ->header('Access-Control-Allow-Credentials', 'true');
})->where('any', '.*');


Route::post('/register',[AuthController::class, 'Register']);

Route::post('/login',[AuthController::class, 'login']);

//Route::resource('/property',propertiesController::class);

