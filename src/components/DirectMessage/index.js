import React, { useState, useEffect } from 'react';
import './index.css';
import '../HomePage/Timeline';
import PeopleList from './PeopleList';
import unsplash from '../../api/unsplash';
import avatar from '../../image/avatar.png';
import ConversationDetail from './ConversationDetail';

const DirectMessage = () => {
  const [users, setUsers] = useState(null);
  const [selectedUserId, setSelecetedUserId] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [showReport, setShowReport] = useState(false);

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

  if (showReport) {
    return 'report';
  }

  return (
    <div className="message-box">
      <div className="ui two column grid direct">
        <div className="six wide column">
          <div className="ui vertical fluid menu">
            <div className="header item direct-icon">
              Direct Message
              <i class="edit outline icon"></i>
            </div>
          </div>
          <div>
            <PeopleList users={users} selectUser={setSelecetedUserId} />
          </div>
        </div>
        <div className="ten wide column ten-column">
          <div className="ui right menu ui-menu">
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
          {showDetails && (
            <ConversationDetail
              currentUser={currentUser}
              setShowReport={setShowReport}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DirectMessage;
