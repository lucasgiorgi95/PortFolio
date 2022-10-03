import React from 'react'
import automoviles from '../assets/portfolio/automoviles.jpg'
import booking from '../assets/portfolio/booking.jpg'
import dogs from '../assets/portfolio/dogs.png'
import patitas from '../assets/portfolio/patitas.png'


const Portfolio = () => {

  const portafolios = [
    {
      id: 1,
      src: automoviles,
    },
    {
      id: 2,
      src: patitas,
    },
    {
      id: 3,
      src: dogs,
    },
    {
      id: 4,
      src: booking,
    },
    // {
    //   id: 5,
    //   src: installNode,
    // },
    // {
    //   id: 6,
    //   src: reactWeather,
    // },
  ];



  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg  pt-40 p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portafolio</p>
          <p className='py-6'>Aca puedes ver mis proyectos</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portafolios.map(({id, src})=>(
             <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
             <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
             <div className='flex items-center justify-center'>
               <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
               <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Codigo</button>
             </div>
           </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
