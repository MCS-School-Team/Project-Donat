import { useState, useEffect } from "react";
import campaingFactory from "../data/campaingFactory";

const GetCampaings = () => {

  const [campaings, setCampaings] = useState();

  useEffect(() => {
    (async () => {
      try{
      const campaingsArray = await campaingFactory.campaingsArray();
      setCampaings(campaingsArray)
      console.log("campaingsArray:", campaingsArray);
    } 
    catch(error){
      console.error(error)
    }

  
  })();
},[])

};
export default GetCampaings;
