import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const PeopleList = ({ users }) => {
  return (
    <div className="list-ui full-height">
      <div className="ui middle aligned divided list user-box full-height">
        {users &&
          users.map((user) => {
            return (
              <Link to={`/message/${user.id}`}>
                <div className="person">
                  <div className="user-image-container">
                    <img
                      src={user.profile_image.medium}
                      alt=""
                      className="user-image"
                    />
                  </div>
                  <div className="user-name">{user.name}</div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default PeopleList;
