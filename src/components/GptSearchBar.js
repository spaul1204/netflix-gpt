import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { languageMap } from "../utils/languageConstants";
import openAI from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const language = useSelector((store) => store.config.selectedLanguage);
  const gptSearchText = useRef(null);

  const searchTMDB = async (movie) => {
    const fetchMovies = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const fetchMoviesJson = await fetchMovies.json();
    return fetchMoviesJson.results;
  };

  const handleGptSearchClick = async () => {
    //make an api call to gpt api
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      gptSearchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openAI.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptResultsArray = gptResults?.choices[0]?.message?.content.split(",");
    const moviesPromiseArray = gptResultsArray.map((eachMovie) =>
      searchTMDB(eachMovie)
    );
    const moviesData = await Promise.all(moviesPromiseArray);
    dispatch(
      addGptMovies({ movieNames: gptResultsArray, movieResults: moviesData })
    );

    console.log("movie promise ", moviesData);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 grid grid-cols-12 bg-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={gptSearchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={languageMap[language].searchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        >
          {languageMap[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
