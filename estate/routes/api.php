<?php

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/auth', function (Request $request) {
     \Log::info($request->username);
     \Log::info($request->password);
     \Log::info($request);
    //Validate the request data
    $request->validate([
        'user' => 'required|string',
        'pwd' => 'required|string',
    ]);
     \Log::info('auth routes registered');
    // Attempt to authenticate the user
    $user = User::where('name', $request->user)->first();
    if (!$user || !Hash::check($request->pwd, $user->password)) {
        // Return an error in a JSON response
            \Log::info('The provided credentials are incorrect.');
        return response()->json([
            'success' => false,
            'message' => 'The provided credentials are incorrect.',
        ], 401);
    }
    $token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMiIsIm5hbWUiOiJlZG9uYWVsc2hhbmkiLCJpYXQiOjE1MTYyMzkwMjJ9.fQjMG7BlndUbFaoaqXvPe01f3eQMxBCqXhD_oQebmV0';
     \Log::info('The provided credentials are correct.');
    // Return the token in a JSON response
    return response()->json([
        'success' => true,
        'token' => $token,
    ], 200)
->header('Access-Control-Allow-Origin', 'http://localhost:3000')
->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
->header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
->header('Access-Control-Allow-Credentials', 'true');
});
