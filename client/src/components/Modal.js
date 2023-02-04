
import { width } from "@mui/system";
import React from "react";
import "../index.css"
let loader = (now,total) => {
let n = Number.parseInt(now, 10)
let t =  Number.parseInt(total, 10)

let e = n/t*100 

return e 
}

const Modal = ({active,setActive,items}) => {
  let p =  loader(items.nowTotals,items.total)
  console.log(p)
    return (
    <div className={active ? "modal active":"modal"}  onClick={()=> setActive(false)} >
        <div className="p-5 rounded-xl bg-white w-[1000px]" onClick={e => e.stopPropagation()}>
               
                <div>
                    <div className="flex  p-2 mb-5">
                        <div className="-ml-3 ">{items.video ? <iframe width="600px" height={350} src={`https://www.youtube.com/embed/${items.video}`} title={items.name}></iframe>  : items.image }</div>
                        <div className="flex flex-col w-full ml-3 items-center border border-solid border-red-600">
                           <h1 className="font-bold text-[25px] mb-7" >Progress</h1>
                           <div className="flex">
                           <h2 className="font-bold text-[19px] mr-10 " >Need: {items.total}</h2>
                           <h2 className="font-bold text-[19px] ">Now: {items.nowTotals}</h2>
                           
                           </div>
                           <h3>Stil need {loader(items.nowTotals,items.total)}%</h3>
                           <div className="flex w-full border border-black">
                           <div  className={`bg-red w-[${p}%] h-3`}></div>
                           </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className="font-bold text-[25px] ">Our Mission</h1>
                            <h2 className="text-left text-[19px] mb-10 ">{items.desc.Mission} </h2> 
                       </div>
                       <h1 className="font-bold text-[25px]">Why Donate to{items.name}</h1>
                       <h2 className="text-left text-[19px] ">{items.desc.WhyDonate}</h2>
                       <h3 className="font-bold text-[18px] mt-3">Wibsite: <a className="font-thin" href={`${items.website}`} >{items.website}</a></h3>
                    </div>  
                </div>
        </div>
    
    </div>
    )
}
export default Modal;



// let n = Number.parseInt(now, 10)
// let t =  Number.parseInt(total, 10)
// let resault = t - n
// return resault
