import React from 'react';
import { CheckCircle, Calendar, User, MapPin, Download, Package } from 'lucide-react';

const DeliveredOrdersTable = ({ orders, onDownloadPDF }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-teal-500 text-white">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium">Número de Serie</th>
              <th className="px-6 py-4 text-left text-sm font-medium">Fecha</th>
              <th className="px-6 py-4 text-left text-sm font-medium">Cliente</th>
              <th className="px-6 py-4 text-left text-sm font-medium">Dirección</th>
              <th className="px-6 py-4 text-left text-sm font-medium">Productos</th>
              <th className="px-6 py-4 text-left text-sm font-medium">Total</th>
              <th className="px-6 py-4 text-left text-sm font-medium">Estado</th>
              <th className="px-6 py-4 text-left text-sm font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.seriesNumber} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.seriesNumber}</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-teal-500" />
                    {new Date(order.issuedAt).toLocaleDateString('es-PE')}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2 text-teal-500" />
                    {order.customer.firstName} {order.customer.lastName}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-teal-500" />
                    {order.shippingAddress}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Package className="w-4 h-4 mr-2 text-teal-500" />
                    {order.details.length}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-teal-600">S/ {order.totalAmount.toFixed(2)}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {order.estate}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => onDownloadPDF(order)}
                    className="flex items-center px-3 py-2 text-sm bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
                  >
                    <Download className="w-4 h-4 mr-1" />
                    PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliveredOrdersTable;
