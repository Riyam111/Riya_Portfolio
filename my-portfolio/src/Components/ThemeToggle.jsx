import { Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {cn} from "@/lib/utils"

function ThemeToggle() {
    const[isdark,setdark]=useState(false)
   useEffect(() => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    setdark(true);
    document.documentElement.classList.add("dark");
  } else if (storedTheme === "light") {
    setdark(false);
    document.documentElement.classList.remove("dark");
  } 
}, []);

    // ThemeToggle.jsx
const toggletheme = () => {
  const next = !isdark;
  localStorage.setItem("theme", next ? "dark" : "light");
  document.documentElement.classList.toggle("dark", next);
  setdark(next);

  // Shout to the rest of the app:
  window.dispatchEvent(new Event("themechange"));
};

  return (
    <button onClick={toggletheme} className={cn(
        "fixed max-sm:right-1 max-sm:h-1 cursor-pointer  top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
      )} >
{
    isdark?(<Sun className='h-6 w-6 text-yellow-300'/>

    ):(
    <Moon className='h-6 w-6 text-blue-800'/>)
}
    </button>
  )
}

export default ThemeToggle
