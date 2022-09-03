import React from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineDollarCircle} from 'react-icons/ai'
import { BiDish } from "react-icons/bi";
import {BsPerson} from 'react-icons/bs'
const StatsCard = () => {

    const stats = [
        {
            id:1,
          title: "Total Revenue",
          percentage: "+32.40%",
          value: "$10,243",
          status: "up",
          icon : <AiOutlineDollarCircle size={25} />,
          iconColor: " text-violet-400 "
        },
        {id:2,
          title: "Total Dish Ordered",
          percentage: "-12.40%",
          value: "23,456",
          status: "down",
          icon : <BiDish size={25}/>,
          iconColor: " text-orange-400 "
        },
        {id:3,
          title: "Total Customer",
          percentage: "+2.40%",
          value: "1,234",
          status: "up",
          icon : <BsPerson size={25}/>,
          iconColor: " text-blue-400 "
        },
      ];


  return (
    <div>
        <div class="flex gap-6">
        {stats.map(({id, title, percentage, value, status, icon, iconColor}) => (
                <div
                key={id}
                class="flex flex-col p-5 w-1/3 bg-[#E9F5F3] dark:bg-gray-900 rounded-lg gap-y-3"
              >
                <div class="flex items-center gap-x-3">
                  <div class={"p-2 bg-[#ffffff]/80 dark:bg-gray-800 rounded-lg" + iconColor}>
                    {icon}
                  </div>
                  <span
                    class="text-xs font-medium text-[#423E3E] dark:text-white"
                  >
                    {percentage}
                  </span>
                  <div
                    class={"p-2 rounded-full " + (status === "up" ? "text-green-500" : "text-red-500")}
                    
                  >
                      <div className={' bg-opacity-20 rounded-xl p-1.5 ' + (status === "up" ? "bg-green-500" : "bg-red-500")}>
                      {status === "up" ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                      </div>
                  </div>
                </div>
                <div class="text-3xl font-semibold text-[#423E3E] dark:text-white">{value}</div>
                <div class="text-sm tracking-wide text-gray-500">{title}</div>
              </div>
            ))}

    
  </div>
    </div>
  )
}

export default StatsCard