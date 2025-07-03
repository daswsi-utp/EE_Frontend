import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/events';

export const getAllEvents = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los eventos:', error);
    throw error;
  }
};

export const getEventById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener el evento con ID ${id}:`, error);
    throw error;
  }
};

export const createEvent = async (eventData) => {
  try {
    const response = await axios.post(API_BASE_URL, eventData);
    return response.data;
  } catch (error) {
    console.error('Error al crear el evento:', error);
    throw error;
  }
};

export const updateEvent = async (id, eventData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, eventData);
    return response.data;
  } catch (error) {
    console.error(`Error al actualizar el evento con ID ${id}:`, error);
    throw error;
  }
};

export const updateEventStatus = async (id, status) => {
  try {
    const response = await axios.patch(`${API_BASE_URL}/${id}/status`, status, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error al actualizar el estado del evento con ID ${id}:`, error);
    throw error;
  }
};

export const deleteEvent = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
    console.log(`Evento con ID ${id} eliminado exitosamente.`);
  } catch (error) {
    console.error(`Error al eliminar el evento con ID ${id}:`, error);
    throw error;
  }
};
