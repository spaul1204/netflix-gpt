import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const signOutBtnHandler = () => {
    console.log("in sign out");
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-40"
        alt="logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      <div className="flex p-2">
        <img
          className="w-12 h-12"
          alt="userIcon"
          src="https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYnjO0sg61Sr_6qSjEi2ATW5p8us77XmsAUN12O16X8N8aBK6m2x344-l17V34zrjHcag5Ts9buGE4q2sGTwP68iTIjHRvE.png?r=236"
        />
        <button className="font-bold text-white" onClick={signOutBtnHandler}>
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Header;
