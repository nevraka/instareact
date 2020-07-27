import React, { useState } from 'react';
import './index.css';
import avatar from '../../image/avatar.png';
import Modal from 'react-modal';
import Report from './Report';
import Block from './Block';
import DeleteChat from './DeleteChat';

const ConversationDetail = ({ currentUser }) => {
  const [showReport, setShowReport] = useState(false);
  const [showBlock, setShowBlock] = useState(false);
  const [showDeleteChat, setShowDeleteChat] = useState(false);

  const closeModalReport = () => setShowReport(false);
  const closeModalBlock = () => setShowBlock(false);
  const closeModalDeleteChat = () => setShowDeleteChat(false);

  return (
    currentUser && (
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
          {currentUser.name}
          <div class="ui list">
            <a
              class="item"
              onClick={() => {
                setShowDeleteChat(true);
              }}
            >
              Delete Chat
            </a>
            <a
              class="item"
              onClick={() => {
                setShowBlock(true);
              }}
            >
              Block
            </a>
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
        <Modal
          className="modal"
          style={{
            overlay: { backgroundColor: '#00000088' },
            content: { borderRadius: '5px' },
          }}
          shouldFocusAfterRender={false}
          isOpen={showDeleteChat}
          onRequestClose={closeModalDeleteChat}
        >
          <DeleteChat closeModalDeleteChat={closeModalDeleteChat} />
        </Modal>
        <Modal
          className="modal"
          style={{
            overlay: { backgroundColor: '#00000088' },
            content: { borderRadius: '5px' },
          }}
          shouldFocusAfterRender={false}
          isOpen={showReport}
          onRequestClose={closeModalReport}
        >
          <Report
            setShowReport={setShowReport}
            currentUserName={currentUser.name}
          />
        </Modal>
        <Modal
          className="modal"
          style={{
            overlay: { backgroundColor: '#00000088' },
            content: { borderRadius: '5px' },
          }}
          shouldFocusAfterRender={false}
          isOpen={showBlock}
          onRequestClose={closeModalBlock}
        >
          <Block
            currentUserName={currentUser.name}
            closeModalBlock={closeModalBlock}
          />
        </Modal>
      </div>
    )
  );
};

export default ConversationDetail;
