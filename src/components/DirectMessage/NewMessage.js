import React, { useState } from 'react';
import './index.css';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';

const NewMessage = ({ isNewMessageOpen, setIsNewMessageOpen, users }) => {
  const closeModalNewMessage = () => setIsNewMessageOpen(false);

  const [messageList, setMessageList] = useState('');
  const history = useHistory();

  const handleOnChange = (event) => {
    setMessageList(event.target.value);
  };

  const handleClick = () => {
    history.push(`/search/${messageList}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };
  return (
    <Modal
      className="modal"
      style={{
        overlay: { backgroundColor: '#00000088' },
        content: {
          borderRadius: '5px',
          maxHeight: '300px',
          overflow: 'scroll',
        },
      }}
      shouldFocusAfterRender={false}
      isOpen={isNewMessageOpen}
      onRequestClose={closeModalNewMessage}
    >
      <div className="new-message">
        <i
          className="x icon message-x-icon"
          onClick={() => {
            setIsNewMessageOpen(false);
          }}
        ></i>
        <div className="ui dividing header new-message-header">New Message</div>
      </div>
      <input
        type="text"
        value={messageList}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      <div>
        {users &&
          users.map((user) => {
            return (
              <div class="item">
                <div className="content">
                  <div className="message-users">
                    <img
                      src={user.profile_image.small}
                      alt=""
                      className="user-image"
                    />
                    <div className="users">{user.name}</div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </Modal>
  );
};
export default NewMessage;
