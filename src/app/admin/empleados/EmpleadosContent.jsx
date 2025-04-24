'use client';
import { useState } from 'react';
import EmpleadosHeader from './EmpleadosHeader';
import EmpleadosSearch from './EmpleadosSearch';
import EmpleadosStats from './EmpleadosStats';
import EmpleadosTable from './EmpleadosTable';
import { empleadosData } from './empleadosData';

const EmpleadosContent = () => {
  const [estadoFilter, setEstadoFilter] = useState('todos');
  const [departamentoFilter, setDepartamentoFilter] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar empleados por estado, departamento y búsqueda
  const filteredEmpleados = empleadosData.filter((empleado) => {
    const matchesEstado = estadoFilter === 'todos' || empleado.estado === estadoFilter;
    const matchesDepartamento = departamentoFilter === 'todos' || empleado.departamento === departamentoFilter;
    const matchesSearch =
      empleado.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      empleado.puesto.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesEstado && matchesDepartamento && matchesSearch;
  });

  return (
    <div className="p-6 h-full bg-tertiary overflow-y-auto">
      <EmpleadosHeader />

      <EmpleadosSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        estadoFilter={estadoFilter}
        setEstadoFilter={setEstadoFilter}
        departamentoFilter={departamentoFilter}
        setDepartamentoFilter={setDepartamentoFilter}
      />

      <EmpleadosStats empleados={empleadosData} />

      <EmpleadosTable filteredEmpleados={filteredEmpleados} totalEmpleados={empleadosData.length} />
    </div>
  );
};

export default EmpleadosContent;
