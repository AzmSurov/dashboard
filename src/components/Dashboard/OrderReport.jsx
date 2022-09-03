import React from 'react'
import avatar1 from './assets/img/avatar-1.png'
import avatar2 from './assets/img/avatar-2.png'
import avatar3 from './assets/img/avatar-3.png'
import avatar4 from './assets/img/avatar-4.png'
import avatar5 from './assets/img/avatar-5.png'

import {AiOutlineFilter} from 'react-icons/ai'

const OrderReport = () => {
    const orders = [
        {
            id:1,
          avatar: avatar1,
          name: "Eren Jaegar",
          menu: "Spicy seasoned seafood noodles",
          total: "$125",
          status: "completed",
        },
        {
            id:2,
          avatar: avatar2,
          name: "Reiner Braunn",
          menu: "Salted Pasta with mushroom sauce",
          total: "$145",
          status: "preparing",
        },
        {
            id:3,
          avatar: avatar3,
          name: "Levi Ackerman",
          menu: "Beef dumpling in hot and sour soup",
          total: "$105",
          status: "pending",
        },
        {
            id:4,
          avatar: avatar4,
          name: "Historia Reiss",
          menu: "Hot spicy fried rice with omelet",
          total: "$45",
          status: "completed",
        },
        {
            id:5,
          avatar: avatar5,
          name: "Armin Arlert",
          menu: "Spicy seasoned seafood noodles",
          total: "$125",
          status: "completed",
        },
        
      ];
  return (
    <div>
        <div class="p-6 bg-[#E9F5F3] dark:bg-gray-900 rounded-lg">
    <div class="flex justify-between items-center pb-4">
      <h2 class="text-xl font-semibold leading-loose text-[#423E3E] dark:text-white">Order Report</h2>
      <button class="flex py-3 px-4 rounded-lg border border-gray-700 gap-x-2.5 text-[#423E3E] dark:text-white">
        <AiOutlineFilter className='' size={20}/>
        <span class="text-sm">Filter order</span>
      </button>
    </div>
    <table class="w-full">
      <thead>
        <tr class="text-sm font-semibold text-[#423E3E] dark:text-white">
          <td class="py-4 border-b border-gray-700">Customer</td>
          <td class="py-4 border-b border-gray-700">Menu</td>
          <td class="py-4 border-b border-gray-700 text-right">Total Payment</td>
          <td class="py-4 border-b border-gray-700 text-center">Status</td>
        </tr>
      </thead>
      <tbody className=''>

          {orders.map(({id, avatar, name, menu, total, status}) => (
        <tr key={id}  class="text-sm text-gray-500">

              <td class="py-4">
                <div class="flex gap-4 items-center">
                  <img width="32" src={avatar} alt="" />
                  <span> {name} </span>
                </div>
              </td>
              <td class="py-4">{menu}</td>
              <td class="py-4 tabular-nums text-center">{total}</td>
              <td class="py-4 flex justify-center pl-2">
                <span
                  class={"flex justify-center py-1 w-24 font-medium capitalize rounded-full " + (status === "completed" ? "bg-[#50D1AA]/20 text-[#50D1AA]" : "") + (status === "preparing" ? "bg-[#9290FE]/20 text-[#9290FE]" : "") + (status === "pending" ? "bg-[#FFB572]/20 text-[#FFB572]" : "")}
                >
                  {status}
                </span>
              </td>

              </tr> 
          ))}

      </tbody>
    </table>
  </div>
    </div>
  )
}

export default OrderReport