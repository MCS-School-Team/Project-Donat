import React from "react";
import Carousel from "./Carousel";
import About from "./About";
import mount2 from "../images/mount2.png";
import "../index.css";
import Benefits from "./Benefits";
import Blocks from "./Blocks";
import Footer from "./Footer";
const Layout = () => {
  return (
    <>
      <div className="flex flex-col z-10">
        <a href="#rab" className="text-[20px] fixed z-40 right-9 bottom-9 ">
          <div className="border text-black bg-light-brown shadow-xl rounded-full p-2 animate-bounce ">
            &#8595;
          </div>
        </a>
        <div className="section  flex justify-center  bg-light-brown  w-full h-screen">
          <img
            src={mount2}
            alt=""
            className="z-0 absolute h-full w-full  left-[-0.1%]"
          />
          <div className="text-[40px] ">Only you create your future</div>
        </div>
       

        <div className="section  justify-center items-center  bg-gradient-to-b from-white-r to-light-brown">
          <div className="text-black mt-10 flex justify-center ">
            <div className="mb-4 mt-10">
             
                
                <Blocks/>
              <Carousel />
              <Benefits />
      <About />
            </div>
          </div>
        </div>
      </div>
<Footer/>
     
    </>
  );
};
export default Layout;
