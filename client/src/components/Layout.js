import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import Benefits from "./Benefits";
import About from "./About";

const Layout = () => {
  return (
    <>
      <div className="bg-light-brown">
        <div className="flex justify-center  ">
          <div className="flex-none w-1/3 flex-col rounded-xl  bg-md-brown text-brown font-Chewy text-2xl  font-black text-center p-10 m-1 ">
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
      <div className="bg-light-brown 2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
      <Carousel/>
      </div>
      <Benefits></Benefits>
      <About></About>
    </>
  );
};
export default Layout;
