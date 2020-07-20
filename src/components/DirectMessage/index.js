import React, { useState, useEffect } from 'react';
import './index.css';
import '../HomePage/Timeline';
import PeopleList from './PeopleList';
import unsplash from '../../api/unsplash';
import avatar from '../../image/avatar.png';

const DirectMessage = () => {
  const [users, setUsers] = useState(null);
  let currentUser = null;

  if (users && users.length > 0) {
    currentUser = users[0];
  }

  useEffect(() => {
    const callAPI = async () => {
      const result = await unsplash.get(
        `/search/photos?query=people&per_page=20`
      );
      setUsers(result.data.results.map((item) => item.user));
    };
    callAPI();
  }, []);

  return (
    <div className="message-box">
      <div className="ui two column grid direct">
        <div className="six wide column">
          <div className="ui vertical fluid menu">
            <div className="header item">
              Direct
              <i class="edit outline icon"></i>
            </div>
          </div>
          <div>
            <PeopleList users={users} />
          </div>
        </div>
        <div className="ten wide column">
          <div className="ui vertical fluid menu">
            {currentUser && currentUser.name}
            <img
              className="avatar"
              src={currentUser ? currentUser.profile_image.medium : avatar}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectMessage;
