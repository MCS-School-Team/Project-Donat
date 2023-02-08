import { compony } from "../data/ArrayCompony";
import { useState } from "react";

const Carousel = () => {
  const [items, setItems] = useState(compony);
  return (
    <>
      <div className="carousel-caption hidden md:block absolute text-center">
          
            {items.map((item) => (
              
                <img key = {items.length.toString()} src ={item.image} alt = {item.name}/>                
               
            
            ))}
               <h1>Карусель</h1>
       
      </div>

   
    </>
  );
};

export default Carousel;
