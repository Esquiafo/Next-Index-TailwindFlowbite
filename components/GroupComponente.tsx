import React,{useState,useEffect, SVGAttributes} from "react";
import { Card,Timeline} from "flowbite-react";
import Image from "next/image";



export default function GroupComponente() {
 let categoryContent = [{
    name: 'Motherboard',
    id: '1',
    img: 'https://flowbite.com/docs/images/carousel/carousel-1.svg'
 },
 {
    name: 'CPU',
    id: '2',
    img: 'https://flowbite.com/docs/images/carousel/carousel-2.svg'
 },{
    name: 'GPU',
    id: '3',
    img: 'https://flowbite.com/docs/images/carousel/carousel-3.svg'
 },{
    name: 'Discos',
    id: '4',
    img: 'https://flowbite.com/docs/images/carousel/carousel-4.svg'
 },
 {
    name: 'RAM',
    id: '5',
    img: 'https://flowbite.com/docs/images/carousel/carousel-5.svg'
 },
 {
    name: 'Mouse',
    id: '6',
    img: 'https://flowbite.com/docs/images/carousel/carousel-1.svg'
 },
 {
    name: 'Teclados',
    id: '7',
    img: 'https://flowbite.com/docs/images/carousel/carousel-2.svg'
 },
 {
    name: 'Monitores',
    id: '8',
    img: 'https://flowbite.com/docs/images/carousel/carousel-3.svg'
 },
 {
    name: 'Auriculares',
    id: '9',
    img: 'https://flowbite.com/docs/images/carousel/carousel-4.svg'
 },
 {
   name: 'Gabinetes',
   id: '11',
   img: 'https://flowbite.com/docs/images/carousel/carousel-1.svg'
},
 {
    name: 'Notebook',
    id: '10',
    img: 'https://flowbite.com/docs/images/carousel/carousel-5.svg'
 },



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
       Componentes
</h1>
<div  className="mx-2 mb-5 ">
{CategoryView}
</div>
</div>
 
      



       
       
   )
}
