import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-42 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movieData={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movieData={movies?.popularMovies} />
        <MovieList title={"Upcoming"} movieData={movies?.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
