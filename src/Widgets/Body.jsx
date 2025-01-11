import React from 'react';
import CountSection from './CountSection';
import TicketSection from './TicketSection';
import Partners from './Partners';
import AboutEvent from './AboutEvent';
import Working from './AboutISP';

function Body() {
  return (
    <div className=""> {/* Added bg-white to ensure a white background */}
      <div className="mx-auto  px-4 sm:px-6 lg:px-8"> {/* Added padding for better spacing on all devices */}
        <CountSection />
      </div>
      <div className=''>
        <TicketSection />
      </div>
      <div className='mt-10 p-4'>
        <Partners/>
        <Working />
      </div>
    </div>
  );
}

export default Body;