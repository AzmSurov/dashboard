import React, {useState, useEffect} from 'react'
import {BiMoon} from 'react-icons/bi'
import {HiOutlineSun} from 'react-icons/hi'
const Switcher = () => {
  const [theme, setTheme] = useState(null);
  useEffect (() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if(theme === 'dark'){
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme])


  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <div>
              <button class="flex gap-x-2.5 p-2 bg-gray-400 dark:bg-slate-600  rounded-lg " onClick={handleThemeSwitch}>
        {theme === 'dark' ? <HiOutlineSun className='text-white' size={18} />  :  <BiMoon className='text-black' size={18} />}
      </button>
    </div>
  )
}

export default Switcher