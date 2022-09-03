import React, { useState } from "react";
import { CgHome } from "react-icons/cg";
import {
  MdNotificationsNone,
  MdOutlineMailOutline,
} from "react-icons/md";
import { IoExitOutline, IoSettingsOutline } from "react-icons/io5";
import { FiPieChart, FiDollarSign } from "react-icons/fi";
import Switcher from '../components/Switcher'
const Sidebar = ({setSelectedMenu}) => {
  const [activeMenu, setActiveMenu] = useState(3);

  const icons = [
    {
      id: 1,
      icon: <CgHome size={20} />,
    },
    {
      id: 2,
      icon: <FiDollarSign size={20} />,
    },
    {
      id: 3,
      icon: <FiPieChart size={20} />,
    },
    {
      id: 4,
      icon: <MdOutlineMailOutline size={20} />,
    },
    {
      id: 5,
      icon: <MdNotificationsNone size={20} />,
    },
    {
      id: 6,
      icon: <IoSettingsOutline size={20} />,
    },
    {
      id: 7,
      icon: <IoExitOutline size={20} />,
    },
  ];

  return (
    <div className="">
      <div class="flex flex-col gap-y-4 items-center  py-8 w-24 h-full	   rounded-r-3xl bg-[#F2EAE1] dark:bg-gray-900">
        <div className="p-2">
          {" "}
          <Switcher />
        </div>
        {icons.map(({ id, icon }) => (
          <div
            key={id}
            className={
              activeMenu !== id
                ? ""
                : "bg-[#FFFFFF] dark:bg-gray-800 rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top  after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom"
            }
          >
            <button
              className={
                activeMenu !== id
                  ? "p-4 my-4 mr-4 ml-3 rounded-xl text-gray-900 dark:text-[#EA8269] "
                  : "p-4 my-4 mr-8 ml-8  text-white dark:text-white shadow-primary dark:shadow-dark bg-[#d9b996] dark:bg-[#EA8269] rounded-xl "
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu(id);
                setSelectedMenu(id)
              }}
              data-toggle="tab"
            >
              {icon}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
