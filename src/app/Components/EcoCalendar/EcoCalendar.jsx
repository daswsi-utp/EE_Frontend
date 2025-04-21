"use client";

import { useEcoCalendar } from "./useEcoCalendar";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import EventList from "./EventList";

export default function EcoCalendar() {
  const {
    currentMonth,
    setCurrentMonth,
    selectedDate,
    setSelectedDate,
    events,
  } = useEcoCalendar();

  const previousMonth = () =>
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  const nextMonth = () =>
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );

  return (
    <div className="w-[448px] mx-auto bg-white rounded-lg shadow-xl overflow-hidden text-black">
      <CalendarHeader
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        previousMonth={previousMonth}
        nextMonth={nextMonth}
      />
      <CalendarGrid
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        events={events}
      />
      <EventList selectedDate={selectedDate} events={events} />
    </div>
  );
}
