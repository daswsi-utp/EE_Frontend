'use client';

import { useState } from 'react';
import { PaperclipIcon, SmileIcon, SendHorizontal } from 'lucide-react';
import { quickResponses } from './data';

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const applyQuickResponse = (response) => {
    setMessage(response);
  };

  return (
    <>
      {/* Quick Responses */}
      <div className="bg-white border-t border-b px-4 py-2 flex items-center overflow-x-auto">
        <span className="text-sm font-medium text-gray-600 mr-2 flex-shrink-0">Respuestas rápidas:</span>
        {quickResponses.map((response, index) => (
          <button
            key={index}
            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm mr-2 whitespace-nowrap"
            onClick={() => applyQuickResponse(response)}
          >
            {response.length > 30 ? response.substring(0, 30) + '...' : response}
          </button>
        ))}
      </div>

      {/* Message Input */}
      <div className="bg-tertiary p-3 flex items-center">
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
          <PaperclipIcon size={20} />
        </button>
        <div className="flex-1 relative">
          <textarea
            className="w-full border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 bg-white focus:ring-primary-admin min-h-[44px] max-h-[120px] resize-none"
            placeholder="Escribe un mensaje aquí..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            rows={1}
          />
          <button className="absolute right-2 bottom-2 p-1 text-gray-500 hover:bg-gray-100 rounded-full">
            <SmileIcon size={18} />
          </button>
        </div>
        <button
          className="ml-2 p-2 bg-teal-50 rounded-full hover:bg-teal-300 text-black flex items-center justify-center"
          onClick={handleSend}
        >
          <SendHorizontal size={20} />
        </button>
      </div>
    </>
  );
};

export default ChatInput;
