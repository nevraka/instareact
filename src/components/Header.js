import React, { useContext } from "react";
import logo from "../image/logo.png";
import "./header.css";
import SearchBox from "./SearchBox";
import LoginButton from "./LoginButton";
import UserContext from "./UserContext";

const Header = ({ onSearch }) => {
  const user = useContext(UserContext);

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
        {user.profile.googleId ? (
          <img className="profile-picture" src={user.profile.imageUrl} alt="" />
        ) : (
          <LoginButton setProfile={user.setProfile} />
        )}
      </div>
    </h2>
  );
};

export default Header;
