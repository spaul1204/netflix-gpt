import React, { useEffect } from "react";

import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector((store) => store.movies?.trailer);
  useEffect(() => {
    getMovieVideoDetails();
  }, []);

  const getMovieVideoDetails = async () => {
    const videoDetails = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const videoDetailsJson = await videoDetails.json();
    console.log("video details ", videoDetailsJson);
    const filteredMovieData = videoDetailsJson.results.filter(
      (eachVideo) => eachVideo.type === "Trailer"
    );
    const movieTrailer = filteredMovieData.length
      ? filteredMovieData[0]
      : videoDetailsJson.results[0];
    console.log("movie trailer ", movieTrailer);
    dispatch(addMovieTrailer(movieTrailer));
  };

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${movieTrailer?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
