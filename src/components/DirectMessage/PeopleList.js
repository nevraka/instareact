import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const PeopleList = ({ users }) => {
  return (
    <div className="list-ui">
      <div className="ui middle aligned divided list user-box">
        {users &&
          users.map((user) => {
            return (
              <Link to={`/message/${user.id}`}>
                <div class="item">
                  <div className="content">
                    <div class="right floated content "></div>
                    <img
                      src={user.profile_image.medium}
                      alt=""
                      className="user-image"
                    />
                    <div className="content user-name">{user.name}</div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default PeopleList;
