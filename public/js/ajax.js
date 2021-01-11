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
    var ajax = new objetoAjax();
    ajax.open('GET', 'read', true);
    // var datasend = new FormData();
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var respuesta = JSON.parse(ajax.responseText);

        }
    }




    section.innerHTML = 'lo que sea';
}

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