import { Check, X, Sun, AlertCircle } from 'lucide-react';

const EstadoEmpleadoIndicator = ({ estado }) => {
  switch (estado) {
    case 'activo':
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          <Check className="h-3 w-3 mr-1" />
          Activo
        </span>
      );
    case 'inactivo':
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
          <X className="h-3 w-3 mr-1" />
          Inactivo
        </span>
      );
    case 'vacaciones':
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          <Sun className="h-3 w-3 mr-1" />
          Vacaciones
        </span>
      );
    case 'baja':
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
          <AlertCircle className="h-3 w-3 mr-1" />
          De Baja
        </span>
      );
    default:
      return null;
  }
};

export default EstadoEmpleadoIndicator;
