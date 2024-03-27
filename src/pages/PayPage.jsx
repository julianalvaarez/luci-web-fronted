import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";
import { Mp } from "../components";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const PayPage = () => {
  const navigate = useNavigate()
  const { patientData, shiftReservated: shiftData } = useContext(PatientContext);
  const { name, surname, date, tel, email } = patientData;
  const { fecha, horaInicio, horaFin } = shiftData;

  return (
    <section className="bg-gray-100 py-12 min-h-screen md:pt-16 lg:pt-28 xl:pt-48">
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg max-w-xl">
        <h2 className="text-3xl font-bold mb-6">Confirmación de Compra</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Detalles del Paciente:</h3>
            <p><strong>Nombre:</strong> {name} {surname}</p>
            <p><strong>Fecha de Nacimiento:</strong> {date}</p>
            <p><strong>Teléfono:</strong> {tel}</p>
            <p><strong>Email:</strong> {email}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Detalles de la Consulta:</h3>
            <p><strong>Día:</strong> {fecha}</p>
            <p><strong>Hora de Inicio:</strong> {horaInicio}</p>
            <p><strong>Hora de Fin:</strong> {horaFin}</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-8 gap-6">
          {/* <button className="bg-blue-500 mb-5 text-white py-3 px-6 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Confirmar Compra
          </button> */}
          <Mp />
          <div className="w-full md:px-16">
            <PayPalScriptProvider options={{
              clientId: 'AQloVzLM19RsxwhGf8XI6CilsVWs1pp1tYW9TiiZMsMTSi-PqK57M2JDtbu_jYyfTlrMgztVUWVa8Biw'
            }}>
              <PayPalButtons
                style={{ color: 'gold', label: 'pay' }}
                createOrder={async () => {
                  const res = await fetch('https://luci-web-backend-production.up.railway.app/paypal-payment', {
                    method: 'POST',
                    headers: {
                      "Content-Type": "application/json",
                    }
                  })
                  const order = await res.json();
                  return order.id;
                }}
                onApprove={async () => {
                  await axios.post('https://luci-web-backend-production.up.railway.app/confirmate-paypal-payment', { patientData, shiftData })
                  navigate('/realizatedPage')
                  // actions.order.capture()
                  console.log('pago hecho')
                }}
                onCancel={() => navigate('/')}
              />

            </PayPalScriptProvider>
          </div>
        </div>
      </div>
    </section>
  );
};
