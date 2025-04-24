'use client';

import { User, ShoppingBag } from 'lucide-react';
import { allChats, getPriorityColor, getStatusBadge } from './data';

const ChatSidebar = ({ activeChat, setActiveChat }) => {
  return (
    <div className="border-r bg-tertiary flex flex-col overflow-y-auto h-[90vh] w-[25vw]">
      <div className="bg-primary-admin p-4 flex justify-between items-center h-[9vh]">
        <div className="flex items-center text-white">
          <ShoppingBag size={20} className="mr-2" />
          <h1 className="text-xl font-bold">Soporte Tienda</h1>
        </div>
      </div>

      <div className="p-4">
        <input
          type="text"
          className="w-full p-2 text-[14px] border rounded-lg bg-gray-50"
          placeholder="Buscar conversación por cliente o #pedido"
        />
      </div>

      <div className="flex p-2 space-x-2 bg-gray-50 py-3">
        <button className="px-3 py-1 text-sm rounded-full bg-primary-admin text-white">Todos</button>
        <button className="px-3 py-1 text-sm rounded-full bg-white border">Sin asignar</button>
        <button className="px-3 py-1 text-sm rounded-full bg-white border">Mis tickets</button>
      </div>

      <div className="overflow-y-auto flex-1">
        {allChats.map((chat, index) => (
          <div
            key={index}
            className={`flex items-center p-3 hover:bg-gray-50 cursor-pointer ${
              chat.name === activeChat ? 'bg-teal-50 border-l-4 border-teal-500' : ''
            }`}
            onClick={() => setActiveChat(chat.name)}
          >
            <div className="w-12 h-12 bg-primary-admin rounded-full flex items-center justify-center relative">
              <User size={24} className="text-white" />
              <div
                className={`absolute bottom-0 right-0 w-3 h-3 ${getPriorityColor(
                  chat.priority
                )} rounded-full border-2 border-white`}
              ></div>
            </div>
            <div className="ml-3 flex-1">
              <div className="flex justify-between items-center">
                <span className="font-medium">{chat.name}</span>
                <span className="text-xs text-gray-500">{chat.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600 truncate">{chat.issue}</p>
                {chat.unread > 0 && (
                  <span className="bg-teal-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {chat.unread}
                  </span>
                )}
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusBadge(chat.status)}`}>{chat.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
