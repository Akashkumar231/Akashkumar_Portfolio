import React from 'react'
import image from '../../public/image.jpg'
const Home = () => {
  return (
    <div id='home' className='flex min-h-screen w-full items-center justify-center'>

    <div className='flex flex-col items-center 
    justify-center gap-8 p-5 text-center'></div>
     <img src={image} alt="" className='w-[250px]
     sm:w-[300px] rounded-full'/>
     <div className="space-y-1 sm:space-y-3">
      <h1 className='bg-gradient-to-r from-teal-400
      to-teal-600 bg-clip-text text-4xl font-semibold text-transparent
      md:text-5xl lg:texxt-6xl'>Akashkumar Yadav</h1>
      <h3 className='bg-gradient-to-r from-teal-400 to-teal-600
      bg-clip-text text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl'>Software Developer</h3>
      <p>
      
      </p>
     </div>

    </div>
  )
}

export default Home