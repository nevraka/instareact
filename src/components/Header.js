import React, { useContext } from "react";
import logo from "../image/logo.png";
import "./header.css";
import SearchBox from "./SearchBox";
import LoginButton from "./LoginButton";
import UserContext from "./UserContext";
import { useHistory } from "react-router-dom";

const Header = () => {
  const user = useContext(UserContext);
  const history = useHistory();

  return (
    <h2 className="ui-header">
      <div className="header-items">
        <img className="logo" src={logo} alt="" />
        <SearchBox />
        <div className="icon-header">
          <i
            className="home icon"
            onClick={() => {
              history.push("/");
            }}
          />
          <i className="paper plane outline icon"></i>
          <i className="compass icon"></i>
          <i className="heart icon"></i>
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
