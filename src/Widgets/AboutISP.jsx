import React from 'react';

function Working() {
  return (
    <div className='mt-20 place-items-center flex flex-col lg:flex-row justify-between'>
        <div className='object-fill w-full lg:w-2/4'>
            <div className='text-3xl md:text-4xl lg:text-5xl font-bold grid place-items-center text-gray-800'>
                <h1> About US </h1>
            </div>
            <div className='font-medium text-black font-sans mx-5 lg:ml-20 mb-10 text-lg md:text-xl text-center leading-relaxed mt-10 p-5'>
                <p>
                IEEE PIE (Platform for Innovation and Excellence) is a flagship event organized by IEEE to foster innovation, technical skills, and leadership qualities among students and professionals. The event serves as a collaborative platform for knowledge exchange, technical advancements, and professional development. IEEE PIE aims to provide participants with valuable opportunities to learn, network, and showcase their talents in a highly interactive and innovative environment.
                </p>
            </div>
        </div>
        <div className='h-auto w-full lg:w-2/4 mt-10 lg:mt-3 lg:mr-20'>
            <img src='/static/image.png' className='object-cover w-full h-full'/>
        </div>
    </div>
  );
}

export default Working;