"use client";

const ChatForm = ({
  name,
  setName,
  email,
  setEmail,
  isSubmitting,
  onSubmit,
}) => (
  <div className="p-6">
    <h4 className="text-lg font-medium text-text mb-4">
      Para iniciar el chat, por favor ingresa tus datos:
    </h4>
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-text mb-1"
        >
          Nombre
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-black w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Tu nombre"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-text mb-1"
        >
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-black w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="tu@email.com"
          required
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary font-[600] text-white py-2 px-4 rounded hover:bg-Quaternary transition-colors duration-300 disabled:opacity-70"
      >
        {isSubmitting ? "Iniciando..." : "Iniciar Chat"}
      </button>
    </form>
  </div>
);

export default ChatForm;
