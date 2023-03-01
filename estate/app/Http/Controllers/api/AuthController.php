<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Auth\Events\Login;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use PHPOpenSourceSaver\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;

//use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller{

    public function Login(LoginRequest $request){
        $credentials = $request->only('email', 'password');
        
        if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }
        
        return response()->json(['token' => $token]);

    }

    public function Register(RegisterRequest $request){
        $data = $request->validated();

        /** @var User $user */
        
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
        
        $credentials = $request->only('email', 'password');
        
        if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }
        
        return response()->json(['token' => $token]);

    }
    
    public function Logout(Request $request){
        
        /** @var User $user */
        $user = $request->user();
        $user->currentAccessToken()->delete;
        return response('',204);
    }

    public function refresh(){
        try {
            $newToken = auth()->refresh();

        } catch (TokenInvalidException $e) {
            return response()->json(['error' => $e->getMessage()],401);
        }
    
        return response()->json(['token'=>$newToken]);
        
    }

}