import React from 'react';
import './index.css';
import avatar from '../../image/avatar.png';

const ConversationDetail = ({ currentUser, setShowReport }) => {
  return (
    <div className="ui checkbox show-details">
      <input type="checkbox" name="example" />
      <label>Mute Messages</label>
      <div className="details-box">
        <div>Members </div>
        <img
          className="details-image"
          src={currentUser ? currentUser.profile_image.medium : avatar}
          alt=""
        />
        {currentUser && currentUser.name}
        <div class="ui list">
          <a
            class="item"
            onClick={() => {
              setShowReport(true);
            }}
          >
            Delete Chat
          </a>
          <a class="item">Block</a>
          <a class="item">Report </a>
        </div>
      </div>
    </div>
  );
};

export default ConversationDetail;
