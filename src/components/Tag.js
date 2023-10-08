import React from "react";
import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

function Tag() {

    const [tag, setTag] = useState('');
  
    const {gif, loading, fetchData} = useGif(tag);

  function changeHandler(event) {
    // console.log(event.target);
    // console.log(event.target.value);
    setTag(event.target.value);
  }

  function  clickHandler() {
    fetchData(tag);
  }

  return (
    <div className="flex flex-col justify-evenly items-center gap-8 w-1/2 h-1/2 bg-green-400 rounded-lg px-4 py-8 border-2 border-black ">
      <h1 className="font-bold underline uppercase text-xl">Random {tag} Gif</h1>
      <div className="flex justify-center items-center h-[400px] w-8/12 overflow-hidden shadow-md shadow-black bg-black">
        {loading ? (
          <Spinner />
        ) : (
          <img
            src={gif}
            alt="gif"
            width={450}
            className="h-[400px] w-[500px] overflow-hidden"
          />
        )}
      </div>
      <input
        type="text"
        name="tag"
        value={tag}
        placeholder="Anything..."
        onChange={changeHandler}
        className="w-[65%] py-2 text-center text-slate-700 font-medium bg-green-100 rounded-lg  shadow-sm shadow-black  "
      />

      <button
        onClick={clickHandler}
        className="w-[85%] py-2 text-center bg-green-200 rounded-lg font-semibold uppercase shadow-sm shadow-black hover:bg-emerald-800 hover:text-white transition-all duration-300 "
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
