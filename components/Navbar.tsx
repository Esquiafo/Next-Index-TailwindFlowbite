
import React,{useState,useEffect} from "react";
import BigNavbar from "./BigNav"
import { Button, Menu, MenuList, MenuTrigger } from "@fluentui/react-components";
import { ChevronDown28Filled} from '@fluentui/react-icons';


export default function Navbar() {
    const [rotate, showRotate] = useState('rotate-0');
    const [open, setOpen] = useState(false);
    function showBar() {
      rotate == 'rotate-0' ? showRotate('rotate-180') : showRotate('rotate-0'); 
      open == false ? setOpen(true) : setOpen(false)
  } 

  useEffect(() => {
    setOpen(true)
  }, [])


    return(
      <Menu open={open}>
    
    <MenuTrigger disableButtonEnhancement>
    <Button  onClick={function(){showBar()}} ><ChevronDown28Filled className={`${rotate} transition duration-700 `} /></Button>
    </MenuTrigger>
    
    <MenuList className="mt-8 relative transition duration-700" style={{border: 'none'}}>
        <BigNavbar  />
    </MenuList>
  
       
  </Menu>

        
        
    )
}
