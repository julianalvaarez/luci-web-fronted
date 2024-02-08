import luciFoto from '../assets/luci.jpg'

export const About = () => {
  function openInstagram() {
    window.open('https://www.instagram.com/luciana_cresia_nutricion')
  }
  function openWhatsapp() {
    window.open('https://wa.me/541165368186')
  }
  return (
    <>
      <article className='md:p-10  pt-6' id='tunutricionista'>
        <h3 className='text-center text-2xl font-semibold md:text-4xl'>TU NUTRICIONISTA</h3>
        <div className='md:flex '> 
          <div className='md:flex-1'>
            <img src={luciFoto} alt="Lic. Luciana Alvarez Foto" className='px-10 rounded-sm my-8 lg:w-4/5 md:w-auto sm:w-1/2 sm:mx-auto ' />
          </div>
          <div className='md:flex-1 md:self-center flex flex-col gap-7 md:gap-12 md:pt-10 lg:pt-0'>
            <p className='text-wrap mx-5 md:mx-10 text-lg'>
              Me llamo <strong>Luciana Álvarez</strong>, soy Licenciada en Nutrición (UAI) y busco
              enseñar a mis pacientes a cambiar de hábitos que <strong>puedan sostenerlos
              en el tiempo</strong>. Estos cambios logran una relación sana con los
              alimentos, que ayudan a mejorar el estilo de vida. <br />
              <strong>Sin dietas ni prohibiciones</strong>, la clave esta en la guía personalizada para cada uno de
              ustedes que realizo luego de una entrevista exhaustiva, porque cada
              uno de nosotros somos diferentes. <br />
              Tengo <strong>amplia experiencia en gastronomía</strong> por lo que me permite asegurarles que comer sano y rico, van
              de la mano.
            </p>
            <div className='md:mx-10 flex gap-3 md:gap-5 mx-auto'> 
              <button onClick={openInstagram} className='px-4 py-1 sm:px-5 sm:py-2 bg-orange-300 font-semibold text-gray-900 hover:bg-orange-200 active:bg-orange-400'>INSTAGRAM</button>
              <button onClick={openWhatsapp} className='px-4 py-1 sm:px-5 sm:py-2 bg-orange-300 font-semibold text-gray-900 hover:bg-orange-200 active:bg-orange-400'>WHATSAPP</button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
