import { useState } from "react";
import { GoChevronRight } from "react-icons/go";
import { LiaBarsSolid } from "react-icons/lia";
import 'animate.css'

export const Navbar = () => {
  const [navState, setNavState] = useState(false);

  window.onscroll = function() {
    const navbar = document.getElementById('navbar')
    const buyButton = document.getElementById('buyButton')
    if (document.documentElement.scrollTop > 450 ) {
      navbar.style.backgroundColor = '#fff'
      navbar.style.color = 'black'
      buyButton.style.color = 'white'
    } else {
      navbar.style.color = 'white'
      navbar.style.backgroundColor = 'transparent'
    }
  }

  return (
    <nav className="p-4 text-white z-40 fixed w-full backdrop-blur-md md:backdrop-blur-0 xl:p-8" id="navbar" >
      <div className="flex justify-between lg:justify-around items-center mx-2">
        <a href="/" className="text-lg">
          LIC. LUCIANA ALVAREZ
        </a>
        <ul className="gap-5 text-lg hidden lg:flex">
          <li className="hover:underline ">
            <a href="#tunutricionista">TU NUTRICIONISTA</a>
          </li>
          <li className="hover:underline ">
            <a href="#preguntasfrecuentes">PREGUNTAS FRECUENTES</a>
          </li>
          <li className="hover:underline ">
            <a href="#contact">CONTACTO</a>
          </li>
        </ul>
        <a href="#buy" id="buyButton" className="hidden lg:flex cursor-pointer py-2 px-3 rounded-lg bg-amber-600 hover:bg-amber-700 active:bg-transparent active:border" >AGENDAR TURNO</a>
        <span
          className="text-2xl lg:hidden"
          onClick={() => setNavState(!navState)}
        >
          {navState ? <GoChevronRight /> : <LiaBarsSolid />}
        </span>
      </div>
      {navState && (
        <ul className="flex flex-col items-end mr-3 my-6 gap-3 lg:hidden  animate__animated animate__slideInRight ">
          <li className="hover:underline ">
            <a href="#tunutricionista">TU NUTRICIONISTA</a>
          </li>
          <li className="hover:underline ">
            <a href="#preguntasfrecuentes">PREGUNTAS FRECUENTES</a>
          </li>
          <li className="hover:underline ">
            <a href="#contact">CONTACTO</a>
          </li>
          <a href="#buy" id="buyButton" className="lg:hidden text-white mt-4 cursor-pointer py-2 px-3 rounded-lg bg-amber-600 hover:bg-amber-700 active:bg-transparent active:border" >AGENDAR TURNO</a>
        </ul>
      )}
    </nav>
  );
};
