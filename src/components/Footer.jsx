import { useForm } from "../hooks/useForm";
import axios from 'axios';

const formData = { name: "", email: "", subject: "", message: "" };

export const Footer = () => {
  const { formState, onInputChange, onResetForm } = useForm(formData);
  const { name, email, subject, message } = formState;

  const sendMessage = async () => {
    try {
    const response = await axios.post('http://localhost:3000/send-message', formState)
    console.log(response);
    } catch (error) {
        console.log(error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage()
    onResetForm()
  }
  return (
    <>
      <footer className="border-t py-8" onSubmit={handleSubmit} id="contact">
        <div className="container mx-auto flex flex-col items-center ">
          <h2 className="text-3xl font-bold mb-1">Contacto</h2>
          <p className="text-sm mb-4 text-gray-800 text-balance">
            Te responderé lo más rápido posible.
          </p>
          <form className="w-screen max-w-xl mt-8">
            <div className="md:flex md:gap-8">
              <div className="mb-4 w-full">
                <input
                  required
                  name="name"
                  value={name}
                  onInput={onInputChange}
                  type="text"
                  placeholder="Introduce tu nombre..."
                  className="w-full px-4 py-2 border md:rounded-md  transition duration-300"
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  required
                  name="email"
                  value={email}
                  onInput={onInputChange}
                  type="email"
                  placeholder="Introduce tu correo electrónico..."
                  className="w-full px-4 py-2 border md:rounded-md  transition duration-300"
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                required
                name="subject"
                value={subject}
                onInput={onInputChange}
                type="text"
                placeholder="Introduce el asunto..."
                className="w-full px-4 py-2 border md:rounded-md  transition duration-300"
              />
            </div>
            <div className="mb-4">
              <textarea
                required
                name="message"
                value={message}
                onInput={onInputChange}
                placeholder="Introduce tu mensaje..."
                className="w-full px-4 py-4 border md:rounded-md  transition duration-300"
              ></textarea>
            </div>
            <div className="flex justify-center md:justify-start">
              <button
                type="submit"
                className="bg-amber-600 text-white px-5 py-2 rounded-md hover:bg-amber-700 active:bg-amber-800 transition duration-300"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </footer>
    </>
  );
};
