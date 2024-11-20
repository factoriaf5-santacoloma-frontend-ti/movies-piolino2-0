import { getOne } from "./api.js";
document.addEventListener('DOMContentLoaded', async () => {

//console.log(await getOne(1100782)); 
 // const selectedMovie = localStorage.getItem('selectedMovie');
  const url = new URL(window.location.href);


  const id = url.searchParams.get('id');
  
  //searchParams esta buscando el id de todo que hay 
  //.get es cojer 
  console.log(id);  

  if (id) {
    //const movieData = JSON.parse(selectedMovie);
    const movieData = await getOne(id);
    console.log(movieData);
    
    // Crear elementos para mostrar los datos
    const container = document.querySelector('.details-container');
    const title = document.createElement('h1');
    const votos = document.createElement('p');
    const poster = document.createElement('img');
    const overview = document.createElement('p');
    const originalLanguage = document.createElement('p');
    const releaseDate = document.createElement('p');
    const div = document.createElement('div');

    // Configurar los elementos con los datos de la película
    title.classList.add('title');
    title.textContent = movieData.title;

    poster.src = `https://image.tmdb.org/t/p/w500${movieData.poster_path}`  ; // Imagen por defecto si no hay poster

    overview.classList.add('parrafo');
    overview.textContent = movieData.overview;

    votos.classList.add('totalVotos');
    votos.textContent = `Votes: ${movieData.vote_average}`;
console.log(movieData.vote_average);

    originalLanguage.classList.add('lenguajeMovie');
    originalLanguage.textContent = `Original language: ${movieData.original_language}`; // Idioma original
    
    releaseDate.classList.add('date');
    releaseDate.textContent = `Release date: ${movieData.release_date}`; // Fecha de lanzamiento

    div.classList.add('text-content');

    // Añadir los elementos al contenedor
    container.appendChild(poster);
    div.appendChild(title);
    div.appendChild(overview);
    div.appendChild(originalLanguage);
    div.appendChild(releaseDate);
    div.appendChild(votos);
    container.appendChild(div);

    
  } else {
    // Si no hay datos de la película, mostrar un mensaje de error
    const container = document.querySelector('.details-container');
    container.textContent = 'No movie selected. Please go back and choose a movie.';
  }
});
