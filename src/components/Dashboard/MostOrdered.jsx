import React from 'react'
import {AiOutlineDownCircle} from 'react-icons/ai'
import food1 from './assets/img/food-1.png'
import food2 from './assets/img/food-2.png'
import food3 from './assets/img/food-3.png'
const MostOrdered = () => {


    const mostOrdered = [
        {
          name: "Spicy seasoned seafood noodles",
          image: food1,
          count: 200,
        },
        {
          name: "Salted pasta with mushroom sauce",
          image: food2,
          count: 120,
        },
        {
          name: "Beef dumpling in hot and sour soup",
          image: food3,
          count: 80,
        },
      ];

  return (
    <div className=''>
        <div class="flex flex-col p-6 text-[#423E3E] dark:text-white bg-[#E9F5F3] dark:bg-gray-900 rounded-lg gap-y-4">
    <div class="flex justify-between items-center">
      <h2 class="text-xl font-semibold leading-loose">Most Ordered</h2>
      <button class="flex gap-x-2.5 py-3 px-4 rounded-lg border border-gray-700">
        <AiOutlineDownCircle size={20} />
        <span class="text-sm">Today</span>
      </button>
    </div>
    <hr class="border-gray-700" />
    <div class="flex flex-col gap-y-4">
        {
            mostOrdered.map(({name, image, count}) => (
                <div class="flex gap-x-4 items-center">
                <img class="w-14 h-14" src={image} alt="" />
                <div class="flex flex-col gap-y-0.5">
                  <div class="text-sm font-medium text-[#423E3E] dark:text-white">{name}</div>
                  <div class="text-xs text-gray-500">{count} dishes ordered</div>
                </div>
              </div>
            ))
        }
    </div>
    <button
      class="py-3.5 rounded-lg w-full border border-[#423E3E]  dark:border-[#EB966A] dark:text-[#EB966A] text-sm font-semibold"
    >
      View all
    </button>
  </div>
    </div>
  )
}

export default MostOrdered