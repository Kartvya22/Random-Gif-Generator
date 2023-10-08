
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function useGif(tag) {

  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  const errorUrl = `https://media1.giphy.com/media/J4hTgF20u64mnQzg6x/giphy.gif?cid=19dc3d9a11lmhsdhecq4egj4j0wbzb5u31i19wux9gdoczkh&ep=v1_gifs_random&rid=giphy.gif&ct=g`

  async function fetchData(tag) {
    setLoading(true);

    const url = tag ? tagMemeUrl : randomMemeUrl;

    const output = await axios.get(url);
    console.log(output);
    if(output.data.data.length == 0) {
      setGif(errorUrl)
    }
    else{
      const imageSource = output.data.data.images.downsized_large.url;
      // console.log(imageSource);
      setGif(imageSource)
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData('car');
  },[]);

  return { gif, loading, fetchData };
}

export default useGif;
