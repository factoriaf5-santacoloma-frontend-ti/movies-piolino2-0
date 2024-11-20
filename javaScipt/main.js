import { getData } from "./api.js";


window.addEventListener('load', async () => {
  const data = await getData();

  const list = document.createElement('ul');
  data.results.forEach(movies => {
    const listItem = document.createElement('li');
    const title = document.createElement('h2');
    const posterPath = document.createElement('img');
    const overview = document.createElement('p');

    // Configurar la imagen del póster
    posterPath.classList.add('poster');
    posterPath.src = `https://image.tmdb.org/t/p/w500${movies.poster_path}`;
    posterPath.alt = movies.title;

    // Agregar la descripción de la película
    overview.classList.add('overview');
    overview.textContent = movies.overview;

    // Hacer que el póster sea clicable
    posterPath.addEventListener('click', () => {
      // Guardar información de la película en localStorage
      const movieData = {
        title: movies.title,
        poster: `https://image.tmdb.org/t/p/w500${movies.poster_path}`,
        overview: movies.overview,
        original_language: movies.original_language || 'N/A',
        adult: movies.adult ? 'Yes' : 'No',
        release_date: movies.release_date || 'N/A', // Asegurarse de usar release_date
        

      };
      localStorage.setItem('selectedMovie', JSON.stringify(movieData));

      // Redirigir a la página de detalles de la película
      window.location.href = '/movie.html?id='+movies.id;
      console.log(window.location.href);
      
    });

    // Añadir los elementos al elemento de la lista
    listItem.appendChild(title);
    listItem.appendChild(posterPath);
    listItem.appendChild(overview);

    list.appendChild(listItem);
  });

  document.getElementById('app').appendChild(list);
});
