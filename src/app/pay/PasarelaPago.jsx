'use client';
import ProgressBar from './ProgressBar';
import ResumenCompra from './ResumenCompra';
import FormularioDireccion from './FormularioDireccion';
import SelectorMetodoPago from './SelectorMetodoPago';
import FormularioTarjetaCredito from './FormularioTarjetaCredito';
import InformacionPagoYape from './InformacionPagoYape';
import InformacionPagoPlin from './InformacionPagoPlin';
import InformacionPagoTunki from './InformacionPagoTunki';
import InformacionPagoBancaMovil from './InformacionPagoBancaMovil';
import InformacionPagoPaypal from './InformacionPagoPaypal';
import ConfirmarPedido from './ConfirmarPedido';
import MensajeExitoPago from './MensajeExitoPago';
import { useState } from 'react';

const PasarelaPago = () => {
  const [paso, setPaso] = useState(1);
  const [metodoPago, setMetodoPago] = useState('yape');
  const [formularioTarjeta, setFormularioTarjeta] = useState({ numero: '', nombre: '', fechaExp: '', cvv: '' });
  const [direccion, setDireccion] = useState({ calle: '', ciudad: '', codigoPostal: '', pais: '' });
  const [cargando, setCargando] = useState(false);
  const [exito, setExito] = useState(false);

  const productosDePrueba = [
    { id: 1, nombre: 'Camiseta Premium', precio: 29.99, cantidad: 2 },
    { id: 2, nombre: 'Zapatillas Deportivas', precio: 89.99, cantidad: 1 },
  ];

  const subtotal = productosDePrueba.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  const impuestos = subtotal * 0.16;
  const envio = 4.99;
  const total = subtotal + impuestos + envio;

  const handleCambioPaso = (nuevoPaso) => {
    setPaso(nuevoPaso);
  };

  const handleCambioMetodoPago = (metodo) => {
    setMetodoPago(metodo);
  };

  const handleInputTarjeta = (data) => {
    setFormularioTarjeta(data);
  };

  const handleInputDireccion = (data) => {
    setDireccion(data);
  };

  const procesarPago = (e) => {
    e.preventDefault();
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
      setExito(true);
    }, 2000);
  };

  if (exito) {
    return <MensajeExitoPago />;
  }

  return (
    <div className="fixed inset-0 bg-white min-h-screen">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col h-full">
          <ProgressBar paso={paso} onPasoChange={handleCambioPaso} />

          <div className="md:flex md:gap-8">
            <ResumenCompra
              productos={productosDePrueba}
              subtotal={subtotal}
              impuestos={impuestos}
              envio={envio}
              total={total}
            />

            <div className="md:w-3/5 bg-white p-6 rounded-lg shadow-sm">
              {paso === 1 && (
                <FormularioDireccion
                  direccion={direccion}
                  onDireccionChange={handleInputDireccion}
                  onNext={() => handleCambioPaso(2)}
                />
              )}

              {paso === 2 && (
                <div className="space-y-4">
                  <SelectorMetodoPago metodoPago={metodoPago} onMetodoPagoChange={handleCambioMetodoPago} />
                  {metodoPago === 'tarjeta' && (
                    <FormularioTarjetaCredito
                      formularioTarjeta={formularioTarjeta}
                      onTarjetaChange={handleInputTarjeta}
                    />
                  )}
                  {metodoPago === 'yape' && <InformacionPagoYape />}
                  {metodoPago === 'plin' && <InformacionPagoPlin />}
                  {metodoPago === 'tunki' && <InformacionPagoTunki />}
                  {metodoPago === 'bancaMovil' && <InformacionPagoBancaMovil />}
                  {metodoPago === 'paypal' && <InformacionPagoPaypal />}
                  <div className="mt-6 flex space-x-4">
                    <button
                      onClick={() => handleCambioPaso(1)}
                      className="w-1/3 bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-medium hover:bg-gray-300 transition duration-200"
                    >
                      Atrás
                    </button>
                    <button
                      onClick={() => handleCambioPaso(3)}
                      className="w-2/3 bg-teal-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-teal-700 transition duration-200"
                    >
                      Continuar
                    </button>
                  </div>
                </div>
              )}

              {paso === 3 && (
                <ConfirmarPedido
                  direccion={direccion}
                  metodoPago={metodoPago}
                  subtotal={subtotal}
                  impuestos={impuestos}
                  envio={envio}
                  total={total}
                  formularioTarjeta={formularioTarjeta}
                  onBack={() => handleCambioPaso(2)}
                  onConfirm={procesarPago}
                  cargando={cargando}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasarelaPago;
