const InformacionPagoBancaMovil = () => {
  return (
    <div className="py-4">
      <h3 className="text-lg font-semibold mb-2">Pago por Banca Móvil</h3>
      <p className="text-gray-600 mb-2">
        Realiza una transferencia bancaria móvil a nuestra cuenta. Utiliza los siguientes datos:
      </p>
      <div className="bg-gray-100 rounded-md p-4 space-y-2">
        <div>
          <p className="font-medium">Banco:</p>
          <p>Banco de Crédito del Perú (BCP)</p>
        </div>
        <div>
          <p className="font-medium">Número de Cuenta:</p>
          <p>XXXXXXXXXXXXXXX</p>
        </div>
        <div>
          <p className="font-medium">CCI (Código de Cuenta Interbancario):</p>
          <p>XXXXXXXXXXXXXXXXXXXXX</p>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-2">Envíanos el comprobante de la transferencia para confirmar tu pago.</p>
    </div>
  );
};

export default InformacionPagoBancaMovil;
