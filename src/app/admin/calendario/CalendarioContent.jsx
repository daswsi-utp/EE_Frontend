'use client';

import { useEffect, useState } from 'react';
import { Plus, Search } from 'lucide-react';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import EventModal from './EventModal';
import EventList from './EventList';
import DeleteConfirmation from './DeleteConfirmation';
import EventStats from './EventStats';
import EventTable from './EventTable';
import { demoEvents } from './calendarData';

const CalendarioContent = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [newEvent, setNewEvent] = useState({
    id: null,
    title: '',
    description: '',
    date: '',
    time: '',
    status: 'Activo',
  });

  useEffect(() => {
    const stored = localStorage.getItem('calendar-events');
    if (stored) {
      setEvents(JSON.parse(stored));
    } else {
      setEvents(demoEvents);
      localStorage.setItem('calendar-events', JSON.stringify(demoEvents));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('calendar-events', JSON.stringify(events));
  }, [events]);

  const handleAddEvent = () => {
    setIsEditing(false);
    setNewEvent({
      id: `EVT-${new Date().getFullYear()}-${String(events.length + 1).padStart(3, '0')}`,
      title: '',
      description: '',
      date: selectedDate.toISOString().split('T')[0],
      time: '12:00',
      status: 'Activo',
    });
    setShowModal(true);
  };

  const handleEditEvent = (event) => {
    setIsEditing(true);
    setCurrentEvent(event);
    setNewEvent({ ...event });
    setShowModal(true);
  };

  const handleDeleteEvent = (event) => {
    setCurrentEvent(event);
    setShowDelete(true);
  };

  const confirmDelete = () => {
    setEvents(events.filter((event) => event.id !== currentEvent.id));
    setShowDelete(false);
  };

  const handleSaveEvent = (eventData) => {
    if (isEditing) {
      setEvents(events.map((event) => (event.id === currentEvent.id ? { ...eventData } : event)));
    } else {
      setEvents([...events, eventData]);
    }
    setShowModal(false);
  };

  const toggleEventStatus = (id) => {
    setEvents(events.map((e) => (e.id === id ? { ...e, status: e.status === 'Activo' ? 'Inactivo' : 'Activo' } : e)));
  };

  const filteredEvents = events.filter(
    (e) =>
      e.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    total: events.length,
    active: events.filter((e) => e.status === 'Activo').length,
    upcoming: events.filter((e) => new Date(e.date) >= new Date()).length,
  };

  return (
    <div className="bg-tertiary rounded-lg shadow-sm">
      <div className="p-6 pt-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Administración de Eventos</h2>
        <p className="text-gray-600 mb-6">Gestiona todos los eventos y actividades programadas</p>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por título o descripción"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 w-full md:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          <button
            onClick={handleAddEvent}
            className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            <Plus size={18} className="mr-2" />
            Nuevo Evento
          </button>
        </div>

        <EventStats {...stats} />
        <EventTable
          events={filteredEvents}
          handleEdit={handleEditEvent}
          handleToggle={toggleEventStatus}
          handleDelete={handleDeleteEvent}
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <CalendarHeader
              currentMonth={currentMonth}
              prevMonth={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))}
              nextMonth={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}
            />
            <CalendarGrid
              currentMonth={currentMonth}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              events={events}
            />
          </div>
          <div className="lg:col-span-2">
            <EventList
              events={events}
              selectedDate={selectedDate}
              handleEditEvent={handleEditEvent}
              handleDeleteEvent={handleDeleteEvent}
            />
          </div>
        </div>
      </div>

      {showModal && (
        <EventModal
          newEvent={newEvent}
          setNewEvent={setNewEvent}
          isEditing={isEditing}
          handleSaveEvent={handleSaveEvent}
          setShowModal={setShowModal}
        />
      )}

      {showDelete && (
        <DeleteConfirmation currentEvent={currentEvent} confirmDelete={confirmDelete} setShowDelete={setShowDelete} />
      )}
    </div>
  );
};

export default CalendarioContent;
