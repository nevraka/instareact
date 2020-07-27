import React from 'react';
import './index.css';

const DeleteChat = ({ closeModalDeleteChat }) => {
  return (
    <div className="delete-chat-page">
      <div className="ui dividing header delete-chat-header">Delete Chat?</div>
      <div>
        Deleting removes the chat from your inbox, but no one else's inbox.
      </div>
      <div class="ui middle aligned divided list block-list">
        <button class="ui basic negative button">Delete</button>
        <button class="ui basic button" onClick={closeModalDeleteChat}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteChat;
