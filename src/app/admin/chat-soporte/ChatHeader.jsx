'use client';

import { User, ArrowLeft, Clock, MoreVertical } from 'lucide-react';
import { customerInfo } from './data';

const ChatHeader = () => {
  return (
    <div className="bg-primary-admin p-4 flex justify-between items-center h-[9vh] text-white">
      <div className="flex items-center">
        <button className="mr-2 md:hidden">
          <ArrowLeft size={20} />
        </button>
        <div className="w-8 h-8 bg-white text-primary-admin rounded-full flex items-center justify-center">
          <User size={20} />
        </div>
        <div className="ml-3">
          <div className="flex items-center">
            <h2 className="font-medium">{customerInfo.name}</h2>
            <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-800">Prioridad Alta</span>
          </div>
          <div className="flex items-center text-xs text-white">
            <span>Pedido #{customerInfo.currentOrder.orderNumber}</span>
            <span className="mx-1">•</span>
            <span>En conversación</span>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="p-2 rounded-full hover:bg-teal-300" title="Ver historial de conversaciones">
          <Clock size={20} />
        </button>
        <button className="p-2 rounded-full hover:bg-teal-300" title="Más opciones">
          <MoreVertical size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
