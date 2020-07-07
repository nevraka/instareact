import React, { useState } from "react";
import "./searchbox.css";
import { useHistory } from "react-router-dom";

const SearchBox = () => {
  const [phrase, setPhrase] = useState("");
  const history = useHistory();

  const handleOnChange = (event) => {
    setPhrase(event.target.value);
  };

  const handleClick = () => {
    history.push(`/search/${phrase}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="ui search-images">
      <div className="ui icon action input">
        <input
          type="text"
          placeholder="Search Images"
          value={phrase}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
        />
        <div
          className="ui blue submit button"
          type="submit"
          onClick={handleClick}
        >
          <i className="search icon"></i>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
