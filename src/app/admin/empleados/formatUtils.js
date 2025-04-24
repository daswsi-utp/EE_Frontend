export const formatEstadoEmpleado = (estado) => {
  const estadoMap = {
    activo: 'Activo',
    inactivo: 'Inactivo',
    vacaciones: 'En Vacaciones',
    baja: 'De Baja',
  };
  return estadoMap[estado] || estado;
};
