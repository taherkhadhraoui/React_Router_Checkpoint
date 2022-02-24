import React, { useState } from "react";
import { moviesData } from "../../Constants/Data";
import MovieCard from "./MovieCard";

const MoviesList = () => {
  const [movies, setMovies] = useState(moviesData);
  return (
    <div>
      {movies.map((el) => (
        <MovieCard movieprops={el} />
      ))}
    </div>
  );
};

export default MoviesList;
