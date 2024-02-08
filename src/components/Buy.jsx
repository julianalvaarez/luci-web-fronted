import { useNavigate } from "react-router-dom";

export const Buy = () => {
  const navigate = useNavigate()
  function handleNavigate() {
    navigate('/registerpatient')
  }
  return (
    <section id="buy">
      <div className="bg-gray-100 py-16 my-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Agenda tu Turno
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              ¡Reserva una consulta para mejorar tu salud y bienestar!
            </p>
          </div>
          <div className="mt-10 max-w-md mx-auto sm:max-w-xl lg:max-w-4xl">
            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 bg-white rounded-md shadow-md">
                <h3 className="text-lg font-medium text-gray-900">
                  Información de la Consulta
                </h3>
                <p className="mt-2 text-sm text-gray-600 text-balance">
                  ¡Te ofrezco nuestra primera consulta por el precio de $5000! Para esta, tan solo se requiere que traiga los últimos
                  estudios médicos. No dude en consultarme ante
                  cualquier duda o inquietud que pueda tener.
                </p>
                <button onClick={handleNavigate} className="md:mt-4 mt-10 px-6  py-3 bg-amber-500 text-white rounded-md hover:bg-amber-600 active:bg-amber-700 focus:border-amber-300 ">
                  Agendar Ahora por 5000 ARS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
