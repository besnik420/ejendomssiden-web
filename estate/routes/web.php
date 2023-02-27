<?php

use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\property;
use Psy\Readline\Hoa\Console;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/



//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');



Route::get('/',function(){
    return response()->json([
        'properties' => property::all(),
    ]);
});

Route::get('/property/{propertyId}' , function($id){
    return response()->json([
        'properties' => property::find($id)
    ]);
})->where ('id', '0-9+');




Route::post('/registerForm', function () {
    // Get the form data
    $username = request('username');
    $email = request('email');
    $password = request('password');
    // Process the form data here

    // this registers a new user directly >
    return User::create([
        'name' => $username,
        'email' => $email,
        'password' => Hash::make($password),
    ]); 

    // Send a response back to the client
    return "Registration successful with email: " . $email;
});




