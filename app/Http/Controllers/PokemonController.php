<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PokemonController extends Controller
{
    public function index(){
        //$pokemons=DB::select('select * from pokemon');
        return view('pokedex');
    }

    public function read(){
        $pokemons=DB::select('select nombre, numero_pokedex from pokemon');
        return response()->json($pokemons, 200);
        // return JSON;
    }
}
