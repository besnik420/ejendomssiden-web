<?php

use App\Models\property;
use App\Models\User;
use Illuminate\Support\Facades\Route;

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
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');


Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');



Route::get('/',function(){
    return response()->json([
        'properties' => property::all(),
        'users ' => User::all()
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
    
    // Send a response back to the client
 return "Registration successful with email: " . $email;
});
