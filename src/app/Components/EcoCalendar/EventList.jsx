export default function EventList({ selectedDate, events }) {
  const eventDetails = events.filter(
    (event) => event.date.toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="p-4 border-t border-gray-200 ">
      <h3 className="font-medium text-gray-800 mb-2">Eventos del día</h3>
      {eventDetails.length > 0 ? (
        <div className="space-y-2">
          {eventDetails.map((event, index) => (
            <div key={index} className="p-2 px-4 bg-green-50 rounded">
              <div className="font-medium text-green-800">{event.title}</div>
              <div className="text-sm text-gray-600">{event.description}</div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500">
          No hay eventos programados para este día.
        </p>
      )}
    </div>
  );
}
