import React, { useState, useEffect } from 'react';
import './index.css';
import '../HomePage/Timeline';
import PeopleList from './PeopleList';
import unsplash from '../../api/unsplash';
import avatar from '../../image/avatar.png';
import ConversationDetail from './ConversationDetail';
import { useParams } from 'react-router-dom';

const DirectMessage = () => {
  const [users, setUsers] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  let currentUser = null;
  const { userId } = useParams();

  currentUser = users && users.find((user) => user.id === userId);

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
          <div className="direct-icon">
            <div className=""></div>
            <div className="">Direct Message</div>
            <i class="edit outline icon" />
          </div>
          <div>
            <PeopleList users={users} />
          </div>
        </div>
        <div className="ten wide column ten-column">
          <div className="ui right menu ui-menu">
            <div></div>
            {showDetails ? (
              <div className="details">Details</div>
            ) : (
              <div className="block">
                <div>
                  <img
                    className="avatar"
                    src={
                      currentUser ? currentUser.profile_image.medium : avatar
                    }
                    alt=""
                  />
                </div>
                <div className="current-user">
                  {currentUser && currentUser.name}
                </div>
              </div>
            )}
            <div className="ui secondary right menu">
              <i
                className="info circle icon info"
                onClick={() => {
                  setShowDetails(!showDetails);
                }}
              />
            </div>
          </div>
          {showDetails && <ConversationDetail currentUser={currentUser} />}
        </div>
      </div>
    </div>
  );
};

export default DirectMessage;
