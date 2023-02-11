import { compony } from "../data/ArrayCompony";
import { useState, useRef} from "react";

const Carousel = () => {
  const [items, setItems] = useState(compony);

  const carousel = useRef(null);
  console.log(items);

  return (
    <div className="bg-light-brown carousel mx-auto">
      <div className="flex justify-between w-full h-full">
        <div
          ref={carousel}
          className="carousel-container relative flex overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 ml-6"
        >
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className=" border-2 border-solid border-brown  m-10 rounded carousel-item text-center relative w-70 h-64 snap-start"
              >
                {item.image}

                <h3 className="text-brown mx-auto text-xl font-Chewy font-black">
                  {item.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Carousel;
