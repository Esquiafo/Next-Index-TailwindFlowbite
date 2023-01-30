import React,{useState,useEffect, SVGAttributes} from "react";
import { Footer } from "flowbite-react";



export default function Foot() {
  
    return(


  
<div>
<Footer>
  <div className="w-full">
    <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
      <div>
        <Footer.Title title="Company" />
        <Footer.LinkGroup col={true}>
          <Footer.Link href="#">
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
      <div>
        <Footer.Title title="help center" />
        <Footer.LinkGroup col={true}>
          <Footer.Link href="#">
            Discord Server
          </Footer.Link>
          <Footer.Link href="#">
            Twitter
          </Footer.Link>
          <Footer.Link href="#">
            Facebook
          </Footer.Link>
          <Footer.Link href="#">
            Contact Us
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
      <div>
        <Footer.Title title="legal" />
        <Footer.LinkGroup col={true}>
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
      <div>
        <Footer.Title title="download" />
        <Footer.LinkGroup col={true}>
          <Footer.Link href="#">
            iOS
          </Footer.Link>
          <Footer.Link href="#">
            Android
          </Footer.Link>
          <Footer.Link href="#">
            Windows
          </Footer.Link>
          <Footer.Link href="#">
            MacOS
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
    </div>
    
  </div>
</Footer>
</div>
  
       



        
        
    )
}
