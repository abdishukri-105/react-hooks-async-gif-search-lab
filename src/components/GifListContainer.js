import React, { useState, useEffect } from "react";
import GifSearch from "./GifSearch"
import GifList from "./GifList"

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");



  useEffect(() => {
      fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=y432v0TbMkgMEzD0vIu26822crlh1XXE`)
      .then(res => res.json())
      .then(data => {
        console.log(data.data.slice(0,3))
        setGifs(data.data.slice(0,3))
      })
  },[] );


  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.elements.search.value);
  };

  return (
    <>
      <GifSearch submitHandler={handleSubmit} />
      <GifList gifs={gifs} />
    </>
  );
};

export default GifListContainer;
