"use client";
import { FaTimesCircle } from "react-icons/fa";

const ChatHeader = ({ toggleChat }) => (
  <div className="bg-primary p-4 text-white flex justify-between items-center">
    <h3 className="font-semibold">Chat de Soporte</h3>
    <button
      onClick={toggleChat}
      className="text-white hover:text-tertiary"
      aria-label="Cerrar chat"
    >
      <FaTimesCircle className="w-5 h-5" />
    </button>
  </div>
);

export default ChatHeader;
