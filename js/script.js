import peliculas from './peliculas.js'

//Categorías películas
let pelisAccion = document.getElementById('genero-28');
let pelisThiller = document.getElementById('genero-53');
let pelisAventura = document.getElementById('genero-12');

//Propiedades del objeto películas
let nombrePelicula;
let pathImagen;
const url = 'https://image.tmdb.org/t/p/w500';

//Elementos DOM para cada película
let contentPelicula;
let imagePelicula; 
let tituloPelicula; 

//Filtramos películas de género acción
let arrayAccion = peliculas.filter((elemento) =>
    elemento.genre_ids = 28
);

//Filtramos películas de género thiller
let arrayThriller = peliculas.filter((elemento) =>
    elemento.genre_ids = 53
);

//Filtramos películas de género aventura
let arrayAventura = peliculas.filter((elemento) =>
    elemento.genre_ids = 12
);

//Función para crear una película, obtener su título e imagen y añadirlos al DOM
function crearPelicula(elementoDOM, arrayTipo) {
    
    //Recorremos array para obtener el nombre + ruta relativa de la imagen
    for (let i = 0; i < arrayTipo.length; i++) {

        nombrePelicula = arrayTipo[i].original_title; //título
        pathImagen = url+arrayTipo[i].poster_path; //url + ruta relativa de la imagen

        //En cada interacción, creamos un elemento 'div' que contendrá la imagen y el título
        contentPelicula = document.createElement('div');
        imagePelicula = document.createElement('img');
        imagePelicula.setAttribute("src", url+arrayTipo[i].poster_path);
        imagePelicula.setAttribute("alt", arrayTipo[i].original_title);
        tituloPelicula = document.createElement('h3');
        
        //DOM
        tituloPelicula.innerHTML = arrayTipo[i].original_title;
        contentPelicula.appendChild(imagePelicula);
        contentPelicula.appendChild(tituloPelicula);
        elementoDOM.appendChild(contentPelicula);

    } 
}

//Utilizamos la función crearPelicula() para añadir las películas de cada tipo a su sección correspondiente
crearPelicula(pelisAccion, arrayAccion);
crearPelicula(pelisThiller, arrayThriller);
crearPelicula(pelisAventura, arrayAventura);
