import React from 'react'
import MostOrdered from './MostOrdered'
import MostTypeOfOrder from './MostTypeOfOrder'
import OrderReport from './OrderReport'
import StatsCard from './StatsCard'


const Main = () => {
  return (
      <div className='flex  w-full'>
<main class="flex flex-col flex-1 gap-4 p-4">
      <header>
        <h1 class="text-3xl font-semibold leading-loose text-[#2A2624] dark:text-white">Dashboard</h1>
        
      </header>
      <hr class="border-gray-700" />
        <StatsCard />
        <OrderReport />
    </main>
    <aside class="flex flex-col gap-y-6 pt-1 pr-6 w-96">
        <div className='flex justify-end'>
        

        </div>
     <MostOrdered />
     <MostTypeOfOrder />
    </aside>
      </div>
    
  )
}

export default Main