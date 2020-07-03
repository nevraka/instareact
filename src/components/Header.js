import React from "react";
import logo from "../image/logo.png";
import "./header.css";
import SearchBox from "./SearchBox";
import LoginButton from "./LoginButton";

const Header = ({ onSearch, profile, setProfile }) => {
  return (
    <h2 className="ui-header">
      <div className="header-items">
        <img className="logo" src={logo} alt="" />
        <SearchBox onSearch={onSearch} />
        <div className="icon-header">
          <i class="home icon"></i>
          <i className="paper plane outline icon"></i>
          <i class="compass icon"></i>
          <i class="heart icon"></i>
        </div>
        {profile.googleId ? (
          <img className="profile-picture" src={profile.imageUrl} alt="" />
        ) : (
          <LoginButton setProfile={setProfile} />
        )}
      </div>
    </h2>
  );
};

export default Header;
