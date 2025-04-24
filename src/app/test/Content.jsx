'use client'; 
import React, { useState } from "react";
import TablesParameters from "../admin/components_admin/TableGeneral";
import ButtonAdaptable from "../admin/components_admin/ButtonAdaptable"; // Asegúrate de que la ruta sea correcta
import ModalConfirmacion from "../admin/components_admin/Modal"; // Ruta correcta del modal

export default function TablesPage() {
  const tablesData = [
    {
      title: "Tabla 1: Usuarios",
      columns: [
        { headerName: "ID", field: "id" },
        { headerName: "Nombre", field: "name" },
        { headerName: "Edad", field: "age" },
      ],
      data: [
        { id: 1, name: "Ana", age: 25 },
        { id: 2, name: "Luis", age: 30 },
      ],
    },
    {
      title: "Tabla 2: Productos",
      columns: [
        { headerName: "Código", field: "code" },
        { headerName: "Producto", field: "product" },
        { headerName: "Precio", field: "price" },
        { headerName: "Stock", field: "stock" },
      ],
      data: [
        { code: "P01", product: "Camiseta", price: "$15", stock: 120 },
        { code: "P02", product: "Pantalón", price: "$30", stock: 85 },
      ],
    },
    {
      title: "Tabla 3: Cursos",
      columns: [
        { headerName: "Curso", field: "course" },
        { headerName: "Profesor", field: "teacher" },
        { headerName: "Duración (hrs)", field: "duration" },
      ],
      data: [
        { course: "React", teacher: "Elena", duration: 40 },
        { course: "Node.js", teacher: "Carlos", duration: 35 },
        { course: "Python", teacher: "Sofía", duration: 45 },
      ],
    },
    {
      title: "Tabla 4: Ciudades",
      columns: [
        { headerName: "Ciudad", field: "city" },
        { headerName: "País", field: "country" },
      ],
      data: [
        { city: "Buenos Aires", country: "Argentina" },
        { city: "Madrid", country: "España" },
        { city: "Santiago", country: "Chile" },
        { city: "Bogotá", country: "Colombia" },
      ],
    },
    {
      title: "Tabla 5: Ventas",
      columns: [
        { headerName: "Vendedor", field: "seller" },
        { headerName: "Cliente", field: "client" },
        { headerName: "Monto", field: "amount" },
        { headerName: "Fecha", field: "date" },
      ],
      data: [
        { seller: "Lucas", client: "Empresa A", amount: "$500", date: "2024-10-01" },
        { seller: "Marta", client: "Empresa B", amount: "$1,200", date: "2024-10-03" },
        { seller: "Julián", client: "Empresa C", amount: "$300", date: "2024-10-05" },
      ],
    },
  ];

  // Estado para manejar la apertura y cierre de los modales
  const [isModalOpen, setIsModalOpen] = useState(null); // null es cuando no hay modal abierto

  // Función para abrir el modal
  const openModal = (modalType) => {
    setIsModalOpen(modalType);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(null);
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4">Ejemplos de Tablas</h1>

      {/* Aquí añadimos una sección para mostrar las variantes de los botones */}
      <section className="mb-8">
        <h2 className="mb-4">Variantes de Botones</h2>
        
        <div className="space-y-4">
          {/* Botón Aceptar (Primary) */}
          <ButtonAdaptable
            label="Aceptar"
            onClick={() => openModal("accept")}
            variant="primary"
            size="md"
          />

          {/* Botón Cancelar (Cancel) */}
          <ButtonAdaptable
            label="Cancelar"
            onClick={() => openModal("cancel")}
            variant="cancel"
            size="md"
          />

          {/* Botón de éxito (Success) */}
          <ButtonAdaptable
            label="Éxito"
            onClick={() => openModal("success")}
            variant="success"
            size="md"
          />

          {/* Botón de peligro (Danger) */}
          <ButtonAdaptable
            label="Peligro"
            onClick={() => openModal("danger")}
            variant="danger"
            size="md"
          />

          {/* Botón de Check */}
          <ButtonAdaptable
            label="Confirmar"
            onClick={() => openModal("check")}
            icon="check"
            variant="success"
            size="md"
          />

          {/* Botón de X */}
          <ButtonAdaptable
            label="Cerrar"
            onClick={() => openModal("close")}
            icon="x"
            variant="danger"
            size="md"
          />

          {/* Botón de Retroceder */}
          <ButtonAdaptable
            label="Retroceder"
            onClick={() => openModal("back")}
            icon="back"
            variant="secondary"
            size="md"
          />
        </div>
      </section>

      {/* Modales */}
      {isModalOpen && (
        <ModalConfirmacion
          isOpen={isModalOpen !== null}
          onClose={closeModal}
          onConfirm={() => {
            console.log(`Acción ${isModalOpen} confirmada`);
            closeModal();
          }}
          message={`¿Estás seguro de que deseas ${isModalOpen === "accept" ? "aceptar" : 
            isModalOpen === "cancel" ? "cancelar" :
            isModalOpen === "success" ? "marcar como éxito" :
            isModalOpen === "danger" ? "eliminar" : "realizar la acción"}?`}
          title={isModalOpen.charAt(0).toUpperCase() + isModalOpen.slice(1)}
        />
      )}

      {/* Renderizando las tablas */}
      {tablesData.map((table, index) => (
        <div key={index} className="mb-5">
          <h4>{table.title}</h4>
          <TablesParameters columns={table.columns} data={table.data} />
        </div>
      ))}
    </div>
  );
}
