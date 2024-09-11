import React from "react";
import { IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="pr-4 w-48">
      <img src={IMG_URL + posterPath} alt="movie-card" />
    </div>
  );
};

export default MovieCard;
