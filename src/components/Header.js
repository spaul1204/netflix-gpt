import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { languages, LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const signOutBtnHandler = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  const languageToggleHandler = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const handleGptToggle = () => {
    dispatch(toggleGptSearchView());
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-40" alt="logo" src={LOGO} />
      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              onChange={languageToggleHandler}
              className=" p-2 m-2 bg-blue-700 text-white rounded-lg"
            >
              {SUPPORTED_LANGUAGES.map((each) => (
                <option key={each.identifier} value={each.identifier}>
                  {each.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptToggle}
            className="text-white bg-purple-600 rounded-lg py-2 px-4 mx-4 my-2"
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img className="w-12 h-12" alt="userIcon" src={user?.photoURL} />
          <button className="font-bold text-white" onClick={signOutBtnHandler}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
