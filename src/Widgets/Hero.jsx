import React from 'react'
import { MdLocationOn } from "react-icons/md";
function Hero() {
  return (
    <div className='pt-10 ' >
        <center >
            <div>
                <h4 className='quicksand font-semibold text-gray-200'> IEEE PIE KERALA PRESENTS </h4>
            </div>
            <div>
                <h1 className='exo-2 font-semibold text-white text-5xl mt-2'> Ispirare 2.0 :  Where Innovation Meets Inspiration  </h1>
            </div>
            <div className='mt-7'>
                <h1 className='abril-fatface-regular font-semibold text-gray-200 text-3xl mt-4'> JANUARY 15 <sup>th</sup> 2025 ,  SUNDAY</h1>
            </div>
            <div className='flex justify-center flex-row mt-6 '>
                <div>
                    <MdLocationOn size={50} color='white' />
                </div>
                <div>
                   <center> <h3 className='p-3  text-white quick-sand text-xl text-center align-middle md:text-md'>Sahrdaya College Of Engneering And Technology , Kodakara</h3> </center>
                </div>
            </div>
        </center>
    </div>
  )
}

export default Hero