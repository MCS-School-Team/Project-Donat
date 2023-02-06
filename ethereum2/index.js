import React from 'react';
import { useState } from 'react';
import { render } from "react-dom";
import Campaing from './Сampaing';

function App() {
  const [address, setAddress] = useState("");
  console.log(address)
  return (<>
    <Campaing />
  </>)
}
render(<App />, document.querySelector("#root")); 