import React from 'react'

function Footer() {
  return (
    <div className='bg-slate-900 pb-3'>
    <div className='flex justify-evenly bg-slate-900 pb-20 '>
        <div className='mt-12 justify-center '>
            <div  className=''>
               <img src='https://pie.ieeekerala.org/pielogo.png'  className='h-20 w-56'/>
            </div>
            <div className="flex flex-1 mt-4">
                 <a href="#" className="-m-1.5 p-1.5">
                    <h1 className="orbitron font-semibold text-2xl text-white sm:text-3xl">
                        Ispirare <span className="text-xl sm:text-2xl font-bold">2.0</span>
                    </h1>
                </a>
            </div>
        </div>
        <div className='mt-12 justify-center '>
            <div>
                <h3 className='text-2xl font-bold text-white'> Links </h3>
            </div>

            <div className='mt-3'>
                <ul className='text-white text-lg '>
                    <li> <a href='https://www.ieee.org/'>IEEE org</a> </li>
                    <li> <a href='https://www.linkedin.com/company/ieeekerala/?originalSubdomain=in'>IEEE KERALA SECTION</a> </li>
                    <li> <a href='https://pie.ieeekerala.org/'>IEEE PIE KERALA </a> </li>
                    <li><a href='https://ieee-link.org/'>IEEE LINK</a></li>
                </ul>
            </div>

        </div>

        <div className='mt-12 justify-center '>
            <div>
                <h3 className='text-2xl font-bold text-white'>
                    Location
                </h3>
            </div>
            <div className='mt-3'> 
                <p className='text-white text-lg '>
                    Sahrdaya College Of Engneering And  Technology <br/>
                    College Rd, Koprakalam,<br/>
                    Kodakara,Thrissur.<br/>
                    Kerala, India - 680 541<br/>
                </p>
            </div>
        </div>
    </div>
        <div>
            <span className='text-gray-300 pl-10' > Copyright © 2024 IEEE PIE KERALA SECTION</span>
        </div>
    </div>
  )
}

export default Footer