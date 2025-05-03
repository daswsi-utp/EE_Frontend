const ResumenCompra = ({ productos, subtotal, impuestos, envio, total }) => {
  return (
    <div className="md:w-2/5 bg-gray-50 p-6 rounded-lg mb-6 md:mb-0">
      <h2 className="text-xl font-bold mb-4">Resumen de compra</h2>
      <div className="space-y-4 mb-6">
        {productos.map((producto) => (
          <div key={producto.id} className="flex items-center space-x-3">
            <div className="bg-gray-200 rounded-md w-12 h-12 flex-shrink-0"></div>
            <div className="flex-grow">
              <h3 className="font-medium">{producto.nombre}</h3>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Cant: {producto.cantidad}</span>
                <span>${producto.precio.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-4 space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Impuestos</span>
          <span>${impuestos.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Envío</span>
          <span>${envio.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold pt-2 border-t border-gray-200">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ResumenCompra;
