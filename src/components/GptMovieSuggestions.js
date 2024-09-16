import React from "react";
import gpt from "../utils/gptSlice";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = gpt;
  console.log("movie res in gpt ", movieResults);
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black text-white">
      <div>
        {movieNames.map((eachMovie, index) => (
          <MovieList
            key={eachMovie}
            title={eachMovie}
            movieData={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
