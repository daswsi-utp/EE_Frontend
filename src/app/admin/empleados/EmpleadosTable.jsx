import { Eye, Edit, MailOpen, Phone, Calendar } from 'lucide-react';
import EstadoEmpleadoIndicator from './EstadoEmpleadoIndicator';

const EmpleadosTable = ({ filteredEmpleados, totalEmpleados }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Empleado
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Contacto
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Departamento
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Puesto
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Contratación
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Salario
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Estado
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredEmpleados.length > 0 ? (
              filteredEmpleados.map((empleado) => (
                <tr key={empleado.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-teal-600">{empleado.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{empleado.nombre}</div>
                    <div className="text-sm text-gray-500">{empleado.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button className="text-blue-500 hover:text-blue-700">
                        <MailOpen className="h-5 w-5" />
                      </button>
                      <button className="text-green-500 hover:text-green-700">
                        <Phone className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{empleado.departamento}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{empleado.puesto}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{empleado.fechaContratacion}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    S/. {empleado.salario.toLocaleString('es-ES')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <EstadoEmpleadoIndicator estado={empleado.estado} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-teal-600 hover:text-teal-800">
                        <Eye className="h-5 w-5" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <Edit className="h-5 w-5" />
                      </button>
                      <button className="text-yellow-600 hover:text-yellow-800">
                        <Calendar className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="px-6 py-4 text-center text-sm text-gray-500">
                  No se encontraron empleados con los filtros actuales
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Mostrando <span className="font-medium">{filteredEmpleados.length}</span> de{' '}
            <span className="font-medium">{totalEmpleados}</span> empleados
          </div>
          <div className="flex space-x-2">
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-50">
              Anterior
            </button>
            <button className="bg-teal-600 text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-teal-700">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpleadosTable;
