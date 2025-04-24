'use client';

const ChatMessages = ({ messages }) => {
  return (
    <div className="flex-1 bg-tertiary p-4 overflow-y-auto">
      <div className="space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`rounded-lg p-3 ${
                msg.sender === 'me' ? 'bg-primary-admin text-white' : 'bg-white text-black'
              }`}
            >
              <p>{msg.text}</p>
              <div className="text-right mt-1 flex justify-end items-center">
                <span className="text-xs text-gray-300 mr-1">{msg.time}</span>
                {msg.sender === 'me' && (
                  <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                  </svg>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatMessages;
