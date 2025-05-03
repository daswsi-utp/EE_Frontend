const SelectorMetodoPago = ({ metodoPago, onMetodoPagoChange }) => {
  return (
    <div className="grid grid-cols-2 gap-3 mb-4">
      <button
        className={`flex items-center justify-center py-3 px-2 border rounded-lg ${
          metodoPago === 'tarjeta' ? 'border-teal-600 bg-teal-50' : 'border-gray-300'
        }`}
        onClick={() => onMetodoPagoChange('tarjeta')}
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          ></path>
        </svg>
        <span className="font-medium">Tarjeta</span>
      </button>
      <button
        className={`flex items-center justify-center py-3 px-2 border rounded-lg ${
          metodoPago === 'yape' ? 'border-teal-600 bg-teal-50' : 'border-gray-300'
        }`}
        onClick={() => onMetodoPagoChange('yape')}
      >
        <div className="w-5 h-5 mr-2 bg-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">Y</span>
        </div>
        <span className="font-medium">Yape</span>
      </button>
      <button
        className={`flex items-center justify-center py-3 px-2 border rounded-lg ${
          metodoPago === 'plin' ? 'border-teal-600 bg-teal-50' : 'border-gray-300'
        }`}
        onClick={() => onMetodoPagoChange('plin')}
      >
        <div className="w-5 h-5 mr-2 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">P</span>
        </div>
        <span className="font-medium">Plin</span>
      </button>
      <button
        className={`flex items-center justify-center py-3 px-2 border rounded-lg ${
          metodoPago === 'tunki' ? 'border-teal-600 bg-teal-50' : 'border-gray-300'
        }`}
        onClick={() => onMetodoPagoChange('tunki')}
      >
        <div className="w-5 h-5 mr-2 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">T</span>
        </div>
        <span className="font-medium">Tunki</span>
      </button>
      <button
        className={`flex items-center justify-center py-3 px-2 border rounded-lg ${
          metodoPago === 'bancaMovil' ? 'border-teal-600 bg-teal-50' : 'border-gray-300'
        }`}
        onClick={() => onMetodoPagoChange('bancaMovil')}
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 9l3 3-3 3m5 0h3m-9-3h3m-1 4l-3-3m3 3l3-3m5 5l-3-3m3 3l-3 3"
          ></path>
        </svg>
        <span className="font-medium">Banca Móvil</span>
      </button>
      <button
        className={`flex items-center justify-center py-3 px-2 border rounded-lg ${
          metodoPago === 'paypal' ? 'border-teal-600 bg-teal-50' : 'border-gray-300'
        }`}
        onClick={() => onMetodoPagoChange('paypal')}
      >
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#00457C">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 2a10 10 0 00-7.9 16.08c-.14.03-.28.05-.42.05-.83 0-1.5-.67-1.5-1.5 0-.09.01-.18.02-.27A9.91 9.91 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10a9.91 9.91 0 01-2.08 6.28c.01.09.02.18.02.27 0 .83-.67 1.5-1.5 1.5-.14 0-.28-.02-.42-.05A10 10 0 0012 2zm6.4 13.6a.8.8 0 01-.7.4H6.3a.8.8 0 01-.7-.4.6.6 0 01.2-.8l// components/pago/SelectorMetodoPago.js (continuación)
          4.6 0 01.7.4.6.6 0 01-.2.8zM17.8 10c-.2-.7-1-1.2-1.8-1-.6.2-.8.9-.6 1.6.2.7 1 1.2 1.8 1 .6-.2.8-.9.6-1.6zm-5.6 3.6a.8.8 0 01-.7.4H6.3a.8.8 0 01-.7-.4.6.6 0 01.2-.8l4.6-4.6a.6.6 0 01.8 0l4.6 4.6a.6.6 0 01-.2.8zm5.6-3.6c-.2-.7-1-1.2-1.8-1-.6.2-.8.9-.6 1.6.2.7 1 1.2 1.8 1 .6-.2.8-.9.6-1.6z"
          />
        </svg>
        <span className="font-medium">PayPal</span>
      </button>
    </div>
  );
};

export default SelectorMetodoPago;
