import React from "react";
import logo from "../image/logo.png";
import "./header.css";
import SearchBox from "./SearchBox";

const Header = ({ onSearch }) => {
  return (
    <h2 className="ui-header">
      <div className="header-items">
        <img className="logo" src={logo}></img>
        <SearchBox onSearch={onSearch} />
        <div className="icon-header">
          <i class="home icon"></i>
          <i className="paper plane outline icon"></i>
          <i class="compass icon"></i>
          <i class="heart icon"></i>
        </div>
      </div>
    </h2>
  );
};

export default Header;
