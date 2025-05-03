const InformacionPagoPaypal = () => {
  return (
    <div className="py-4">
      <h3 className="text-lg font-semibold mb-2">Pagar con PayPal</h3>
      <p className="text-gray-600 mb-2">Serás redirigido a la página segura de PayPal para completar tu pago.</p>
      <div className="bg-gray-100 rounded-md p-4 flex justify-center">
        <button className="bg-yellow-400 text-white py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-200">
          Ir a PayPal
        </button>
      </div>
      <p className="text-sm text-gray-500 mt-2">Tu información de pago está segura con PayPal.</p>
    </div>
  );
};

export default InformacionPagoPaypal;
