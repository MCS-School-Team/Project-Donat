import React, { useEffect } from "react";
import { useState } from "react";
import {ethers,Contract,formatEther} from "ethers"
import abi from "../abi.json"
import campaingFactory from"../data/campaingFactory"


export default function Withdraw({owner,user,goal,now,address,time}){
const [donate,setDonate] = useState()
const [secontact,setSecontract] = useState()
const [contrib ,setContrib] = useState()
const provider = new ethers.BrowserProvider(window.ethereum);
useEffect(()=>{
(async()=>{
    
     try{const  signer = await provider.getSigner()
     const signedContract = new Contract(address, abi, signer)
     setContrib(formatEther(await signedContract.check_donate()))
     }catch(err){
        console.error(err)
     }
})()
},[])
  function withdrawOwnerMoney(){
   (async()=>{
    
    const  signer = await provider.getSigner()
    const signedContract = new Contract(address, abi, signer)
    try {
        await signedContract.withdraw()
    } catch (err) {
        console.log(err);
    }
   })()
  }
  function moneyBack(){
    (async()=>{
        const  signer = await provider.getSigner()
        const signedContract = new Contract(address, abi, signer)
        try {
            await signedContract.money_back()
        } catch (err) {
            console.log(err);
        }
    })()
  }
  if(contrib === undefined){
    return(
  <div className="flex justify-center h-full items-center ">
    <div className="text-black">Loading..</div>
  </div>
    )
  }else {

        if(user === owner.toLowerCase() ){
           return(
            <div className="flex flex-col h-full items-center justify-around"> 
              <h1 className="font-bold text-[20px]">You are owner</h1>
              <h1>And you {now < goal? "can't withdraw now":"can withdraw rigth now"}</h1>
              <button className="border rounded-xl bg-blue text-white p-2" disabled={now < goal} onClick={withdrawOwnerMoney}>withdraw</button>
            </div> 
           )
        }else if (user !== owner.toLowerCase()){
            return(
              <div className="flex flex-col h-full items-center justify-around">
                    <h1 className="font-bold text-[20px]">{time !== 0 ?"Now you can't withdraw":"You can withdraw now"}</h1> 
                    <h2 className="font-bold text-[20px]">Your contribution {contrib}ETH</h2> 
                    <button disabled={time > 0} className="border rounded-xl bg-blue text-white p-2" onClick={ moneyBack}>withdraw</button> 
                </div>  
            )
             
        }      
    }                                      
  }
       
    
