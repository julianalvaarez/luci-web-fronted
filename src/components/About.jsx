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
              <span className='ml-2'>Me</span> llamo <strong>Luciana Cresia Alvarez</strong>, soy <strong>Licenciada en Nutrición</strong> y quiero enseñarles a cambiar de hábitos y que puedan sostener en el tiempo. Estos cambios <strong>focalizados en tener una relaciòn sana con los alimentos</strong> , ayudan a mejorar nuestro estilo de vida. <br />
              <span className='ml-2'><strong>Sin dietas ni prohibiciones</strong></span>, cada uno de nosotros es único, por ello radica la importancia de mi guía personalizada, que realizo luego de una entrevista exhaustiva. <br />

              <span className='ml-2'>Tengo</span> amplia experiencia en gastronomía por lo que me permite asegurarles que <strong>comer sano y rico, van de la mano.</strong>
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
