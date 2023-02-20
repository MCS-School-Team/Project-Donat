import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { useState, useEffect } from "react";
import campaingFactory from "../data/campaingFactory";
import { Contract, ethers } from "ethers";
import abi from "../abi.json";

const Carousel = () => {
  const [name, setName] = useState([]);
  const [address, setAddress] = useState([]);
  const [loader, setLoader] = useState("true");
  let provider = new ethers.BrowserProvider(window.ethereum);
  useEffect(() => {
    (async () => {
      setAddress(await campaingFactory.campaingsArray());
    })();
  }, []);
  const comp = address.map((adr) => new Contract(`${adr}`, abi, provider));
  useEffect(() => {
    try {
      (async () => {
        let proper = [];
        for (let i = 0; i < comp.length; i++) {
          let por = {
            name: await comp[i].name(),
            description: await comp[i].description(),
            goal:await comp[i].goal(),
            video:await comp[i].video(),
            site:await comp[i].site(),
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
    <div className="flex justify-center m-10 p-4">
      <Splide
        options={{
          rewind: true,
          perPage: 3,
          width: 1000,
          gap: "3rem",
        }}
      >
        {name.map((item) => (
          <SplideSlide>
            <div className="border-2 border-brown rounded-xl p-10">
              <div className="font-Chewy text-2xl text-brown font-black text-center">
                <div>{item.name}</div>
                <div>{item.description}</div>
                <div>{item.goal}</div>
                <div>{item.video}</div>
                <div>{item.site}</div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
export default Carousel;
