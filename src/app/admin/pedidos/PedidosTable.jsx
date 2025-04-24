import { Eye, Download } from 'lucide-react';
import StatusIcon from './StatusIcon';
import { formatStatus } from './formatUtils';

const PedidosTable = ({ filteredPedidos, totalPedidos }) => {
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
                Cliente
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Fecha
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Total
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Items
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
            {filteredPedidos.length > 0 ? (
              filteredPedidos.map((pedido) => (
                <tr key={pedido.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-teal-600">{pedido.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{pedido.cliente}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{pedido.fecha}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">S/. {pedido.total.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{pedido.items}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <StatusIcon status={pedido.status} />
                      <span className="ml-2 text-sm text-gray-700">{formatStatus(pedido.status)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-teal-600 hover:text-teal-800">
                        <Eye className="h-5 w-5" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <Download className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-6 py-4 text-center text-sm text-gray-500">
                  No se encontraron pedidos con los filtros actuales
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Mostrando <span className="font-medium">{filteredPedidos.length}</span> de{' '}
            <span className="font-medium">{totalPedidos}</span> pedidos
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

export default PedidosTable;
