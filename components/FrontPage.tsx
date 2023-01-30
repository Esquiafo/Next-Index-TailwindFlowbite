import React,{ useEffect, useState } from "react";
import IndexContext from './IndexContext'
import Navbar from "./Navbar";
export default function FrontPage() {

  return (
    <div> 


         <div className="text-center">
         <Navbar></Navbar>
         </div>
         <div className="justify-content-center">
        <IndexContext></IndexContext>
         </div>
    </div>
 

 




            
          
        

  );
}