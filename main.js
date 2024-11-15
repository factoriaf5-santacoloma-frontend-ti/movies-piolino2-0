import { getData } from "./public/api";

window.addEventListener('load',async() =>{
  
  const data = await getData();
  

  const list = document.createElement('ul');
  data.results.forEach(movies => {

  const listIl =document.createElement('li');
  const title = document.createElement('h2');
  const poster_path = document.createElement('img');
  const overview = document.createElement('p');
  const original_languaje = document.createElement('p');
  const vote_average = document.createElement('p');


  title.textContent    = movies.title;
  poster_path.src      = `https://image.tmdb.org/t/p/w500${movies.poster_path}`;
  overview.textContent  = movies.overview;
  original_languaje.textContent =movies.original_languaje;
  vote_average.textContent = movies.vote_average;

  
  listIl.appendChild(title);
  listIl.appendChild(poster_path);
  listIl.appendChild(overview);
  listIl.appendChild(original_languaje);
  listIl.appendChild(vote_average);

  list.appendChild(listIl);
    
 

    
  });  
    document.getElementById('app').appendChild(list);
});