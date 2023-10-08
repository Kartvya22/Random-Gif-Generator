import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


function Random() {
 
    const {loading, gif, fetchData} = useGif();
    
  return (
    <div className="flex flex-col justify-evenly items-center gap-8 w-1/2 h-1/2  bg-green-400 rounded-lg px-4 py-8 border-2 border-black ">
      <h1 className="font-bold underline uppercase text-xl">A Random Gif</h1>
      <div className=" flex justify-center items-center h-[400px] w-8/12 overflow-hidden shadow-md shadow-black bg-black">
        {loading ? <Spinner /> : <img src={gif} alt="gif" width={450} className="h-[400px] w-[500px] overflow-hidden"/>}
      </div>
      <button
        onClick={() => fetchData()}
        className="w-[85%] py-2 text-center bg-green-200 rounded-lg font-semibold uppercase shadow-sm shadow-black hover:bg-emerald-800 hover:text-white transition-all duration-300 "
      >
        Generate
      </button>
    </div>
  )
}

export default Random;
