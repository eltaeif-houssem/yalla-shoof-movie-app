import axios from "./axios";
import fetches from "./fetch";

const apiKey = process.env.REACT_APP_TMDB_API_KEY;

export const fetchTrending = () => axios.get(fetches.fetchTrending);

export const fetchNetflixOriginals = () =>
  axios.get(fetches.fetchNetflixOriginals);

export const fetchTopRated = () => axios.get(fetches.fetchTopRated);

export const fetchActionMovies = () => axios.get(fetches.fetchActionMovies);

export const fetchComedyMovies = () => axios.get(fetches.fetchComedyMovies);

export const fetchHorrorMovies = () => axios.get(fetches.fetchHorrorMovies);

export const fetchRomanceMovies = () => axios.get(fetches.fetchRomanceMovies);

export const fetchDocumentaries = () => axios.get(fetches.fetchDocumentaries);

export const fetchTrailers = (movieId: string) =>
  axios.get(`/movie/${movieId}/videos?api_key=${apiKey}`);
