import { React, useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieVideoDetails();
  }, []);

  const getMovieVideoDetails = async () => {
    const videoDetails = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const videoDetailsJson = await videoDetails.json();
    const filteredMovieData = videoDetailsJson.results.filter(
      (eachVideo) => eachVideo.type === "Trailer"
    );
    const movieTrailer = filteredMovieData.length
      ? filteredMovieData[0]
      : videoDetailsJson.results[0];
    dispatch(addMovieTrailer(movieTrailer));
  };
};
export default useMovieTrailer;
