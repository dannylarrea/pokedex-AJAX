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

    public function read(Request $request){
        $filtro = $request->input('filtro');
        if ($filtro=='') {
            $pokemons=DB::select('select * from pokemon');
        }elseif ($filtro=='favorito') {
            $pokemons=DB::select('select * from pokemon where favorito = 1');
        } else{
            $pokemons=DB::select('select * from pokemon where nombre like ?', ["%".$filtro."%"]);
        }
        foreach($pokemons as $i){
            if ($i->imagen!=null) {
                $i->imagen = base64_encode($i->imagen);
            }
        }
        return response()->json($pokemons, 200);
        // return JSON;
    }
}
