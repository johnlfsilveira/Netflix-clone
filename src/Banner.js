import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './request';
import './banner.css'

const base_url= "https://image.tmdb.org/t/p/original/";

export default function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const  request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n  ? str.substr(0, n - 1) + "..." : str;
    }

  return (
  <header  className="banner"
    style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "${base_url}${movie?.backdrop_path}"
        )`,
        backgroundPosition:"center center"
    }}
  > 
    <div className="banner_conteudo" >
      <h1 className="banner_titulo">
          {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <div className="banner_botoes">
        <button className="banner_botao">Assistir</button>
        <button className="banner_botao">+ Minha Lista</button>
      </div>
      <h1 className="banner_descricao">
        {truncate(movie?.overview, 150)}
      </h1>
    </div>
    <div className="banner-fadeBottom" />
  </header>
  )
}
