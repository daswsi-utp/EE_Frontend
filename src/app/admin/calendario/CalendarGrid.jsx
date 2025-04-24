const CalendarGrid = ({ currentMonth, selectedDate, setSelectedDate, events }) => {
  const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const renderCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const days = [];

    // Días vacíos al principio para alinear el primer día correctamente
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="p-2 h-12"></div>);
    }

    // Días del mes
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dateString = date.toISOString().split('T')[0];
      const isSelected = selectedDate.toDateString() === date.toDateString();
      const isToday = new Date().toDateString() === date.toDateString();

      // Verificar si hay eventos para este día
      const dayEvents = events.filter((event) => event.date === dateString);
      const activeEvents = dayEvents.filter((event) => event.status === 'Activo');

      days.push(
        <div
          key={day}
          onClick={() => setSelectedDate(date)}
          className={`p-1 h-12 text-center relative cursor-pointer border hover:border-teal-300 transition-colors ${
            isSelected ? 'bg-teal-50 border-teal-500' : 'border-transparent'
          } ${isToday ? 'font-bold' : ''}`}
        >
          <span
            className={`inline-block w-6 h-6 rounded-full text-sm items-center justify-center ${
              isSelected ? 'bg-teal-600 text-white' : ''
            }`}
          >
            {day}
          </span>
          {activeEvents.length > 0 && (
            <div className="absolute bottom-1 left-0 right-0 flex justify-center">
              <div className="h-1 w-1 rounded-full bg-teal-600"></div>
              {activeEvents.length > 1 && <div className="h-1 w-1 rounded-full bg-teal-600 ml-1"></div>}
              {activeEvents.length > 2 && <div className="h-1 w-1 rounded-full bg-teal-600 ml-1"></div>}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="grid grid-cols-7 gap-0 border-b border-gray-200">
        {daysOfWeek.map((day) => (
          <div key={day} className="py-2 text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0">{renderCalendarDays()}</div>
    </div>
  );
};

export default CalendarGrid;
