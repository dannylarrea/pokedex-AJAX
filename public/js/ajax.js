window.onload = function() {
    read();
}

function objetoAjax() {
    var xmlhttp = false;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

/* Muestra todos los registros de la base de datos (sin filtrar y filtrados) */
function read() {
    var section = document.getElementById('section-3');
    var buscador = document.getElementById('searchPokemon').value;
    var token = document.getElementById('token').getAttribute('content');
    var ajax = new objetoAjax();
    ajax.open('POST', 'read', true);
    var datasend = new FormData();
    datasend.append('filtro', buscador);
    datasend.append('_token', token);

    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(ajax.responseText);
            var tabla = '';
            for (let i = 0; i < respuesta.length; i++) {
                //const element = array[i];
                tabla += '<div class="column-5">';
                if (respuesta[i].imagen == null) {
                    tabla += '<img src="images/unown.png" style="opacity:.3" alt="error">';
                    tabla += '<h4>' + respuesta[i].nombre + '</h4>';
                    tabla += '<h4>' + respuesta[i].numero_pokedex + '</h4>';
                    tabla += '<div><img src="images/up_image.png" alt="error" style="opacity:.3"></div>';
                } else {
                    tabla += '<img src="data:image/png;base64,' + respuesta[i].imagen + '" alt="error">';
                    tabla += '<h4>' + respuesta[i].nombre + '</h4>';
                    tabla += '<h4>' + respuesta[i].numero_pokedex + '</h4>';
                    tabla += '<div>';
                    tabla += '<img src="images/catched.png" alt="error">';
                    if (respuesta[i].favorito == 1) {
                        tabla += '<img src="images/fav.png" alt="error">';
                    } else {
                        tabla += '<img src="images/fav.png" style="opacity:.3" alt="error">';
                    }
                    tabla += '</div>';
                }
                tabla += '</div>';
            }
            section.innerHTML = tabla;
        }
    }
    ajax.send(datasend);

}

/*
 @foreach($pokemons as $pokemon)
        <div class="column-5">

            @if ($pokemon->imagen == null)
                <img src="images/unown.png" style="opacity:.3" alt="error">
                <h4>{{$pokemon->nombre}}</h4>
                <h4>{{$pokemon->numero_pokedex}}</h4>
                <div><img src="images/up_image.png" alt="error" style="opacity:.3"></div>

            @else
                <img src="data:image/png;base64,{{ chunk_split(base64_encode($pokemon->imagen))}}" alt="error">
                <h4>{{$pokemon->nombre}}</h4>
                <h4>{{$pokemon->numero_pokedex}}</h4>
                <div>
                    <img src="images/catched.png" alt="error">
                    @if ($pokemon->favorito == 1)
                        <img src="images/fav.png" alt="error">
                    @else
                        <img src="images/fav.png" style="opacity:.3" alt="error">
                    @endif

                </div>
            @endif


        </div>         
        @endforeach
*/

/* Actualiza el campo favorito de un pokemon en la base de datos */
function updateFav(num, fav) {
    //code...
}

/* Actualiza el campo imagen de un pokemon en la base de datos */
function updateImage() {
    //code...
}

function openModal(num) {
    //code...
}

function closeModal() {
    //code..
}

/* window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} */

/* comillas en envío de variables de entrada en funciones JS: &#039 */

/* EX:
1. filtro favoritos
2. liberar pokémons (quitar la imagen)
*/