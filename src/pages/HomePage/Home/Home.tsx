import React, { useState } from "react";
import "./Home.css";
import { Backdrop, Row } from "../../../components";
import {
  fetchNetflixOriginals,
  fetchTrending,
  fetchTopRated,
  fetchActionMovies,
  fetchComedyMovies,
  fetchHorrorMovies,
  fetchRomanceMovies,
  fetchDocumentaries,
  fetchTrailers,
} from "../../../api/requests";

interface movieTrailerInt {
  rowId: number;
  trailer: string;
}

const Home: React.FC = () => {
  const [movie, setMovie] = useState<movieTrailerInt | null>(null);

  const onChangeMovieHandler = async (newMovie: movieTrailerInt) => {
    // setMovie(newMovie);
    const { data } = await fetchTrailers(newMovie.trailer);
    const trailers = await data.results;
    const rndTrailer = trailers[Math.floor(Math.random() * trailers.length)];

    setMovie({
      rowId: newMovie.rowId,
      trailer: rndTrailer.key,
    });
  };

  return (
    <div className="home">
      <Backdrop />
      <Row
        title="Netflix Originals"
        fetchUrl={fetchNetflixOriginals}
        isLargeRow={true}
        movie={movie}
        onChangeMovie={onChangeMovieHandler}
        id={1}
      />

      <Row
        title="Trending Now"
        fetchUrl={fetchTrending}
        isLargeRow={false}
        id={2}
        movie={movie}
        onChangeMovie={onChangeMovieHandler}
      />

      <Row
        title="Top Rated"
        fetchUrl={fetchTopRated}
        isLargeRow={false}
        movie={movie}
        onChangeMovie={onChangeMovieHandler}
        id={3}
      />

      <Row
        title="Action Movies"
        fetchUrl={fetchActionMovies}
        isLargeRow={false}
        id={4}
        movie={movie}
        onChangeMovie={onChangeMovieHandler}
      />

      <Row
        title="Comedy Movies"
        fetchUrl={fetchComedyMovies}
        isLargeRow={false}
        id={5}
        movie={movie}
        onChangeMovie={onChangeMovieHandler}
      />

      <Row
        title="Horror Movies"
        fetchUrl={fetchHorrorMovies}
        isLargeRow={false}
        id={6}
        movie={movie}
        onChangeMovie={onChangeMovieHandler}
      />

      <Row
        title="Romance Movies"
        fetchUrl={fetchRomanceMovies}
        isLargeRow={false}
        id={7}
        movie={movie}
        onChangeMovie={onChangeMovieHandler}
      />

      <Row
        title="Documentaries"
        fetchUrl={fetchDocumentaries}
        isLargeRow={false}
        id={8}
        movie={movie}
        onChangeMovie={onChangeMovieHandler}
      />
    </div>
  );
};

export default Home;
