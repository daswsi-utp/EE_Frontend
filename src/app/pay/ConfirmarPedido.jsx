const ConfirmarPedido = ({
  direccion,
  metodoPago,
  subtotal,
  impuestos,
  envio,
  total,
  formularioTarjeta,
  onBack,
  onConfirm,
  cargando,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Confirmar tu pedido</h2>
      <div>
        <h3 className="text-lg font-semibold mb-2">Dirección de envío</h3>
        <p>{direccion.calle}</p>
        <p>
          {direccion.ciudad}, {direccion.codigoPostal}, {direccion.pais}
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Método de pago</h3>
        <p className="font-medium">{metodoPago === 'tarjeta' ? 'Tarjeta de crédito' : metodoPago}</p>
        {metodoPago === 'tarjeta' && (
          <p className="text-sm text-gray-600">
            Tarjeta terminada en ****-****-****-{formularioTarjeta.numero.slice(-4)}
          </p>
        )}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Resumen del pedido</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>S/. {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Impuestos:</span>
            <span>S/. {impuestos.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Envío:</span>
            <span>S/. {envio.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold pt-2 border-t border-gray-200">
            <span>Total:</span>
            <span>S/. {total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div className="mt-6 flex space-x-4">
        <button
          onClick={onBack}
          className="w-1/3 bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-medium hover:bg-gray-300 transition duration-200"
          disabled={cargando}
        >
          Atrás
        </button>
        <button
          onClick={onConfirm}
          className="w-2/3 bg-teal-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-teal-700 transition duration-200 disabled:bg-teal-400"
          disabled={cargando}
        >
          {cargando ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C4 0 0 4 0 12s4 12 12 12v-4a8 8 0 01-8-8z"
                ></path>
              </svg>
              <span>Procesando...</span>
            </div>
          ) : (
            <span>Confirmar y pagar</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ConfirmarPedido;
