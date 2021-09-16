import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseURL = "https://image.tmdb.org/t/p/w1280";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl] = useState("");

  useEffect(() => {
    //this use effect will run when movies state change

    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    //if any outside variable is used from outside the useEffect like
    //fetchURL we have to use
    fetchData();
  }, [fetchUrl]);
  //this makes fetchURL a dependency

  const handleClick = (movie)=>{
    if(trailerUrl){ //if already a trailer url is present then empty it
      setTrailerUrl('');
    }else{
      movieTrailer(movie?.name||"").then(url=>{
        const urlParams =new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }
 


  const opts={
    height:"390",
    width:"100%",
    playerVars:{
      autoplay:1,
    },
  };

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id}
            onClick={()=>handleClick(movie)}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;