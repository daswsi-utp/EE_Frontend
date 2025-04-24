'use client';

import { useState } from 'react';
import ChatSidebar from './ChatSidebar';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import CustomerInfoSidebar from './CustomerInfoSidebar';
import ChatInput from './ChatInput';
import { initialMessages } from './data';

const EcommerceSupportChat = () => {
  const [activeChat, setActiveChat] = useState('María López');
  const [messages, setMessages] = useState(initialMessages);

  const handleSendMessage = (text) => {
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        text: text,
        sender: 'me',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'Respondido',
      },
    ]);
  };

  return (
    <div className="flex bg-gray-100">
      {/* Sidebar - Chats */}
      <ChatSidebar activeChat={activeChat} setActiveChat={setActiveChat} />

      {/* Main Chat Area */}
      <div className="flex flex-col flex-1 h-[90vh] w-2/3">
        {/* Chat Header */}
        <ChatHeader />

        <div className="flex flex-1 overflow-hidden">
          {/* Chat Messages */}
          <ChatMessages messages={messages} />

          {/* Customer Information Sidebar */}
          <CustomerInfoSidebar />
        </div>

        {/* Input Area */}
        <ChatInput onSend={handleSendMessage} />
      </div>
    </div>
  );
};

export default EcommerceSupportChat;
