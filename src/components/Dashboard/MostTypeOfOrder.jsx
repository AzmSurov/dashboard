import React from 'react'
import {AiOutlineDownCircle} from 'react-icons/ai'
const MostTypeOfOrder = () => {
  return (
    <div>
        <div class="flex flex-col p-6 bg-gray-900 rounded-lg gap-y-6">
    <div class="flex justify-between items-center">
      <h2 class="text-xl font-semibold leading-loose text-white">Most type of order</h2>
      <button class="flex gap-x-2.5 py-3 px-4 rounded-lg border border-gray-700">
        <AiOutlineDownCircle />
        <span class="text-sm text-white">Today</span>
      </button>
    </div>
    <hr class="border-gray-700" />
    <div class="flex gap-x-7">
     <svg width="188" height="188" viewBox="0 0 188 188" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="0.1" cx="94" cy="93.8789" r="88" fill="#1F1D2B" stroke="white" stroke-width="11.4783"/>
    <circle opacity="0.05" cx="94.0003" cy="93.8792" r="76.5217" fill="#1F1D2B" stroke="white" stroke-width="11.4783"/>
    <circle opacity="0.1" cx="93.9995" cy="93.8787" r="65.0435" fill="#1F1D2B" stroke="white" stroke-width="11.4783"/>
    <circle opacity="0.05" cx="93.9998" cy="93.8789" r="53.5652" fill="#1F1D2B" stroke="white" stroke-width="11.4783"/>
    <path d="M6 93.8789C6 142.48 45.3989 181.879 94 181.879C142.601 181.879 182 142.48 182 93.8789C182 45.2778 142.601 5.87891 94 5.87891" stroke="#65B0F6" stroke-width="11.4783" stroke-linecap="round"/>
    <path d="M94 170.401C136.262 170.401 170.522 136.141 170.522 93.8792C170.522 51.6174 136.262 17.3574 94 17.3574" stroke="#FFB572" stroke-width="11.4783" stroke-linecap="round"/>
    <path d="M94.439 28.2834C105.781 28.2834 116.927 31.2495 126.769 36.8871C136.611 42.5248 144.807 50.6382 150.545 60.4221C156.283 70.206 159.363 81.3203 159.479 92.6621C159.595 104.004 156.743 115.179 151.206 125.078C145.669 134.977 137.64 143.256 127.916 149.094C118.191 154.932 107.109 158.125 95.7686 158.357C84.4286 158.589 73.2251 155.851 63.2698 150.416C53.3146 144.981 44.9538 137.036 39.017 127.372" stroke="#FF7CA3" stroke-width="11.4783" stroke-linecap="round"/>
</svg>
    
      <div class="flex flex-col gap-y-4">
        <div class="flex gap-x-2 items-start">
          <div class="w-4 h-4 mt-0.5 rounded-full bg-accent-red" />
          <div>
            <div class="text-sm font-medium text-white">Dine in</div>
            <div class="text-xs text-gray-500">200 customers</div>
          </div>
        </div>
        <div class="flex gap-x-2 items-start">
          <div class="w-4 h-4 mt-0.5 rounded-full bg-accent-orange" />
          <div>
            <div class="text-sm font-medium text-white">To go</div>
            <div class="text-xs text-gray-500">122 customers</div>
          </div>
        </div>
        <div class="flex gap-x-2 items-start">
          <div class="w-4 h-4 mt-0.5 rounded-full bg-accent-blue" />
          <div>
            <div class="text-sm font-medium text-white">Delivery</div>
            <div class="text-xs text-gray-500">264 customers</div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default MostTypeOfOrder