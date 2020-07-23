import React, { useState } from 'react';
import './index.css';
import avatar from '../../image/avatar.png';
import Modal from 'react-modal';
import Report from './Report';

const ConversationDetail = ({ currentUser }) => {
  const [showReport, setShowReport] = useState(false);

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
          <a class="item">Delete Chat</a>
          <a class="item">Block</a>
          <a
            class="item"
            onClick={() => {
              setShowReport(true);
            }}
          >
            Report
          </a>
        </div>
      </div>
      <Modal isOpen={showReport}>
        <Report setShowReport={setShowReport} />
      </Modal>
    </div>
  );
};

export default ConversationDetail;
