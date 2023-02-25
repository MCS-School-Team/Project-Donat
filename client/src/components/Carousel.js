import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useState, useEffect } from "react";
import campaingFactory from "../data/campaingFactory";
import { Contract, ethers } from "ethers";
import abi from "../abi.json";
import arrayImages from "../data/arrayImages";

const Carousel = () => {
  const [name, setName] = useState([]);
  const [address, setAddress] = useState([]);
  const [loader, setLoader] = useState("true");
  let provider = new ethers.BrowserProvider(window.ethereum);
  useEffect(() => {
    (async () => {
      setAddress(await campaingFactory.campaingsArray());
    })();
    console.log(address)
  }, []);
  const comp = address.map((adr) => new Contract(`${adr}`, abi, provider));
  useEffect(() => {
    try {
      (async () => {
        let proper = [];
        for (let i = 0; i < comp.length; i++) {
          let por = {
            name: await comp[i].name(),
             image:arrayImages[i]
          };
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
  console.log(name);

  return (
    <div className="flex justify-center m-30 p-4">
      <Splide
        options={{
          rewind: true,
          perPage: 3,
          width: 1000,
          gap: "3rem",
        }}
      >
        {name.map((item,index) => (
          <SplideSlide>
            <div className="rounded-xl p-10">
              <div className="font-Chewy text-2xl text-brown font-black text-center">
              <div >{item.image}</div>
                <div key = {index}>{item.name}</div>             
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
export default Carousel;
