// src/components/ChatList.js
import React, { useEffect, useState } from "react";
import UserChat from "./UserChat";
import "./ChatPopup.css"; // optional, for styling
import axios from "axios";
import apiList from "../lib/apiList";
import { userType } from "../lib/isAuth";

const ChatPopup = ({ setOpenMessage, openMessage, setOpenListMessage }) => {
  const [users, setUsers] = useState(); // replace with actual user dataq

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await axios.get(apiList.chats, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }); // fetch user data from API
      console.log(res.data);
      setUsers([
        {
          name: userType() === "recruiter" ? "CEO" : "Quang" ,
          lastMessage: res.data?.pop(),
          timestamp: "1 giờ",
          avatar: "path/to/avatar2.jpg",
        },
      ]);
    };
    fetchMessages();
  }, []);
  return (
    <div className="chat-list">
      {users &&
        users.map((user, index) => (
          <UserChat
            key={index}
            user={user}
            setOpenMessage={setOpenMessage}
            openMessage={openMessage}
            setOpenListMessage={setOpenListMessage}
          />
        ))}
    </div>
  );
};

export default ChatPopup;
