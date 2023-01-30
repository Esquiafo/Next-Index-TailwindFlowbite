
import React,{useState,useEffect, SVGAttributes} from "react";
import BigNavbar from "./BigNav"

export default function Navbar() {
    const [rotate, showRotate] = useState('rotate-0');
    const [open, setOpen] = useState('show');
    function showBar() {
      rotate == 'rotate-0' ? showRotate('rotate-180') : showRotate('rotate-0'); 
      open == 'show' ? setOpen('hidden') : setOpen('show')
  } 

    return(


      <div>
        
    <div>
    <button className={`${rotate} transition duration-700`} onClick={function(){showBar()}} >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
</svg>



    </button>
    </div>
    <span className="absolute flex text-start box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white">
<h1 className="text-xl text-start font-medium text-gray-900 dark:text-white">LOGO</h1>
</span>
    <div className={`mt-2 relative ${open} transition duration-300`} style={{border: 'none'}}>
        <BigNavbar  />
    </div>
  
       
  </div>


        
        
    )
}
