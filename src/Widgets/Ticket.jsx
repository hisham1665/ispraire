import React from 'react'

function Ticket() {
    const events = [
        {
          title: "Managerial Talk Session",
          time: "10:00 AM - 12:00 PM",
          speaker: "Dr. Alex Carter",
          topics: "Leadership, Time Management, Communication",
          poster: "", // Replace with actual poster URL
          description:
            "A motivational session by an experienced leader to inspire and guide attendees on key managerial skills.",
        },
        {
          title: "Cybersecurity Workshop",
          time: "2:00 PM - 5:00 PM",
          speaker: "Ms. Evelyn Moore",
          topics: "Network Security, Ethical Hacking, Data Protection",
          poster: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80", // Replace with actual poster URL
          description:
            "Learn about the latest cybersecurity trends and practical techniques to safeguard systems.",
        },
        {
          title: "Stock Market Workshop",
          time: "11:00 AM - 2:00 PM",
          speaker: "Mr. John Smith",
          topics: "Investing Strategies, Market Analysis, Risk Management",
          poster: "https://via.placeholder.com/600x400", // Replace with actual poster URL
          description:
            "A hands-on session covering stock market basics and advanced trading strategies.",
        },
        {
          title: "Competition",
          time: "9:00 AM - 5:00 PM",
          speaker: "Panel of Judges",
          topics: "Problem-Solving, Teamwork, Innovation",
          poster: "https://via.placeholder.com/600x400", // Replace with actual poster URL
          description:
            "Showcase your skills and creativity in a thrilling competition judged by experts.",
        },
      ];
    
  return (
    <div id="indicators-carousel" className="relative w-full z-50" data-carousel="static">
    
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">

            <div class=" duration-700 ease-in-out" data-carousel-item="active">
                <img src = {events[1].poster} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
    
            <div class=" duration-700 ease-in-out" data-carousel-item>
                <img src={events[0].poster} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
        
            <div class=" duration-700 ease-in-out" data-carousel-item>
                <img src={events[0].poster} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
            
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={events[0].poster} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
            
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={events[0].poster} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
        </div>
    
        <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
            <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        </div>
    
        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>

  )
}

export default Ticket

