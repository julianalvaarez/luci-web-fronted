export const generateShifts = (selectedDate) => {
    const shifts = [];
 
    let fechaActual = new Date(selectedDate);
    let fechaFin = new Date(fechaActual);
    fechaFin.setDate(fechaFin.getDate() + 15);
    
    // Función para verificar si un día es sábado o domingo
    const esFinDeSemana = (fecha) => {
      const diaDeLaSemana = fecha.getDay();
      return diaDeLaSemana === 0 || diaDeLaSemana === 6;
    };
    
    while (fechaActual <= fechaFin) {
      if (!esFinDeSemana(fechaActual)) {
        let horaInicioPrimerTurno = new Date(fechaActual.setHours(14, 0, 0, 0)); // 17:00
        let horaFinPrimerTurno = new Date(fechaActual.setHours(15, 0, 0, 0));    // 18:00
        
        let horaInicioSegundoTurno = new Date(fechaActual.setHours(15, 0, 0, 0)); // 18:00
        let horaFinSegundoTurno = new Date(fechaActual.setHours(16, 0, 0, 0));   // 19:00
        
        shifts.push(
          { 
            fecha: new Date(fechaActual).toISOString().split('T')[0],
            horaInicio: horaInicioPrimerTurno.toISOString().split('T')[1].substring(0, 5), 
            horaFin: horaFinPrimerTurno.toISOString().split('T')[1].substring(0, 5) 
          },
          { 
            fecha: new Date(fechaActual).toISOString().split('T')[0], 
            horaInicio: horaInicioSegundoTurno.toISOString().split('T')[1].substring(0, 5), 
            horaFin: horaFinSegundoTurno.toISOString().split('T')[1].substring(0, 5) 
          }
          );
      }
      
      fechaActual.setDate(fechaActual.getDate() + 1);
    }
    console.log(shifts);
    return shifts;
  };