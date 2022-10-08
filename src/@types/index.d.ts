import React from "react";
import type { AxiosResponse } from "axios";

// context interface
export interface contextInterface {
  isLoggedIn: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

// backdrop interface
export interface backdropInterface {
  backdrop_path: string;
  original_title?: string;
  title: string;
  overview?: string;
}

// movieTRailer interface
interface movieTrailerInt {
  rowId: number;
  trailer: string;
}

// row interface
export interface rowInterface {
  id: number;
  title: string;
  fetchUrl: () => Promise<AxiosResponse<any, any>>;
  isLargeRow: boolean;
  movie: movieTrailerInt | null;
  onChangeMovie: (newMovie: movieTrailerInt) => void;
}
