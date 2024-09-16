import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movieData }) => {
  return (
    <div className="px-6 bg-black">
      <h1 className="text-3xl text-white py-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movieData?.map((each, index) => (
            <MovieCard key={index} posterPath={each.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
