
import React from "react";
import "../index.css"
// let loader = (now,total) => {
//    let resault = now/total*100
//    resault.join("%")
//    return console.log(resault)
// }
const Modal = ({active,setActive,items}) => {
    
    return (
    <div className={active ? "modal active":"modal"}  onClick={()=> setActive(false)} >
        <div className="p-5 rounded-xl bg-white w-[1000px]" onClick={e => e.stopPropagation()}>
               
                <div>
                    <div className="flex border border-solid border-black p-2 mb-5">
                        <div className=" ">{items.video ? <iframe width="560px" height={315} src={`https://www.youtube.com/embed/${items.video}`} title={items.name}></iframe>  : items.image }</div>
                        <div className="flex flex-col w-full ml-3 items-center border border-solid border-red-600">
                           <h1>Сбор средств</h1>
                        </div>
                    </div>
                    <div>
                       <h1>{items.desc.Mission} </h1> 
                       <h2>{items.desc.WhyDonate}</h2>
                    </div>   
                </div>
        </div>
    
    </div>
    )
}
export default Modal;
