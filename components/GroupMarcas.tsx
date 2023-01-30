import React,{useState,useEffect, SVGAttributes} from "react";
import { Card,Timeline} from "flowbite-react";



export default function GroupMarcas() {
 let categoryContent = [{
    name: 'AMD',
    id: '1',
    img: 'https://flowbite.com/docs/images/carousel/carousel-1.svg'
 },
 {
    name: 'NVIDIA',
    id: '2',
    img: 'https://flowbite.com/docs/images/carousel/carousel-2.svg'
 },{
    name: 'Intel',
    id: '3',
    img: 'https://flowbite.com/docs/images/carousel/carousel-3.svg'
 },{
    name: 'Corsair',
    id: '4',
    img: 'https://flowbite.com/docs/images/carousel/carousel-4.svg'
 },
 {
    name: 'Logitech',
    id: '5',
    img: 'https://flowbite.com/docs/images/carousel/carousel-5.svg'
 },
 {
    name: 'MSI',
    id: '6',
    img: 'https://flowbite.com/docs/images/carousel/carousel-1.svg'
 },
 {
    name: 'Redragon',
    id: '7',
    img: 'https://flowbite.com/docs/images/carousel/carousel-2.svg'
 },
 {
    name: 'Razer',
    id: '8',
    img: 'https://flowbite.com/docs/images/carousel/carousel-3.svg'
 },
 {
    name: 'WD',
    id: '9',
    img: 'https://flowbite.com/docs/images/carousel/carousel-4.svg'
 },
 {
    name: 'Adata',
    id: '10',
    img: 'https://flowbite.com/docs/images/carousel/carousel-5.svg'
 }


]

let CategoryView = categoryContent.map(units => {
   return(
       <div style={{margin: '0px', width: '125px'}} className="inline-block"> 
       <div >
       <h4 className=" text-xl text-center font-medium text-gray-900 dark:text-white">
            {units.name}
           </h4>
         <div style={{margin: "0px"}} className="flex justify-center">
           <img
    
             className="w-28 h-28 rounded-full"
             src={units.img}
             alt={units.id+units.name}
           />

          
        
         </div>
       </div>
     </div>
   )
})

   return(


 
<div className=" flex flex-col">
<h1 className=" m-3 pt-5 text-xl text-start font-medium text-gray-900 dark:text-white">
       Marcas
</h1>
<div  className="mx-2 mb-5 ">
{CategoryView}
</div>
</div>
 
      



       
       
   )
}
