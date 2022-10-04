import React from 'react'
import automoviles from '../assets/portfolio/automoviles.jpg'
import booking from '../assets/portfolio/booking.jpg'
import dogs from '../assets/portfolio/dogs.png'
import pais from '../assets/portfolio/pais.png'
import patitas from '../assets/portfolio/patitas.png'


const Portfolio = () => {

  const portafolios = [
    {
      id: 1,
      src: automoviles,
      href:'https://github.com/lucasgiorgi95/Automoviles',
      title: "App automoviles"
    },
    {
      id: 2,
      src: patitas,
      href:'https://github.com/lucasgiorgi95/Patitas-PF',
      title: "Proyecto Final, App de Adopcion"
    },
    {
      id: 3,
      src: dogs,
      href:'https://github.com/lucasgiorgi95/Pi-Dogs-Henry',
      title: "Proyecto individual, App the Dogs"
    },
    {
      id: 4,
      src: booking,
      href:'https://github.com/lucasgiorgi95/Booking',
      title: "App reserva de hoteles"
    },
    {
      id: 5,
      src: pais,
      href:'https://github.com/lucasgiorgi95/Countri',
      title: "App de paises"
    },
    // {
    //   id: 6,
    //   src: reactWeather,
    // },
  ];



  return (
    <div name="portafolio"
    className="bg-gradient-to-b from-black pt-20 pb-20 to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg pt-20 p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className='pb-2'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portafolio</p>
          <p className='py-2'>Aca puedes ver mis proyectos</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portafolios.map(({id, src, href,title })=>(
             <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
             <img src={src} alt="" className='rounded-md w-auto h-60 duration-200 hover:scale-105 ' />
             <div>
                <h1 className="mt-4 font-bold">TITULO: {title}</h1>
             </div>
             <div className='flex items-center justify-end '>
               {/* <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button> */}
               <a href={href} 
                target='_blank'
                className=' duration-200 w-fit px-4 py-1  text-white my-2 rounded-md bg-gradient-to-r
                from-cyan-500 to-blue-900 cursor-pointer hover:scale-105'>Codigo</a>
             </div>
           </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
