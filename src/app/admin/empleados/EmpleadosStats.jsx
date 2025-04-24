import { Users, Briefcase, Building2, CreditCard } from 'lucide-react';

const EmpleadosStats = ({ empleados }) => {
  const totalEmpleados = empleados.length;
  const empleadosActivos = empleados.filter((e) => e.estado === 'activo').length;
  const departamentos = [...new Set(empleados.map((e) => e.departamento))].length;
  const totalSalarios = empleados.reduce((total, empleado) => total + empleado.salario, 0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Empleados</p>
            <p className="text-2xl font-bold">{totalEmpleados}</p>
          </div>
          <div className="bg-teal-100 p-3 rounded-full">
            <Users className="h-6 w-6 text-teal-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Empleados Activos</p>
            <p className="text-2xl font-bold">{empleadosActivos}</p>
          </div>
          <div className="bg-green-100 p-3 rounded-full">
            <Briefcase className="h-6 w-6 text-green-500" />
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Departamentos</p>
            <p className="text-2xl font-bold">{departamentos}</p>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <Building2 className="h-6 w-6 text-blue-500" />
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Salarios</p>
            <p className="text-2xl font-bold">S/. {totalSalarios.toLocaleString('es-ES')}</p>
          </div>
          <div className="bg-purple-100 p-3 rounded-full">
            <CreditCard className="h-6 w-6 text-purple-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpleadosStats;
