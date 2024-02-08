import { useContext } from "react";
import { useForm } from "../hooks/useForm";
import { PatientContext } from "../context/PatientContext";
import { useNavigate } from "react-router-dom";

const formData = { name: "", surname: "", date: "", tel: "", email: "" };

export const PatientForm = () => {
  const navigate = useNavigate()
  const {setPatientData} = useContext(PatientContext)
  const { formState, onInputChange } = useForm(formData);
  const { name, surname, date, tel, email } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    setPatientData(formState)
    navigate('/registerhour')
  };

  return (
    <section className="bg-blue-50 min-h-screen pt-10 md:pt-20 lg:pt-28 xl:pt-36 animate__animated animate__fadeIn ">
      <div className="max-w-md mx-auto p-4 bg-sky-50 shadow-md rounded-md">
        <h2 className="text-2xl font-semibold text-slate-950">Formulario de Paciente</h2>
        <p className="mb-4 text-sm text-gray-500">Registrate para asi poder reservar una consulta.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input type="text" id="name" name="name" value={name} onChange={onInputChange} required className="mt-1 p-3 w-full border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Apellido</label>
            <input type="text" id="surname" name="surname" value={surname} onChange={onInputChange} required className="mt-1 p-3 w-full border border-gray-300 rounded-md"/>
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
            <input type="date" id="date" name="date" value={date} onChange={onInputChange} className="mt-1 p-3 w-full border border-gray-300 rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={onInputChange} className="mt-1 p-3 w-full border border-gray-300 rounded-md" required/>
          </div>
          <div className="mb-4">
            <label htmlFor="tel" className="block text-sm font-medium text-gray-700">Numero de Telefono</label>
            <input type="tel" id="tel" name="tel" value={tel} onChange={onInputChange} className="mt-1 p-3 w-full border border-gray-300 rounded-md" required />
          </div>
          <button type="submit" className="bg-orange-500 text-white p-4 rounded-md hover:bg-orange-600 active:bg-orange-700 transition-colors w-full">
            Siguiente
          </button>
        </form>
      </div>
    </section>
  );
};
