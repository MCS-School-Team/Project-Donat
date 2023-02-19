import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import Benefits from "./Benefits";
import About from "./About";
import mount from "../images/mount.png"
import "../index.css"
import ReactFullpage from '@fullpage/react-fullpage';
import box from "../images/box.png"

const Layout = () => {
  
  return ( 
      <div  className="flex flex-col  z-10">
        <a href="#rab" className="text-[20px] fixed z-40 right-9 bottom-9 "><div className="border text-black bg-light-brown shadow-xl rounded-full p-2 animate-bounce ">&#8595;</div></a>
        <div className="section  bg-gradient-to-b flex justify-center  from-light-brown to-light-brown-2 bg-cover   w-full h-screen">
          <img src={mount} alt="" className="z-0 absolute h-full w-full  left-[-0.1%]" />
          <div className="text-[40px] ">Only you create your future</div>
        </div>
        <div className="section h-[1400px]  justify-center items-center  bg-gradient-to-b from-white-r to-light-brown">
          <div className="text-black mt-10 flex justify-center " >
          <div className="mb-12">
              <p className="font-normal">
              <div className="">
        <div className="flex mt-12 mb-12 justify-center  ">
          <div className="flex-none mr-10 w-1/3 flex-col rounded-xl  bg-md-brown text-brown font-Chewy text-2xl  font-black text-center p-10 m-1 ">
            <div className="mb-12">
              <p className="mb-4">Create campaign</p>
              <p className="font-normal">
                Realise your project and make life brighter
              </p>
            </div>

            <Link
              className="bg-light-brown-2 text-brown rounded-lg text-center border-2 border-solid border-brown p-4 "
              to="/Create"
            >
              Create campaign
            </Link>
          </div>
          <div id="rab"></div>
          <div className="flex-none w-1/3 flex-col rounded-xl bg-blue text-white font-Chewy text-2xl font-black text-center p-10 m-1">
            <div className="mb-12">
              <p className="mb-4">Donate crypto</p>
              <p className="font-normal">
                Donate Ethereum to nonprofits campaign and receive benefits
              </p>
            </div>

            <Link
              className=" bg-blue text-white rounded-lg text-center border-2 border-solid border-white p-4"
              to="/Search"
            >
              Donate Now
            </Link>
            
          </div>
        </div>
      </div>
              </p>
            </div>
          </div>
          
          <Carousel/>
          <div className="text-black   mt-32 " id="about">
            <div className=" ml-12 flex">
            <div className="flex ml-48 text-[20px] flex-col justify-center">
            <h1 className="font-bold text-[25px] mb-4">A Crypto Donation Ecosystem</h1>
            <p className="w-1/2">The Donkey_Hot is the #1 cryptocurrency donation solution that provides an ecosystem for charities to raise funds in ETH, get found by cryptocurrency donors, receive funds instantly, and become part of a network of cryptocurrency media partners to support their missions.</p>
            </div>
            <img src={box} alt="" className=" mr-48 h-[450px] w-[450px]" />
            </div>
          </div>
        </div>
      </div> 
      
      
    
  ); 
};
export default Layout;