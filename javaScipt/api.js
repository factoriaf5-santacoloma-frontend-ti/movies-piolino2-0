const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=a21c9aa641d6ade1164e20c882951889"

export const getData = async () =>{
    const response = await fetch(url);
    
    const data = await response.json();

    return data;

}


export const getOne= async (id) =>{
    const response = await fetch("https://api.themoviedb.org/3/movie/"+ id, {
        headers:{ "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjFjOWFhNjQxZDZhZGUxMTY0ZTIwYzg4Mjk1MTg4OSIsIm5iZiI6MTczMjEwNjg5Mi41NTUwMzYsInN1YiI6IjY3MzVlYTBlNmJkNDg4OWJmYmM3NzQ0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.le7FL5FTPrtykodM7Z68ZLQy2ZZ9CXd7IkFy1HYwZ9w" 
    }})
    const data = await response.json();
    // console.log(data)
    return data;

  }
// getData()
//console.log(await getOne(1100782)); 
