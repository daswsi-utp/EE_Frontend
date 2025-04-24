'use client';
import { useState } from 'react';
import PedidosHeader from './PedidosHeader';
import PedidosSearch from './PedidosSearch';
import PedidosStats from './PedidosStats';
import PedidosTable from './PedidosTable';
import { pedidosData } from './pedidosData';

const PedidosContent = () => {
  const [statusFilter, setStatusFilter] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar pedidos por status y búsqueda
  const filteredPedidos = pedidosData.filter((pedido) => {
    const matchesStatus = statusFilter === 'todos' || pedido.status === statusFilter;
    const matchesSearch =
      pedido.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pedido.cliente.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="p-6 h-full bg-tertiary overflow-y-auto">
      <PedidosHeader />

      <PedidosSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <PedidosStats pedidos={pedidosData} />

      <PedidosTable filteredPedidos={filteredPedidos} totalPedidos={pedidosData.length} />
    </div>
  );
};

export default PedidosContent;
