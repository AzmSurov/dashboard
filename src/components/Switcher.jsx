import React, {useState, useEffect} from 'react'
import {BsFillMoonFill} from 'react-icons/bs'
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
    <div className='animate-pulse'>
              <button class="flex gap-x-2.5 p-2 bg-yellow-300 dark:bg-gray-800  rounded-lg " onClick={handleThemeSwitch}>
        {theme === 'dark' ?   <BsFillMoonFill className='text-gray-400' size={18} /> : <HiOutlineSun className='text-black' size={18} />}
      </button>
    </div>
  )
}

export default Switcher