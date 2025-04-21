"use client";

import { FaCommentDots } from "react-icons/fa";

const ChatButton = ({ toggleChat }) => (
  <button
    onClick={toggleChat}
    className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white shadow-lg hover:bg-Quaternary transition-colors duration-300"
    aria-label="Abrir chat"
  >
    <FaCommentDots className="w-8 h-8" />
  </button>
);

export default ChatButton;
