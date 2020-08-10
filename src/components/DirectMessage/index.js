import React, { useState, useEffect } from 'react';
import './index.css';
import '../HomePage/Timeline';
import PeopleList from './PeopleList';
import unsplash from '../../api/unsplash';
import avatar from '../../image/avatar.png';
import ConversationDetail from './ConversationDetail';
import NewMessage from './NewMessage';
import { useParams } from 'react-router-dom';
import MessageThread from './MessageThread';
import _ from 'lodash';

const DirectMessage = () => {
  const [users, setUsers] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [isNewMessageOpen, setIsNewMessageOpen] = useState(false);
  const [inputText, setInputText] = useState('');

  const { userId } = useParams();
  let currentUser = null;
  currentUser = users && users.find((user) => user.id === userId);

  if (currentUser && !currentUser.messages) {
    currentUser.messages = [];
  }
  const addMessage = (inputText) => {
    currentUser.messages = [...currentUser.messages, inputText];
  };

  useEffect(() => {
    const callAPI = async () => {
      console.log('callAPI');
      const result = await unsplash.get(
        `/search/photos?query=people&per_page=20`
      );
      const allUsers = result.data.results.map((item) => item.user);
      const uniqueUsers = _.uniqBy(allUsers, (u) => u.id);

      setUsers(uniqueUsers);
    };
    callAPI();
  }, []);

  useEffect(() => {
    setShowDetails(false);
  }, [userId]);

  return (
    <div className="message-box">
      <div className="ui two column padded grid direct two-column">
        <div className="six wide column six-column">
          <div className="direct-icon">
            <div className="direct-message"></div>
            <div>Direct Message</div>
            <i
              className="edit outline icon"
              onClick={() => setIsNewMessageOpen(true)}
            />
          </div>
          <PeopleList users={users} />
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
          <div>
            {currentUser ? (
              showDetails && <ConversationDetail currentUser={currentUser} />
            ) : (
              <div>
                <div className="message-container">
                  <h2 class="ui center aligned icon header">
                    <i class="paper plane outline icon" />
                    Your Messages
                  </h2>
                  <h3 class="sub header sub-header">
                    Send private photos and messages to a friend or group.
                  </h3>
                  <button
                    class="blue ui button"
                    onClick={() => setIsNewMessageOpen(true)}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            )}
          </div>
          <NewMessage
            users={users}
            isNewMessageOpen={isNewMessageOpen}
            setIsNewMessageOpen={setIsNewMessageOpen}
          />
          <MessageThread
            inputText={inputText}
            setInputText={setInputText}
            messages={currentUser && currentUser.messages}
            addMessage={addMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default DirectMessage;
