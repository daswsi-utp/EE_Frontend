import { Edit, Trash, Clock } from 'lucide-react';

const EventList = ({ events, selectedDate, handleEditEvent, handleDeleteEvent }) => {
  const dateString = selectedDate.toISOString().split('T')[0];
  const dayEvents = events.filter((event) => event.date === dateString);

  // Formato de fecha para mostrar
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
      <div className="flex items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Eventos para {formatDate(dateString)}</h3>
      </div>

      {dayEvents.length === 0 ? (
        <div className="text-center py-8 text-gray-500">No hay eventos programados para este día</div>
      ) : (
        <div className="space-y-3">
          {dayEvents.map((event) => (
            <div
              key={event.id}
              className={`p-3 rounded-lg border ${
                event.status === 'Activo' ? 'border-teal-200 bg-white' : 'border-gray-200 bg-gray-100'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className={`font-medium ${event.status === 'Activo' ? 'text-gray-800' : 'text-gray-500'}`}>
                    {event.title}
                  </h4>
                  <p className="text-sm text-gray-500 flex items-center mt-1">
                    <Clock size={14} className="mr-1" />
                    {event.time}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">{event.description}</p>
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium mt-2 ${
                      event.status === 'Activo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
                <div className="flex space-x-1">
                  <button
                    onClick={() => handleEditEvent(event)}
                    className="p-1 text-teal-600 hover:bg-teal-100 rounded"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => handleDeleteEvent(event)}
                    className="p-1 text-red-500 hover:bg-red-100 rounded"
                  >
                    <Trash size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;
