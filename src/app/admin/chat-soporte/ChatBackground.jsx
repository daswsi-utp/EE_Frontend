'use client';

import { MessageCircle } from 'lucide-react';
import React from 'react';

const ChatBackground = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-32 right-32 w-48 h-48 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-200 rounded-full opacity-30 blur-lg"></div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center space-y-6 p-8">
        <div className="relative">
          <div className="w-20 h-20 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center mb-4">
            <MessageCircle className="w-10 h-10 text-indigo-500" />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-80 animate-pulse"></div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Selecciona un chat
          </h2>
          <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
            Elige una conversación de la lista para comenzar a chatear y conectar con otros
          </p>
        </div>

        <div className="flex items-center justify-center space-x-2 mt-8">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default ChatBackground;
