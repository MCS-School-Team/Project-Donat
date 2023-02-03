import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import CardHome from "./CardHome";
import CreateCompany from "./CreateCampaign";
import { Link } from "react-router-dom";

const Layout = () => {

  return (
    <div>
      <div className="flex justify-center ">
        <div className="flex flex-col rounded-xl mr-10 border border-solid border-blue p-24 ">
          <h1>Create company</h1>
          <p>Something text</p>
          <Link to="/Create" className="bg-blue text-white rounded-lg text-center">Create</Link>
        </div>
        <div className="flex flex-col rounded-xl mr-10 border border-solid border-blue p-24 ">
          <h1>Donate company</h1>
          <p>Something text</p>
          <Link to="/Search" className="bg-blue text-white rounded-lg text-center">Donate</Link> 
        </div>
      </div>
    </div>
  );
};
export default Layout;