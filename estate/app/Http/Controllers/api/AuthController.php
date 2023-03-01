<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller{

    public function Login(LoginRequest $request){
          \Log::info('entered auth controller');
          \Log::info($request);
        $creds = $request->validated();
        if(!Auth::attempt($creds)){
            return response(['message' =>'email or password is wrong']);
        }
        /** @var User $user */
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user','token'));
    }

    public function Register(RegisterRequest $request){
        $data = $request->validated();

        /** @var User $user */
        
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
        
        $token = $user ->createToken('main')->plainTextToken;
        
        return response(compact('user','token'));
    }
    
    public function Logout(Request $request){
        
        /** @var User $user */
        $user = $request->user();
        $user->currentAccessToken()->delete;
        return response('',204);
    }

}