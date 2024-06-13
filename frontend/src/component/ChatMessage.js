// src/components/ChatMessage.js
import React from 'react';
import './ChatMessage.css';

const ChatMessage = ({ message, sender, time, isUser }) => {
  return (
    <div className={`chat-message ${isUser ? 'user-message' : 'other-message'}`}>
      <div className="message-info">
        {!isUser && <img src={sender.avatar} alt={sender.name} className="avatar" />}
        <div className="message-content">
          {!isUser && <div className="sender-name">{sender.name}</div>}
          <div className="text">{message}</div>
          <div className="time">{time}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
