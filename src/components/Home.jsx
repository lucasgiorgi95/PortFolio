import React from 'react'
import hero from '../assets/hero.png'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Home = () => {
  return (
    <div name="home"
    className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">

      <div className='max-w-screen-lg mx-auto flex flex-col 
      items-center justify-center h-full px-4 md:flex-row '
      >
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-white  text-4xl sm:text-7xl font-bold'>
                 Desarrollador Full Stack
            </h2>
            <p className='text-gray-500 py-4 max-w-md'>
                Cuanto con experiencia en la creación y diseño de software.
                Actualmente, me encanta trabajar en aplicaciones web utilizando tecnologías como
                React, CSS, JavaScript, Node, PostgreSQL
            </p>
            <div>
                <button className='group text-white w-fit px-6 py-3 my-2 items-center rounded-md bg-gradient-to-r
                    from-cyan-500 to-blue-900 cursor-pointer '>
                    Portafolio
                    <button className='group-hover:rotate-90 duration-300'>
                    <KeyboardArrowRightIcon />
                    </button>
                </button>
            </div>
        </div>
        <div>
            <img src={hero} alt="my picture"  className='rounded-2xl mx-auto w-2/4 md:w-full'/>
        </div>
      </div>
    </div>
  )
}

export default Home
