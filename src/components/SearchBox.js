import React, { useState } from "react";
import "./searchbox.css";

const SearchBox = ({ onSearch }) => {
  const [phrase, setPhrase] = useState("");

  const handleOnChange = (event) => {
    setPhrase(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(phrase);
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
          onClick={() => {
            onSearch(phrase);
          }}
        >
          <i className="search icon"></i>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
