import React from 'react'
import { FaSun, FaMoon } from "react-icons/fa";
const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem
    ("theme") : "light"
  );

    const element = document.documentElement;

    React.useEffect(() => {
      if(theme === "dark"){
        element.classList.add("dark");
        localStorage.setItem("theme" , "dark");
      } else {
        element.classList.remove("dark");
        localStorage.setItem("theme" , "light")
      }
    }, [theme]);

  return (
    <div 
    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    className='cursor-pointer text-xl'>

      {theme === "light" ? ( 
        <button className="sm:flex bg-gradient-to-r from-set1 to-set2 transition-all
            duration-200 text-white py-1 px-4 rounded-full flex 
            items-center gap-3 group"> 
          <FaMoon className="text-xl 
            text-white drop-shadow-sm cursor-pointer" />
        </button>
      ) : (
        <button className="sm:flex bg-gradient-to-r from-set1 to-set2 transition-all
            duration-200 text-white py-1 px-4 rounded-full flex 
            items-center gap-3 group"> 
          <FaSun className="text-xl 
            text-white drop-shadow-sm cursor-pointer" />
        </button>
      )}

    </div>
  )
}

export default DarkMode

// <div className="relative">
//   <img src={LightButton} alt="LightMode" 
//   onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//   className={`w-8 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
//   transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}/>

//    <img src={DarkButton} alt="DarkMode" 
//    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//   className={`w-8 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
//   transition-all duration-300 `} />
// </div>