// src/components/ChatWindow.js
import React from "react";
import ChatMessage from "./ChatMessage";
import "./ChatWindow.css";
import { useState } from "react";

const ChatWindow = () => {
  const [messages, setMessages] = useState();
  return (
    <div className="chat-window">
      <div className="chat-header">
        <img src="path/to/avatar.jpg" alt="Truyện.Audio" className="avatar" />
        <div className="header-info">
          <div className="name">Truyện.Audio</div>
        </div>
      </div>
      <div className="chat-body">
        {messages &&
          messages.map((msg, index) => <ChatMessage key={index} {...msg} />)}
      </div>
      <div className="chat-footer">
        <input type="text" placeholder="Aa" className="chat-input" />
      </div>
    </div>
  );
};

export default ChatWindow;
