import React from 'react';
import './index.css';

const MessageThread = ({ inputText, setInputText, messages, addMessage }) => {
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
        <div className="ui icon header">No Message</div>
      ) : (
        <div className="chat">
          {messages.map((message) => (
            <div>{message}</div>
          ))}
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
