import React, { useState, useEffect } from "react";
import Timeline from "./Timeline";
import unsplash from "../api/unsplash";
import SearchBox from "./SearchBox";

const App = () => {
  const [images, setImages] = useState([]);

  const onSearch = async (phrase) => {
    const result = await unsplash.get(
      `/search/photos?query=${phrase}&per_page=20`
    );
    setImages(result.data.results);
  };

  useEffect(() => {
    onSearch("random");
  }, []);

  return (
    <div>
      <SearchBox onSearch={onSearch} />
      <Timeline images={images} />
    </div>
  );
};

export default App;
