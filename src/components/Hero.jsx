import React from 'react'
import HeroImage from '../assets/avatar.png'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img src={HeroImage} alt=""
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
      <h1 className='text-4xl font-bold'>
        Sou {""}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Nicolly Ramalho Bleinat</span>
        , Starter Back-end Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        Gosto muito de trabalhar com dados e suas lógicas.
      </p>
      <div className='mt-8 space-x-4'>
        <button
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Fale comigo</button>
        <button
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resumo</button>
      </div>

    </div>
  )
}

export default Hero