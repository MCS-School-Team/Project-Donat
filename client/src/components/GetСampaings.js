import { useState, useEffect } from "react";
import campaingFactory from "../data/campaingFactory";
import { Contract, ethers } from "ethers";
import abi from "../abi.json";

const GetCampaings = () => {
  const [name, setName] = useState([]);
  const [address, setAddress] = useState([]);
  const [loader, setLoader] = useState("true");
  let provider = new ethers.BrowserProvider(window.ethereum);
  useEffect(() => {
    (async () => {
      setAddress(await campaingFactory.campaingsArray());
    })();
  }, []);
  const comp = address.map((adr) => new Contract(`${adr}`, abi, provider));
  useEffect(() => {
    try {
      (async () => {
        let proper = [];
        for (let i = 0; i < comp.length; i++) {
          let por = {
            name:await comp[i].name()
          }
          proper.push(por);
        }
        setName(proper);
      })();
    } catch (err) {
      console.error(err);
    } finally {
      setLoader(false);
    }
  }, [address]);
console.log(name)
  return (
    <>
   
        {name.map((item)=> 
        <li >{item.name}</li>)}
   
    </>
  );
};

export default GetCampaings;
