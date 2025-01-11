import React from 'react'
import Ticket from '../Widgets/Ticket'


function EventsPage() {
  return (
    <div>
        <div>
            <h1 className='text-4xl text-center font-semibold  font-sans text-gray-900 mt-5 exo-2'>Events Of Ispirare 2.0 </h1>
        </div>
        <div className='mt-5'>
            <Ticket />
        </div>
    </div>
  )
}

export default EventsPage