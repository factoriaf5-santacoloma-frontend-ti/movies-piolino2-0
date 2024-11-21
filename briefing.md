
## Introducción

Corren malos tiempos para las salas de cine. La competencia de internet está dañando la industria, la gente se descarga películas sin pagar por ello. Una sala de proyección ha contactado con nosotros para ayudarles a cambiar la visión que tiene la gente sobre el cine. Piensan que si usan las últimas tecnologías la gente los verá de otro modo.
Nos piden que el listado de películas lo obtengamos de la API de [TMDB](https://www.themoviedb.org/), utilizando la url: https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key= seguido de vuestra api_key personal.

**Antes de empezar no olvides registrarte en TMDB para obtener tu clave**

![](https://imgur.com/nPVcCjj.jpg)

## Objetivo

Nuestro objetivo es crear un sitio web alucinante con las últimas películas en cartelera.

## Instrucciones

1. Acepta la asignación de classroom.
2. Clona el repositorio con las instrucciones.
3. Selecciona el directorio clonado en un terminal.
4. Crea una rama develop y cámbiate a ella.
5. Crea tu aplicación con el comando: 
```sh
        npm create vite@latest -- --template vanilla
```
6. Cuando pida el nombre del proyecto escribimos un punto ---> "." Después selecciona la opción _ignore files and continue_.
7. Trabaja en la rama develop hasta que termines el proyecto (si trabajáis en equipo utilizad una rama para cada miembro del equipo y vais haciendo merge con develop). 
8. Haz un merge a la rama `main` cuando tengas la versión definitiva.
9. Lanza el comando `npm run build` que construirá la versión desplegable en el directorio dist.
9. Utiliza el código de la carpeta dist para desplegar la aplicación al servidor que consideres (github pages, netlify, vercel, etc.).
10. Crea el fichero `readme.md` del proyecto con toda la información.
11. Crea una presentación para mostrar el resultado.

## Modalidad

- Trabajo individual o en parejas (máx. 3 personas)
- Requiere presentación.


### Requerimientos
- Crea una __homepage__ que muestre una galería de las películas.
- Crea una página __moviedetail__ que debe mostrar el detalle de cada película.
- Debes utilizar la API fetch para traer la información.
- Aplica estilos para que la web se vea moderna.

### Bonus 
- Utiliza llamadas individuales a la api cuando se cargue la página de moviedetail.
