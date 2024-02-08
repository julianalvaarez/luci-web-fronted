import React, { useState, useContext, useEffect } from 'react';
import { PatientContext } from '../context/PatientContext';
import { useNavigate } from 'react-router-dom';
import { generateShifts } from '../helpers/generateShifts';
import { loadReservatedShifts } from '../helpers/loadReservatedShifts';

export const PatientAgenda = () => {
  const navigate = useNavigate()
  const {shiftReservated, setShiftReservated} = useContext(PatientContext)
  const [selectedDate, setSelectedDate] = useState(new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0]); // Inicializa con la fecha actual
  const [turnosOcupados, setTurnosOcupados] = useState([]);

  console.log(shiftReservated);
  const availableShifts = generateShifts(selectedDate).filter((shift) => {
    return !turnosOcupados.some(turnoOcupado =>
      turnoOcupado.date === shift.fecha && turnoOcupado.start_hour === shift.horaInicio
      )
  });

     
  const turnosAMostrar = availableShifts.filter(turno => turno.fecha === selectedDate)
    
  function handleSelectHour(shift) {
    setShiftReservated(shift)
    navigate('/confirmation')
  }
  
  useEffect(() => {
    loadReservatedShifts(setTurnosOcupados);
  }, [selectedDate]);

  return (
    <section className='min-h-screen flex items-center justify-center bg-gray-100 sm:bg-white '>
        <div className="p-4 sm:bg-gray-100 rounded-md sm:shadow-md max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4 text-blue-950">Agenda del paciente</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Seleccionar fecha de inicio:</label>
            <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} min={new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0]} max={new Date(new Date().setDate(new Date().getDate() + 20)).toISOString().split('T')[0]} className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
            />
          </div>

          <div>
            <ul>
              {turnosAMostrar.length === 0
              ? <span>No hay turnos disponibles este dia.</span>
              : turnosAMostrar.map((turno) => (
                <li key={`${turno.fecha}-${turno.horaInicio}`} className="mb-2 bg-white rounded-md p-2 shadow hover:shadow-md transition duration-300 flex flex-col md:flex-row md:justify-between md:items-center">
                    <span>{`${turno.fecha} - ${turno.horaInicio} a ${turno.horaFin}`}</span>
                    <button onClick={() => handleSelectHour(turno)} className="mt-2 md:mt-0 px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 active:bg-orange-700 transition duration-300" >
                        Seleccionar
                    </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
};

