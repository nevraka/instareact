import React, { useContext } from 'react';
import logo from '../../image/logo.png';
import './header.css';
import SearchBox from './SearchBox';
import LoginButton from './LoginButton';
import UserContext from '../../context/UserContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const user = useContext(UserContext);

  return (
    <h2 className="ui-header">
      <div className="header-items">
        <img className="logo" src={logo} alt="" />
        <SearchBox />
        <div className="icon-header">
          <Link to="/">
            <i className="home icon" />
          </Link>
          <Link to="/message">
            <i className="paper plane outline icon" />
          </Link>
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
