export const loginConstants = {
  sign_up: "Sign Up",
  sign_in: "Sign In",
  sign_up_message: "New to Netflix? Sign Up now",
  sign_in_message: "Already a user? Sign In now",
};

export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const PHOTO_URL =
  "https://cms.interiorcompany.com/wp-content/uploads/2024/01/lotus-beautiful-flowers.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_AUTH_KEY,
  },
};
export const IMG_BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_small.jpg";
export const IMG_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  {
    name: "English",
    identifier: "en",
  },
  {
    name: "Hindi",
    identifier: "hindi",
  },
  {
    name: "Spanish",
    identifier: "spanish",
  },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
