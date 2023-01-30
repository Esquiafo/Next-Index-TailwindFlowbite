import React,{useState,useEffect, SVGAttributes} from "react";
import { Footer } from "flowbite-react";



export default function Foot() {
  
    return(


  
<div>
<div className="text-start">

</div>
<Footer>
  <div className="w-full">
    <div className="grid w-full grid-cols-2  gap-8 py-8 px-6 md:grid-cols-4">
      <div style={{marginLeft: '25%'}}>
        <Footer.Title title="Company"  className=" text-start " />
        <Footer.LinkGroup col={true}  className=" text-start ">
          <Footer.Link href="#" >
            About
          </Footer.Link>
          <Footer.Link href="#">
            Careers
          </Footer.Link>
          <Footer.Link href="#">
            Brand Center
          </Footer.Link>
          <Footer.Link href="#">
            Blog
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
      <div style={{marginLeft: '25%'}}>
        <Footer.Title title="Redes"  className=" text-start " />
        <Footer.LinkGroup col={true}  className=" text-start ">
          <Footer.Link href="#">
            Discord
          </Footer.Link>
          <Footer.Link href="#">
            Instagram
          </Footer.Link>
          <Footer.Link href="#">
            Whatsapp
          </Footer.Link>
          <Footer.Link href="#">
            Email
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
      <div style={{marginLeft: '25%'}}>
        <Footer.Title title="Legal"  className=" text-start " />
        <Footer.LinkGroup col={true}  className=" text-start ">
          <Footer.Link href="#">
            Privacy Policy
          </Footer.Link>
          <Footer.Link href="#">
            Licensing
          </Footer.Link>
          <Footer.Link href="#">
            Terms & Conditions
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
      <div style={{marginLeft: '25%'}}>
        <Footer.Title title="Nosotros"  className=" text-start " />
        <Footer.LinkGroup col={true}  className=" text-start ">
          <Footer.Link href="#">
            Empresa
          </Footer.Link>
          <Footer.Link href="#">
            Vision
          </Footer.Link>
          <Footer.Link href="#">
            Trayectoria
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
    </div>
    
  </div>
</Footer>
</div>
  
       



        
        
    )
}
