import React, { useState, useEffect } from 'react';
import './index.css';
import '../HomePage/Timeline';
import PeopleList from './PeopleList';
import unsplash from '../../api/unsplash';
import avatar from '../../image/avatar.png';

const DirectMessage = () => {
  const [users, setUsers] = useState(null);
  const [selectedUserId, setSelecetedUserId] = useState('');

  let currentUser = null;

  currentUser = users && users.find((user) => user.id === selectedUserId);

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
            <PeopleList users={users} selectUser={setSelecetedUserId} />
          </div>
        </div>
        <div className="ten wide column">
          <div className="ui vertical fluid menu">
            <img
              className="avatar"
              src={currentUser ? currentUser.profile_image.medium : avatar}
              alt=""
            />
            {currentUser && currentUser.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectMessage;
