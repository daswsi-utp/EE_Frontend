const InformacionPagoYape = () => {
  return (
    <div className="py-4">
      <h3 className="text-lg font-semibold mb-2">Pagar con Yape</h3>
      <p className="text-gray-600 mb-2">
        Escanea el siguiente código QR con tu aplicación Yape o ingresa el número de celular asociado.
      </p>
      <div className="bg-gray-100 rounded-md p-4 flex justify-center">
        {/* Aquí iría el código QR dinámico o una imagen estática */}
        <div className="w-32 h-32 bg-gray-300 rounded-md flex items-center justify-center">
          <span className="text-sm text-gray-500">QR Yape</span>
        </div>
      </div>
      <p className="text-center text-sm text-gray-500 mt-2">Número de celular: 9XXXXXXXX</p>
    </div>
  );
};

export default InformacionPagoYape;
