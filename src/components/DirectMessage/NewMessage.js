import React, { useState } from 'react';
import './index.css';
import Modal from 'react-modal';

const NewMessage = ({ isNewMessageOpen, setIsNewMessageOpen, users }) => {
  const [filterText, setFilterText] = useState('');

  const closeModalNewMessage = () => setIsNewMessageOpen(false);

  const filteredUsers =
    users &&
    users.filter((user) => {
      return user.name.toLowerCase().includes(filterText.toLowerCase());
    });
  const handleOnChange = (event) => {
    setFilterText(event.target.value);
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
      <input type="text" value={filterText} onChange={handleOnChange} />
      <div>
        {filteredUsers &&
          filteredUsers.map((user) => {
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
