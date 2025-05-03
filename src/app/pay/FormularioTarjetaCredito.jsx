import { useState } from 'react';

const FormularioTarjetaCredito = ({ formularioTarjeta: initialTarjeta, onTarjetaChange }) => {
  const [formularioTarjeta, setFormularioTarjeta] = useState(initialTarjeta);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormularioTarjeta({ ...formularioTarjeta, [name]: value });
    onTarjetaChange({ ...formularioTarjeta, [name]: value });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-2">Detalles de la tarjeta de crédito</h3>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Número de tarjeta</label>
        <input
          type="text"
          name="numero"
          value={formularioTarjeta.numero}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          placeholder="Número de tarjeta"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre en la tarjeta</label>
        <input
          type="text"
          name="nombre"
          value={formularioTarjeta.nombre}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          placeholder="Nombre tal como aparece en la tarjeta"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de expiración</label>
          <input
            type="text"
            name="fechaExp"
            value={formularioTarjeta.fechaExp}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
            placeholder="MM/AA"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
          <input
            type="text"
            name="cvv"
            value={formularioTarjeta.cvv}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
            placeholder="CVV"
          />
        </div>
      </div>
    </div>
  );
};

export default FormularioTarjetaCredito;
