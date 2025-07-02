'use client';
import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, Package, X } from 'lucide-react'; // Import X icon
import Link from 'next/link'; // Import Link for navigation
import { pdf } from '@react-pdf/renderer';
import ActiveOrderCard from './ActiveOrderCard';
import DeliveredOrdersTable from './DeliveredOrdersTable';
import RootGreenReceipt from './RootGreenReceipt';
import simulatedOrders from './simulatedOrders';

const OrdersPage = () => {
  const [orders, setOrders] = useState(simulatedOrders);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Actualizar el tiempo cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Función para descargar PDF (real)
  const downloadPDF = async (order) => {
    const blob = await pdf(<RootGreenReceipt order={order} />).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `boleta_${order.seriesNumber}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Separar pedidos activos y entregados
  const activeOrders = orders.filter((order) => order.estate !== 'Entregado');
  const deliveredOrders = orders
    .filter((order) => order.estate === 'Entregado')
    .sort((a, b) => new Date(b.issuedAt) - new Date(a.issuedAt));

  // Mensaje si no hay pedidos
  const NoOrdersMessage = () => (
    <div className="text-center py-12">
      <Package className="w-16 h-16 mx-auto text-gray-400 mb-4" />
      <h3 className="text-xl font-medium text-gray-900 mb-2">No tienes pedidos aún</h3>
      <p className="text-gray-600">Cuando realices tu primera compra, aparecerá aquí.</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 relative py-10 pb-15">
      <div className="max-w-7xl mx-auto">
        <div className="absolute top-6 right-6">
          <Link href="/products" passHref>
            <button
              className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors cursor-pointer"
              aria-label="Cerrar y volver a productos"
            >
              <X className="w-6 h-6" />
            </button>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mis Pedidos</h1>
          <p className="text-gray-600 mt-2">
            Bienvenido {orders[0]?.customer.firstName}, aquí puedes ver el estado de tus pedidos
          </p>
        </div>

        {/* Pedidos Activos */}
        {activeOrders.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <Clock className="w-6 h-6 mr-2 text-teal-500" />
              Pedidos en Curso
            </h2>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              {activeOrders.map((order) => (
                <ActiveOrderCard key={order.seriesNumber} order={order} onDownloadPDF={downloadPDF} />
              ))}
            </div>
          </div>
        )}

        {/* Tabla de Pedidos Entregados */}
        {deliveredOrders.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
              Pedidos Entregados
            </h2>
            <DeliveredOrdersTable orders={deliveredOrders} onDownloadPDF={downloadPDF} />
          </div>
        )}

        {/* Mensaje si no hay pedidos */}
        {orders.length === 0 && <NoOrdersMessage />}
      </div>
    </div>
  );
};

export default OrdersPage;
