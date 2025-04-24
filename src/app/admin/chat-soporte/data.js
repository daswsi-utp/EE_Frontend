// data.js
export const quickResponses = [
  '¿En qué puedo ayudarte con tu pedido?',
  'El tiempo de entrega es de 3-5 días hábiles.',
  'Puedes realizar el seguimiento de tu pedido con el código que te enviamos por email.',
  'Lamento el inconveniente, vamos a resolverlo lo antes posible.',
];

export const initialMessages = [
  { id: 1, text: 'Hola, tengo un problema con mi pedido #45789', sender: 'other', time: '10:30', status: 'Nuevo' },
  {
    id: 2,
    text: 'Buen día. Lamento escuchar eso. ¿Puede indicarme cuál es el problema?',
    sender: 'me',
    time: '10:31',
    status: 'Respondido',
  },
  {
    id: 3,
    text: 'Realicé la compra hace 5 días y aún no recibo confirmación de envío',
    sender: 'other',
    time: '10:32',
    status: 'Nuevo',
  },
  {
    id: 4,
    text: 'Entiendo su preocupación. Permítame verificar el estado de su pedido #45789.',
    sender: 'me',
    time: '10:33',
    status: 'Respondido',
  },
  {
    id: 5,
    text: 'Acabo de revisar y veo que su pedido está en el centro de distribución. Hubo un retraso por alta demanda. Será enviado hoy mismo con prioridad.',
    sender: 'me',
    time: '10:34',
    status: 'Respondido',
  },
  {
    id: 6,
    text: 'Gracias por la información. ¿Recibiré algún correo de confirmación cuando sea enviado?',
    sender: 'other',
    time: '10:35',
    status: 'Nuevo',
  },
];

export const allChats = [
  {
    name: 'María López',
    issue: 'Pedido #45789 - Retraso',
    time: '10:35',
    status: 'Activo',
    priority: 'Alta',
    unread: 1,
  },
  {
    name: 'Juan Pérez',
    issue: 'Cambio de talla - Camiseta',
    time: '9:45',
    status: 'Esperando',
    priority: 'Media',
    unread: 2,
  },
  {
    name: 'Ana Gómez',
    issue: 'Devolución - Producto dañado',
    time: 'Ayer',
    status: 'Resuelto',
    priority: 'Baja',
    unread: 0,
  },
  {
    name: 'Carlos Ruiz',
    issue: 'Consulta disponibilidad',
    time: 'Ayer',
    status: 'Cerrado',
    priority: 'Baja',
    unread: 0,
  },
  {
    name: 'Grupo Ventas',
    issue: 'Promoción fin de semana',
    time: 'Lunes',
    status: 'Interno',
    priority: 'Media',
    unread: 0,
  },
];

export const customerInfo = {
  name: 'María López',
  email: 'maria.lopez@email.com',
  phone: '+34 612 345 678',
  customerSince: 'Marzo 2023',
  totalOrders: 8,
  lastPurchase: '15 abril, 2025',
  currentOrder: {
    orderNumber: '#45789',
    date: '18 abril, 2025',
    status: 'En proceso',
    items: [
      { product: 'Vestido Floral Verano', sku: 'VF-2325', price: '€49.99', quantity: 1 },
      { product: 'Sandalias Elegantes', sku: 'SE-1245', price: '€35.50', quantity: 1 },
    ],
    total: '€85.49',
    shipping: 'Estándar (3-5 días)',
  },
};

export const getPriorityColor = (priority) => {
  switch (priority) {
    case 'Alta':
      return 'bg-red-500';
    case 'Media':
      return 'bg-yellow-500';
    case 'Baja':
      return 'bg-green-500';
    default:
      return 'bg-gray-500';
  }
};

export const getStatusBadge = (status) => {
  switch (status) {
    case 'Activo':
      return 'bg-green-100 text-green-800';
    case 'Esperando':
      return 'bg-yellow-100 text-yellow-800';
    case 'Resuelto':
      return 'bg-blue-100 text-blue-800';
    case 'Cerrado':
      return 'bg-gray-100 text-gray-800';
    case 'Interno':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};
