import React, { useEffect, useState } from "react";
import "./Backdrop.css";
import { fetchNetflixOriginals } from "../../api/requests";
import type { backdropInterface } from "../../@types";

// define vars
const truncate = (overview: string, n: number) => {
  return overview.length > n ? overview.substr(0, n - 1) + "..." : overview;
};

const Backdrop: React.FC = () => {
  const [movie, setMovie] = useState<backdropInterface | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await fetchNetflixOriginals();
      const movies = await data.results;
      const rndMovie = movies[Math.floor(Math.random() * movies.length)];
      setMovie(rndMovie);
    };

    fetchData();
  }, []);
  return (
    <div
      className="backdrop"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="backdrop-data">
        <h1>{movie?.title}</h1>
        <div className="backdrop-buttons">
          <button>Play</button>
          <button>My List</button>
        </div>
        <p>{truncate(movie?.overview ? movie.overview : "", 150)}</p>
      </div>
      <div className="backdrop-shadow-overlay" />
    </div>
  );
};

export default Backdrop;
