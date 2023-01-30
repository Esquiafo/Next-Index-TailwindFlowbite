import React,{ useEffect, useState } from "react";
import IndexContext from './IndexContext'
import Navbar from "./Navbar";
import Foot from "./Footer";
import GroupComponente from "./GroupComponente";
import GroupMarcas from "./GroupMarcas";
export default function FrontPage() {

  return (
    <div> 


         <div className="text-center">
         <Navbar></Navbar>
         </div>
         <div className="">
        <IndexContext></IndexContext>
         </div>
         <div className="">
          <GroupComponente></GroupComponente>
         </div>
         <div className="">
          <GroupMarcas></GroupMarcas>
         </div>
         <div className="">
        <Foot></Foot>
         </div>
    </div>
 

 




            
          
        

  );
}