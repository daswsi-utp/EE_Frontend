const ResumenCompra = ({ productos, subtotal, impuestos, envio, total }) => {
  return (
    <div className="md:w-2/5 bg-gray-50 p-6 rounded-lg mb-6 md:mb-0">
      <h2 className="text-xl font-bold mb-4">Resumen de compra</h2>
      <div className="space-y-4 mb-6 h-[38vh] overflow-y-auto pr-4 ">
        {productos.map((producto) => (
          <div key={producto.id} className="flex items-center space-x-3">
            <img src={producto.image} className="bg-gray-200 rounded-md w-12 h-12 flex-shrink-0" />
            <div className="flex-grow">
              <h3 className="font-medium">{producto.name}</h3>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Cant: {producto.quantity}</span>
                <span>S/. {producto.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-4 space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>S/. {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Impuestos</span>
          <span>S/. {impuestos.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Envío</span>
          <span>S/. {envio.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold pt-2 border-t border-gray-200">
          <span>Total</span>
          <span>S/. {total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ResumenCompra;
