import Head from "next/head";
import React,{ useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import FrontPage from "@/components/FrontPage";
export default function Home() {

  return (
    <div>
        
      <Head>
        <title>eCommerce</title>
        <meta name="description" content="Index" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
<div className="grid justify-center align-center">

<FrontPage></FrontPage>

</div>
 

 




            
          
        
 
    </div>
  );
}