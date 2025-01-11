import React from 'react'
import Ticket from './Ticket'

function TicketSection() {
  return (
    <div>
        <div className='w-full h-1/2'>
            <h1 className='text-4xl text-center font-semibold  font-sans text-gray-900 ' >Featured Sessions</h1>
        </div>
        <div className='mt-10'>
            <Ticket />
        </div>
    </div>
  )
}

export default TicketSection