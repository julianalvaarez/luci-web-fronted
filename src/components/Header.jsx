import { Navbar } from "./Navbar";
import videoFondo from "../assets/fondo.mp4";
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate()
  
  return (
    <>
      <header className="min-h-screen relative overflow-hidden">
        {/* Video de fondo */}
        <video
          src={videoFondo}
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover brightness-50 object-center"
        ></video>

        <div className="flex flex-col ">
          <Navbar />

          <div className="relative text-white text-center my-[30vh] lg:my-[40vh]  justify-self-center">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl md:mx-16 mix-blend-difference">
              Transfórmate a Través de la Nutrición: Consultas Profesionales y
              Planes Alimentarios
            </h1>
            <p className="text-sm lg:text-base mx-5 text-pretty  mt-3 mix-blend-difference">
              De forma online, asistencia personalizada cuidando de la mejor
              forma al paciente.
            </p>
            <button onClick={() => navigate('/registerpatient')} className="mt-8 md:mt-12 lg:mt-16 px-3 py-2 lg:px-4 lg:py-3 text-lg bg-amber-600 rounded-md text-white hover:bg-amber-700 active:bg-amber-900 shadow-lg shadow-black transition-colors">
              AGENDA TU CITA YA
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
