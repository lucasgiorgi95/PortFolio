import React from 'react'

const  About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Sobre mi</p>
        </div>
        <p className='text-xl mt-10 '>
            Soy Full-Stack Web Developer con orientacion al Front-end, con capacidad de realizar proyectos web teniendo siempre en mente su escalabilidad y modularizacion para asi poder construir en equipo.
        </p>
        <br />
        <p className='text-xl'>
          Me egrese del bootcam de Soy Henry donde me forme, de manera intensiva, con más de 800hs, de teoria y practica en el desarrollo de aplicaciones web con el Stack P.E.R.N,
          actualmente me sigo formando de manera autodidacta en portales como Open-Bootcam y Udemy.
        </p>
        <br />
        <p className='text-xl'>
        Conmigo obtendran un desarrollador curioso con gran capacidad en la comunicacion, la inciativa y resolucion de problemas, sobre todo un desarrollador siempre dispuesto a ayudar y aprender de los demas
        </p>
      </div>
    </div>
  )
}

export default About
