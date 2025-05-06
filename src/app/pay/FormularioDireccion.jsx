import { useState } from 'react';

const FormularioDireccion = ({ direccion: initialDireccion = {}, onDireccionChange = () => {}, onNext = () => {} }) => {
  // Valores iniciales para evitar errores de campos undefined
  const valoresIniciales = {
    nombreCompleto: '',
    calle: '',
    distrito: '',
    provincia: '',
    region: 'Lima',
    codigoPostal: '',
    telefono: '',
    ...initialDireccion,
  };

  const [direccion, setDireccion] = useState(valoresIniciales);
  const [errores, setErrores] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDireccion({ ...direccion, [name]: value });
    onDireccionChange({ ...direccion, [name]: value });

    // Validar campo cuando cambia
    validarCampo(name, value);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    validarCampo(name, direccion[name]);
  };

  const validarCampo = (name, value) => {
    let nuevoError = '';

    if (!value || value.trim() === '') {
      nuevoError = 'Este campo es obligatorio';
    } else if (name === 'codigoPostal' && value.length > 0 && !/^\d{5}$/.test(value)) {
      // En Perú el código postal es opcional pero si se proporciona debe tener 5 dígitos
      nuevoError = 'El código postal debe tener 5 dígitos';
    } else if (name === 'telefono' && !/^9\d{8}$/.test(value)) {
      nuevoError = 'El teléfono móvil debe comenzar con 9 y tener 9 dígitos';
    }

    setErrores((prev) => ({ ...prev, [name]: nuevoError }));
    return !nuevoError;
  };

  const validarFormulario = () => {
    const camposObligatorios = ['nombreCompleto', 'calle', 'distrito', 'provincia', 'region', 'telefono'];
    let formValido = true;
    let nuevosTouched = {};

    camposObligatorios.forEach((campo) => {
      nuevosTouched[campo] = true;
      const esValido = validarCampo(campo, direccion[campo]);
      if (!esValido) formValido = false;
    });

    setTouched(nuevosTouched);
    return formValido;
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (validarFormulario()) {
      onNext();
    } else {
      //para las pruebas
      onNext();
    }
  };

  // El formulario está específico para Perú
  const regiones = [
    'Amazonas',
    'Áncash',
    'Apurímac',
    'Arequipa',
    'Ayacucho',
    'Cajamarca',
    'Callao',
    'Cusco',
    'Huancavelica',
    'Huánuco',
    'Ica',
    'Junín',
    'La Libertad',
    'Lambayeque',
    'Lima',
    'Lima Metropolitana',
    'Loreto',
    'Madre de Dios',
    'Moquegua',
    'Pasco',
    'Piura',
    'Puno',
    'San Martín',
    'Tacna',
    'Tumbes',
    'Ucayali',
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Dirección de envío - Perú</h2>

      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-6">
          {/* Nombre completo */}
          <div>
            <label htmlFor="nombreCompleto" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre completo <span className="text-red-500">*</span>
            </label>
            <input
              id="nombreCompleto"
              type="text"
              name="nombreCompleto"
              value={direccion.nombreCompleto}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border ${
                errores.nombreCompleto && touched.nombreCompleto ? 'border-red-500' : 'border-gray-300'
              } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600`}
              placeholder="Nombre y apellidos"
            />
            {errores.nombreCompleto && touched.nombreCompleto && (
              <p className="mt-1 text-sm text-red-500">{errores.nombreCompleto}</p>
            )}
          </div>

          {/* Teléfono */}
          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
              Celular <span className="text-red-500">*</span>
            </label>
            <input
              id="telefono"
              type="tel"
              name="telefono"
              value={direccion.telefono}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border ${
                errores.telefono && touched.telefono ? 'border-red-500' : 'border-gray-300'
              } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600`}
              placeholder="9 dígitos (empieza con 9)"
            />
            {errores.telefono && touched.telefono && <p className="mt-1 text-sm text-red-500">{errores.telefono}</p>}
          </div>

          {/* Dirección */}
          <div>
            <label htmlFor="calle" className="block text-sm font-medium text-gray-700 mb-1">
              Dirección <span className="text-red-500">*</span>
            </label>
            <input
              id="calle"
              type="text"
              name="calle"
              value={direccion.calle}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border ${
                errores.calle && touched.calle ? 'border-red-500' : 'border-gray-300'
              } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600`}
              placeholder="Av./Jr./Calle, número, interior, urbanización"
            />
            {errores.calle && touched.calle && <p className="mt-1 text-sm text-red-500">{errores.calle}</p>}
          </div>

          {/* Region y Provincia */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
                Región <span className="text-red-500">*</span>
              </label>
              <select
                id="region"
                name="region"
                value={direccion.region}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full border ${
                  errores.region && touched.region ? 'border-red-500' : 'border-gray-300'
                } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white`}
              >
                <option value="" disabled>
                  Selecciona una región
                </option>
                {regiones.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
              {errores.region && touched.region && <p className="mt-1 text-sm text-red-500">{errores.region}</p>}
            </div>

            <div>
              <label htmlFor="provincia" className="block text-sm font-medium text-gray-700 mb-1">
                Provincia <span className="text-red-500">*</span>
              </label>
              <input
                id="provincia"
                type="text"
                name="provincia"
                value={direccion.provincia}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full border ${
                  errores.provincia && touched.provincia ? 'border-red-500' : 'border-gray-300'
                } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600`}
                placeholder="Provincia"
              />
              {errores.provincia && touched.provincia && (
                <p className="mt-1 text-sm text-red-500">{errores.provincia}</p>
              )}
            </div>
          </div>

          {/* Distrito y Codigo Postal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="distrito" className="block text-sm font-medium text-gray-700 mb-1">
                Distrito <span className="text-red-500">*</span>
              </label>
              <input
                id="distrito"
                type="text"
                name="distrito"
                value={direccion.distrito}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full border ${
                  errores.distrito && touched.distrito ? 'border-red-500' : 'border-gray-300'
                } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600`}
                placeholder="Distrito"
              />
              {errores.distrito && touched.distrito && <p className="mt-1 text-sm text-red-500">{errores.distrito}</p>}
            </div>
            <div>
              <label htmlFor="codigoPostal" className="block text-sm font-medium text-gray-700 mb-1">
                Código postal
              </label>
              <input
                id="codigoPostal"
                type="text"
                name="codigoPostal"
                value={direccion.codigoPostal}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full border ${
                  errores.codigoPostal && touched.codigoPostal ? 'border-red-500' : 'border-gray-300'
                } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600`}
                placeholder="5 dígitos (opcional)"
              />
              {errores.codigoPostal && touched.codigoPostal && (
                <p className="mt-1 text-sm text-red-500">{errores.codigoPostal}</p>
              )}
            </div>
          </div>
        </div>

        <div className="pt-4 mt-6 border-t flex justify-between items-center">
          <p className="text-sm text-gray-500 mb-4">
            Los campos marcados con <span className="text-red-500">*</span> son obligatorios
          </p>
          <button
            onClick={handleSubmit}
            className="cursor-pointer w-fit bg-teal-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-teal-700 transition duration-200 flex items-center justify-center"
          >
            Continuar al pago
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormularioDireccion;
