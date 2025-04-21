"use client";

import { useEffect, useRef } from "react";

const ChatMessages = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="p-4 overflow-y-auto h-80">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-3/4 p-3 rounded-lg ${
              msg.sender === "user"
                ? "bg-primary text-white rounded-br-none"
                : "bg-gray-100 text-text rounded-bl-none"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;