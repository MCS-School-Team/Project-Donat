import { useState, useEffect } from "react";
import campaingFactory from "../data/campaingFactory";
import {Contract,ethers} from "ethers"
import abi from "../abi.json"

const GetCampaings = () => {
const[name, setName] = useState()
  const [campaings, setCampaings] = useState(['0x44cB35E5121F939b99c028DEC44D975F1a3EC663','0x46C484ED9C880219Dc9d881F088BcC56A8929707', '0x7bFc3610376b46d940f246261CFFd354Ed971939', '0x8eDcc7Fc4fbb8B6398b5ea528D5f12B783C545c8']);
 const [isActive, setIsActive] = useState('true')
//   useEffect(() => {
//     (async () => {
//       try{
//       const campaingsArray = await campaingFactory.campaingsArray();
//       if(isActive === 'true'){
//         setCampaings(campaingsArray)
//       }
//       setIsActive(false)
//       console.log("campaingsArray:", campaingsArray);
//     } 
//     catch(error){
//       console.error(error)
//     }
// console.log("campaings:", campaings)
  
//   })();
// },[campaings])

let provider = new ethers.BrowserProvider(window.ethereum);
const contract = campaings.map ((address)=> new Contract(address, abi, provider))
console.log("contract:", contract)


useEffect(() => {
  (async()=>{
const name = await contract.map(campaing=>campaing.name())
if(isActive === 'true'){


setName(name)
setIsActive(false)
  }


})()
},[name])

  console.log("name:",name)
}
export default GetCampaings;
