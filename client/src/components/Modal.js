
import React from "react";
import "../index.css"

const Modal = ({active,setActive,items,index}) => {
    
 
    return (
    <div className={active? "modal active":"modal"}  onClick={()=> setActive(false)} >
            <div className="modal__content" onClick={e => e.stopPropagation()}>
           <h1 className="text-[30px]">Я модальное окно </h1>
            </div>
        </div>
    )
}
export default Modal;