const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=a21c9aa641d6ade1164e20c882951889"


export const getData = async () =>{
    const response = await fetch(url);
    
    const data = await response.json();
    // console.log(data)
    return data;

}


// getData();