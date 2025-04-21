"use client";

import { FaPaperPlane } from "react-icons/fa";

const MessageInput = ({ inputMessage, setInputMessage, onSubmit }) => (
  <form onSubmit={onSubmit} className="p-3 border-t border-gray-200 bg-white">
    <div className="flex items-center">
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        placeholder="Escribe un mensaje..."
        className="text-black text-[15px] h-9 flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button
        type="submit"
        className="bg-primary text-white p-2 rounded-r-lg hover:bg-Quaternary transition-colors duration-300"
      >
        <FaPaperPlane className="w-5 h-5" />
      </button>
    </div>
  </form>
);

export default MessageInput;