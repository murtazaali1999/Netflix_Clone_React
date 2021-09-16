import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

const baseURL = "https://image.tmdb.org/t/p/w1280";

function Banner() {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(str,n){
      return str?.lenght > n ? str.substr(0,n-1)+"...":str;
  }

  return (
    <header
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseURL}${movie.backdrop_path})`,
      }}
    >
      <div className='banner__contents'>
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>{truncate(movie?.overview,150)}</h1>
      </div>
    </header>
  );
}

export default Banner;