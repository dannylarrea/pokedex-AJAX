<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PokemonController;


/* Route::get('/', function () {
    return view('welcome');
}); */
Route::get('/', [PokemonController::class, 'index']);
Route::post('read', [PokemonController::class, 'read']);
