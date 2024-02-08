import { QuestionCard } from "./QuestionCard";
import { FaWhatsapp } from "react-icons/fa";

export const Questions = () => {
  function openWhatsapp() {
    window.open('https://wa.me/541165368186')
  }
  return (
    <>
      <section className="my-10" id="preguntasfrecuentes">
        <h3 className="text-center text-2xl font-semibold md:text-4xl">
          PREGUNTAS FRECUENTES
        </h3>

        <div class="flex flex-col items-center my-14 md:flex-row">
          <div class="space-y-4 max-w-md lg:flex-1 md:mx-auto">
            <QuestionCard question='¿POR QUÉ MEDIO ATIENDO?' text='Atiendo de forma online, mediante la plataforma "Zoom" o por
                videollamada de WhatsApp.' />

            <QuestionCard question='¿CON QUÉ FRECUENCIA SON LAS CONSULTAS?' text='La frecuencia es variable dependiendo del paciente y lo que
                necesite este.' />

            <QuestionCard question='¿CÓMO PUEDO AGENDAR UNA CITA?' text='Puedes hacerlo vía WhatsApp.' />

            <QuestionCard question='¿QUÉ INFORMACIÓN DEBO TENER EN LA PRIMER CONSULTA?' text='Se necesita únicamente los últimos estudios médicos del paciente
                en cuestión.' />
          </div>

          <div className="flex flex-col lg:flex-1 md:mt-0 md:justify-center md:gap-10 md:mx-auto items-center mt-16 border border-green-600 p-7 space-y-4 bg--100 max-w-md">
              <p className="text-xl md:text-2xl text-center font-semibold ">¿Seguis teniendo dudas?</p>
              <button onClick={openWhatsapp} className="mx-auto flex items-center md:text-lg gap-2 bg-green-600 rounded-sm text-white py-1 px-3">CONTACTAME <FaWhatsapp /></button>
          </div>
        </div>
      </section>
    </>
  );
};
