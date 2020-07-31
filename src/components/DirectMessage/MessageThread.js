import React, { useState } from 'react';
import './index.css';

const MessageThread = () => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setMessages([...messages, inputText]);
      setInputText('');
    }
  };
  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="ui transparent placeholder segment message-screen">
      <div className="ui icon header">No Message</div>
      <div className="chat">
        {messages.map((message) => (
          <div>{message}</div>
        ))}
      </div>
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
