"use client";

import { useState } from "react";

export function useEcoCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([
    {
      date: new Date(2025, 3, 22),
      title: "Día de la Tierra",
      description: "Evento especial con descuentos en productos ecológicos",
    },
    {
      date: new Date(2025, 4, 5),
      title: "Taller de Reciclaje",
      description: "Aprende a reciclar correctamente",
    },
    {
      date: new Date(2025, 4, 15),
      title: "Mercado Eco",
      description: "Feria de productos locales y sostenibles",
    },
    {
      date: new Date(2025, 4, 25),
      title: "Webinar Sostenibilidad",
      description: "Estrategias para reducir tu huella de carbono",
    },
  ]);

  return {
    currentMonth,
    setCurrentMonth,
    selectedDate,
    setSelectedDate,
    events,
  };
}
