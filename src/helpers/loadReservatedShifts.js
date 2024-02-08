import axios from 'axios';

export const loadReservatedShifts = async (setTurnosOcupados) => {
    try {
      const {data}  = await axios.get('https://luci-web-backend-production.up.railway.app/turnos-ocupados'); // Ajusta la URL según tu configuración
      setTurnosOcupados(data.busyShifts)
    } catch (error) {
      console.error('Error al obtener los turnos ocupados', error);
      return { turnosOcupados: null, error: 'Error al obtener los turnos ocupados' };
    }
  };