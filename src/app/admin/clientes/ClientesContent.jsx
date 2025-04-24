'use client';
import { useState } from 'react';
import ClientesHeader from './ClientesHeader';
import ClientesSearch from './ClientesSearch';
import ClientesStats from './ClientesStats';
import ClientesTable from './ClientesTable';
import { clientesData } from './clientesData';

const ClientesContent = () => {
  const [estadoFilter, setEstadoFilter] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar clientes por estado y búsqueda
  const filteredClientes = clientesData.filter((cliente) => {
    const matchesEstado = estadoFilter === 'todos' || cliente.estado === estadoFilter;
    const matchesSearch =
      cliente.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cliente.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesEstado && matchesSearch;
  });

  return (
    <div className="p-6 h-full bg-tertiary overflow-y-auto">
      <ClientesHeader />

      <ClientesSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        estadoFilter={estadoFilter}
        setEstadoFilter={setEstadoFilter}
      />

      <ClientesStats clientes={clientesData} />

      <ClientesTable filteredClientes={filteredClientes} totalClientes={clientesData.length} />
    </div>
  );
};

export default ClientesContent;
