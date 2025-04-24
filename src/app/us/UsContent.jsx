import React from "react";
import TablesParameters from "../admin/components_admin/TableGeneral";

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

  return (
    <div className="container py-4">
      <h1 className="mb-4">Ejemplos de Tablas</h1>
      {tablesData.map((table, index) => (
        <div key={index} className="mb-5">
          <h4>{table.title}</h4>
          <TablesParameters columns={table.columns} data={table.data} />
        </div>
      ))}
    </div>
  );
}
