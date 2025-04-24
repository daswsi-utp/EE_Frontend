import { Search, ChevronDown, PlusCircle, Filter } from 'lucide-react';

const EmpleadosSearch = ({
  searchTerm,
  setSearchTerm,
  estadoFilter,
  setEstadoFilter,
  departamentoFilter,
  setDepartamentoFilter,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Buscar por nombre o puesto..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        <div className="flex flex-wrap gap-4 w-full md:w-auto">
          <div className="relative w-full sm:w-40">
            <select
              className="appearance-none bg-white border border-gray-300 py-2 pl-4 pr-10 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-600"
              value={estadoFilter}
              onChange={(e) => setEstadoFilter(e.target.value)}
            >
              <option value="todos">Todos los estados</option>
              <option value="activo">Activos</option>
              <option value="inactivo">Inactivos</option>
              <option value="vacaciones">En Vacaciones</option>
              <option value="baja">De Baja</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          <div className="relative w-full sm:w-48">
            <select
              className="appearance-none bg-white border border-gray-300 py-2 pl-4 pr-10 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-600"
              value={departamentoFilter}
              onChange={(e) => setDepartamentoFilter(e.target.value)}
            >
              <option value="todos">Todos los departamentos</option>
              <option value="Ventas">Ventas</option>
              <option value="Atención al Cliente">Atención al Cliente</option>
              <option value="Almacén">Almacén</option>
              <option value="Marketing">Marketing</option>
              <option value="TI">TI</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          <button className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg flex items-center gap-2">
            <PlusCircle className="h-5 w-5" />
            <span>Nuevo Empleado</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmpleadosSearch;
