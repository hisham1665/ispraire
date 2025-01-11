import React from 'react'

function Footer() {
  return ( 
    <div className='bg-slate-900 pb-3'>
      <div className='flex flex-col md:flex-row justify-evenly bg-slate-900 pb-20'>
        <div className='mt-12 text-center md:text-left'>
          <div>
            <img src='https://pie.ieeekerala.org/pielogo.png' className='h-20 w-56 mx-auto md:mx-0'/>
          </div>
          <div className="flex flex-1 mt-4 justify-center md:justify-start">
            <a href="#" className="-m-1.5 p-1.5">
              <h1 className="orbitron font-semibold text-2xl text-white sm:text-3xl">
                Ispirare <span className="text-xl sm:text-2xl font-bold">2.0</span>
              </h1>
            </a>
          </div>
          <div className="mt-4">
            <p className="text-gray-400 text-sm">© 2023 IEEE PIE. All rights reserved.</p>
          </div>
        </div>
        <div className='mt-12 text-center md:text-left'>
          <div>
            <h3 className='text-2xl font-bold text-white'>Links</h3>
          </div>
          <div className='mt-3'>
            <ul className='text-white text-lg space-y-2'>
              <li><a href='https://www.ieee.org/'>IEEE org</a></li>
              <li><a href='https://www.linkedin.com/company/ieeekerala/?originalSubdomain=in'>IEEE KERALA SECTION</a></li>
              <li><a href='https://pie.ieeekerala.org/'>IEEE PIE KERALA</a></li>
              <li><a href='https://ieee-link.org/'>IEEE LINK</a></li>
            </ul>
          </div>
        </div>
        <div className='mt-12 text-center md:text-left'>
          <div>
            <h3 className='text-2xl font-bold text-white'>Location</h3>
          </div>
          <div className='mt-3'>
            <p className='text-white text-lg'>
              Sahrdaya College Of Engineering And Technology <br/>
              College Rd, Koprakalam,<br/>
              Kodakara, Thrissur.<br/>
              Kerala, India - 680 541<br/>
            </p>
          </div>
        </div>
      </div>
      <div className='text-center md:text-left'>
        <span className='text-gray-300 pl-10'>Copyright © 2024 IEEE PIE KERALA SECTION</span>
      </div>
    </div>
  )
}

export default Footer