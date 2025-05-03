const InformacionPagoPlin = () => {
  return (
    <div className="py-4">
      <h3 className="text-lg font-semibold mb-2">Pagar con Plin</h3>
      <p className="text-gray-600 mb-2">Transfiere el monto total a nuestro número de celular asociado a Plin.</p>
      <div className="bg-gray-100 rounded-md p-4">
        <p className="font-medium">Número de celular Plin:</p>
        <p className="text-lg">9XXXXXXXX</p>
      </div>
      <p className="text-sm text-gray-500 mt-2">Asegúrate de realizar la transferencia desde tu aplicación Plin.</p>
    </div>
  );
};

export default InformacionPagoPlin;
