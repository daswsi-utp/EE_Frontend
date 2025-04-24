'use client';

import { Package, CreditCard, HelpCircle } from 'lucide-react';
import { customerInfo } from './data';

const CustomerInfoSidebar = () => {
  return (
    <div className="bg-tertiary p-4 border-l overflow-y-auto hidden md:block">
      <h3 className="font-medium text-lg border-b pb-2">Información del Cliente</h3>

      <div className="mt-3">
        <h4 className="text-sm font-medium text-gray-500">CONTACTO</h4>
        <p className="text-sm mt-1">{customerInfo.email}</p>
        <p className="text-sm">{customerInfo.phone}</p>
      </div>

      <div className="mt-3">
        <h4 className="text-sm font-medium text-gray-500">CLIENTE DESDE</h4>
        <p className="text-sm mt-1">{customerInfo.customerSince}</p>
        <p className="text-sm">{customerInfo.totalOrders} pedidos totales</p>
        <p className="text-sm">Última compra: {customerInfo.lastPurchase}</p>
      </div>

      <div className="mt-4">
        <h4 className="text-base font-medium border-b pb-2 flex items-center">
          <Package size={16} className="mr-1" />
          Pedido Actual
        </h4>
        <div className="mt-2">
          <div className="flex justify-between text-sm">
            <span>Número:</span>
            <span className="font-medium">{customerInfo.currentOrder.orderNumber}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Fecha:</span>
            <span>{customerInfo.currentOrder.date}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Estado:</span>
            <span className="px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-xs">
              {customerInfo.currentOrder.status}
            </span>
          </div>
        </div>

        <div className="mt-3 bg-gray-50 p-2 rounded-md">
          <h5 className="text-sm font-medium">Productos</h5>
          {customerInfo.currentOrder.items.map((item, index) => (
            <div key={index} className="mt-2 text-xs">
              <div className="flex justify-between">
                <span className="font-medium">{item.product}</span>
                <span>
                  {item.price} x {item.quantity}
                </span>
              </div>
              <div className="text-gray-500">SKU: {item.sku}</div>
            </div>
          ))}
          <div className="mt-2 pt-2 border-t flex justify-between text-sm">
            <span className="font-medium">Total:</span>
            <span className="font-medium">{customerInfo.currentOrder.total}</span>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex justify-between text-sm">
            <span>Envío:</span>
            <span>{customerInfo.currentOrder.shipping}</span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-base font-medium border-b pb-2">Acciones Rápidas</h4>
        <div className="mt-2 space-y-2">
          <button className="w-full py-2 px-3 text-sm bg-teal-100 hover:bg-primary-admin hover:text-white rounded-md text-left flex items-center">
            <Package size={16} className="mr-2" /> Ver detalles del pedido
          </button>
          <button className="w-full py-2 px-3 text-sm bg-teal-100 hover:bg-primary-admin hover:text-white rounded-md text-left flex items-center">
            <CreditCard size={16} className="mr-2" /> Gestionar reembolso
          </button>
          <button className="w-full py-2 px-3 text-sm bg-teal-100 hover:bg-primary-admin hover:text-white rounded-md text-left flex items-center">
            <HelpCircle size={16} className="mr-2" /> Crear ticket interno
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfoSidebar;
