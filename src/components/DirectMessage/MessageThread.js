import React from 'react';
import './index.css';

const MessageThread = ({
  inputText,
  setInputText,
  messages,
  addMessage,
  setIsNewMessageOpen,
}) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addMessage(inputText);
      setInputText('');
    }
  };
  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="ui transparent placeholder segment message-screen">
      {!messages || messages.length === 0 ? (
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
      ) : (
        <div className="ui icon header">
          <div className="chat">
            {messages.map((message) => (
              <div>{message}</div>
            ))}
          </div>
        </div>
      )}
      <div className="ui small icon input message-input">
        <input
          className="input-text"
          type="text"
          onKeyDown={handleKeyDown}
          value={inputText}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default MessageThread;
