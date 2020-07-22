import React from 'react';
import './index.css';

const PeopleList = ({ users, selectUser }) => {
  return (
    <div className="list-ui">
      <div className="ui middle aligned divided list user-box">
        {users &&
          users.map((user) => {
            return (
              <div class="item" onClick={() => selectUser(user.id)}>
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
            );
          })}
      </div>
    </div>
  );
};

export default PeopleList;
