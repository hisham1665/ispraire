import React from 'react';
import { events } from '../Data/Events.js';

function Ticket() {
  const eventing = events;
  const handleRegister = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfByUrJUlmaz6SMI7WIotOXyzHPhNbdPlqd2uxM8s4q-aEJJQ/viewform?usp=header","_blank");
  }
  return (
    <div className='flex flex-col items-center'>
      {eventing.map((event) => (
        <div
          key={event.id}
          className='flex flex-row justify-between items-center w-[90vw] max-w-[800px] h-[200px] bg-white shadow-lg  overflow-hidden my-4'
        >
          <div className='flex flex-col  bg-green-700 w-[20%]  '>
            <div className='bg-green-300 w-full text-center p-2 '>
              <h1 className='text-lg font-semibold'>Jan</h1>
              <h1 className='text-4xl font-semibold'>15</h1>
              <h1 className='text-lg font-semibold'>2025</h1>
            </div>
            <div className=' p-2 pb-3'>
              <h1 className='text-md text-white font-semibold'>{event.time}</h1>
            </div>
          </div>
          <div className='flex flex-col justify-center  w-[50%] h-full p-4'>
            <div>
              <h1 className='text-xl font-semibold'>{event.type}</h1>
            </div>
            <div>
              <h1 className='abril-fatface-regular text-3xl font-semibold mt-2'>{event.title}</h1>
            </div>
            <div>
              <h3 className='font-medium mt-2'>
                Speaker: <span className='text-xl font-semibold'>{event.speaker}</span>
              </h3>
            </div>
            <div className='mt-4'>
              <button className='h-10 w-32 bg-lime-300 rounded-lg hover:bg-lime-400 transition-colors'onClick={handleRegister}>
                Register Now
              </button>
            </div>
          </div>
          <div className='w-[30%] h-full flex justify-center items-center'>
            <img
              src={event.poster}
              className='h-full w-full object-cover'
              alt={event.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Ticket;
