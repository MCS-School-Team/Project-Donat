import { compony } from "../data/ArrayCompony";
import { Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Carousel = () => {
  return (
    <div className = "flex justify-center m-10 p-4">
    <Splide
      options={{
        rewind: true,
        perPage: 3,
        width: 800,
        gap: "2rem",
      }}
    >
      
      {compony.map((item) => (
        <SplideSlide key={item.image.src}>
          <div className = "border-2 border-brown rounded-xl">
            <div className = "flex justify-center">{item.image}</div>
            <div className = "font-Chewy text-2xl text-brown font-black text-center">{item.name}</div>
            </div></SplideSlide>
      ))}
      
    </Splide>
    </div>
  );
};
export default Carousel;
