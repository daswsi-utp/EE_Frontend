const InformacionPagoTunki = () => {
  return (
    <div className="py-4">
      <h3 className="text-lg font-semibold mb-2">Pagar con Tunki</h3>
      <p className="text-gray-600 mb-2">
        Realiza la transferencia a nuestra cuenta Tunki utilizando el siguiente número.
      </p>
      <div className="bg-gray-100 rounded-md p-4">
        <p className="font-medium">Número de cuenta Tunki:</p>
        <p className="text-lg">XXXXXXXXXXXXXXX</p>
      </div>
      <p className="text-sm text-gray-500 mt-2">Confirma la transferencia en tu aplicación Tunki.</p>
    </div>
  );
};

export default InformacionPagoTunki;
