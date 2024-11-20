document.addEventListener('DOMContentLoaded', () => {
  // Recuperar información de localStorage
  const selectedMovie = localStorage.getItem('selectedMovie');
  
  if (selectedMovie) {
    const movieData = JSON.parse(selectedMovie);

    // Crear elementos para mostrar los datos
    const container = document.querySelector('.details-container');
    const title = document.createElement('h1');
    const poster = document.createElement('img');
    const overview = document.createElement('p');
    const originalLanguage = document.createElement('p');
    const adult = document.createElement('p');
    const releaseDate = document.createElement('p');
    const div = document.createElement('div');

    // Configurar los elementos con los datos de la película
    title.textContent = movieData.title;

    poster.src = movieData.poster; // Imagen por defecto si no hay poster

    overview.classList.add('parrafo');
    overview.textContent = movieData.overview;

    originalLanguage.classList.add('lenguajeMovie');
    originalLanguage.textContent = `languaje: ${movieData.original_language}`; // Idioma original
    
    adult.classList.add('adult');
    adult.textContent = `mayores de edad: ${movieData.adult}`; // Para público adulto
    
    releaseDate.classList.add('date');
    releaseDate.textContent = `Date: ${movieData.release_date}`; // Fecha de lanzamiento

    div.classList.add('text-content');

    // Añadir los elementos al contenedor
    container.appendChild(poster);
    div.appendChild(title);
    div.appendChild(overview);
    div.appendChild(originalLanguage);
    div.appendChild(adult);
    div.appendChild(releaseDate);
    container.appendChild(div);

    
  } else {
    // Si no hay datos de la película, mostrar un mensaje de error
    const container = document.querySelector('.details-container');
    container.textContent = 'No movie selected. Please go back and choose a movie.';
  }
});
