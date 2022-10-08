import React, { useEffect, useState } from "react";
import "./Row.css";
import type { rowInterface } from "../../@types";
import YouTube from "react-youtube";

// Define vars
interface movieInt {
  poster_path: string;
  id: string;
}

interface movieTrailerInt {
  rowId: number;
  trailer: string;
}

const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};

// Component
const Row: React.FC<rowInterface> = ({
  title,
  fetchUrl,
  isLargeRow,
  movie,
  onChangeMovie,
  id,
}) => {
  const [movies, setMovies] = useState<movieInt[]>([]);

  // fetch row movies
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await fetchUrl();
      const fetchedMovies = await data.results;
      setMovies(fetchedMovies);
    };

    fetchData();
  }, [fetchUrl]);

  const videoReady = (event: any): void => {
    event.target.playVideo();
  };
  return (
    <>
      <div className="row">
        <h2>{title}</h2>
        <div className="row-movies">
          {movies.map((movie, key) => (
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
              alt=""
              className={`row-movie ${isLargeRow && "isLarge"}`}
              key={key}
              onClick={() => {
                const value: movieTrailerInt = {
                  rowId: id,
                  trailer: movie.id,
                };
                onChangeMovie(value);
              }}
            />
          ))}
        </div>
      </div>
      {movie?.rowId === id && (
        <YouTube videoId={movie.trailer} opts={opts} onReady={videoReady} />
      )}
    </>
  );
};

export default Row;
