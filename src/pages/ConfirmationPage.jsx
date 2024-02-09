import { useContext, useEffect } from "react";
import { PatientContext } from "../context/PatientContext";
import axios from "axios";

export const ConfirmationPage = () => {

  const { patientData, shiftReservated } = useContext(PatientContext);
  const { name, surname, email  } = patientData;
  const { fecha, horaInicio, horaFin } = shiftReservated;

  const sendMessage = async () => {
    try {
    const response = await axios.post('https://luci-web-backend-production.up.railway.app/shift-confirmated', {
      name, surname, email, fecha, horaFin, horaInicio
    })
    console.log(response);
    } catch (error) {
        console.log(error);
    }
  }

  const sendData = async () => {
    try {
    const response = await axios.post('https://luci-web-backend-production.up.railway.app/confirmar-turno', {
        datosCliente: patientData,
        datosTurno: shiftReservated
    })
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    sendData()
    sendMessage()
  }, [])
  

  return (
    <div className="min-h-screen flex items-center justify-center sm:bg-gray-100">
      <div className="p-8 bg-white rounded-md sm:shadow-md max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-12 w-12 text-green-500 border-2 border-green-500 rounded-full p-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Pago Realizado</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Cliente:</label>
          <p className="text-md text-gray-800">{name} {surname}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Fecha del Turno:</label>
          <p className="text-md text-gray-800">{fecha}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Hora del Turno:</label>
          <p className="text-md text-gray-800">{horaInicio} - {horaFin}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Monto:</label>
          <p className="text-md text-gray-800">$5,000</p>
        </div>
        <a href="https://wa.me/541165368186" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 active:bg-green-700 transition duration-300">
          Enviar Mensaje a Luciana
        </a>
      </div>
    </div>
  )
}
