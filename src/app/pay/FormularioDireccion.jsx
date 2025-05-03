import { useState } from 'react';

const FormularioDireccion = ({ direccion: initialDireccion, onDireccionChange, onNext }) => {
  const [direccion, setDireccion] = useState(initialDireccion);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDireccion({ ...direccion, [name]: value });
    onDireccionChange({ ...direccion, [name]: value });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Dirección de envío</h2>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
            placeholder="Nombre y apellidos"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
          <input
            type="text"
            name="calle"
            value={direccion.calle}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
            placeholder="Calle, número, interior"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad</label>
            <input
              type="text"
              name="ciudad"
              value={direccion.ciudad}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Ciudad"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Código postal</label>
            <input
              type="text"
              name="codigoPostal"
              value={direccion.codigoPostal}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Código postal"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">País</label>
          <select
            name="pais"
            value={direccion.pais}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          >
            <option value="">Selecciona un país</option>
            <option value="ES">España</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CL">Chile</option>
          </select>
        </div>
      </div>
      <div className="mt-6">
        <button
          onClick={onNext}
          className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-teal-700 transition duration-200"
        >
          Continuar al pago
        </button>
      </div>
    </div>
  );
};

export default FormularioDireccion;
