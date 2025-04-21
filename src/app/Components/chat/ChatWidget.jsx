"use client";

import { useState } from "react";
import ChatButton from "./ChatButton";
import ChatHeader from "./ChatHeader";
import ChatForm from "./ChatForm";
import ChatMessages from "./ChatMessages";
import MessageInput from "./MessageInput";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "¡Hola! ¿En qué podemos ayudarte hoy?", sender: "bot" },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setIsSubmittingEmail(true);
    setTimeout(() => {
      setIsAuthenticated(true);
      setIsSubmittingEmail(false);
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: `¡Hola ${name}! Bienvenido/a a nuestro chat de soporte de Verde Raíz. ¿Cómo podemos ayudarte?`,
          sender: "bot",
        },
      ]);
    }, 1000);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessages = [
      ...messages,
      { id: messages.length + 1, text: inputMessage, sender: "user" },
    ];

    setMessages(newMessages);
    setInputMessage("");

    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          id: newMessages.length + 1,
          text: "Gracias por tu mensaje. Nuestro equipo está revisando tu consulta y te responderemos a la brevedad.",
          sender: "bot",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <ChatButton toggleChat={toggleChat} />
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl/20 overflow-hidden flex flex-col text-[15px]">
          <ChatHeader toggleChat={toggleChat} />
          <div className="flex-1 max-h-96 bg-tertiary">
            {!isAuthenticated ? (
              <ChatForm
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                isSubmitting={isSubmittingEmail}
                onSubmit={handleEmailSubmit}
              />
            ) : (
              <ChatMessages messages={messages} />
            )}
          </div>
          {isAuthenticated && (
            <MessageInput
              inputMessage={inputMessage}
              setInputMessage={setInputMessage}
              onSubmit={sendMessage}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
