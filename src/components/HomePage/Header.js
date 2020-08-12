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
    <div className="ui-header">
      <div className="header-items">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <SearchBox />
        <div className="icon-header">
          <Link to="/">
            <i className="home icon" />
          </Link>
          <Link to="/message">
            <i className="paper plane outline icon" />
          </Link>
          <Link to="/explore">
            <i className="compass icon"></i>
          </Link>
          <i className="heart icon"></i>
        </div>
        {user.profile.googleId ? (
          <img className="profile-picture" src={user.profile.imageUrl} alt="" />
        ) : (
          <LoginButton setProfile={user.setProfile} />
        )}
      </div>
    </div>
  );
};

export default Header;
