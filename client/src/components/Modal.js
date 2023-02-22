import { Contract, formatEther, parseEther, ethers} from "ethers";
import abi from "../abi.json";
import React from "react";
import { useState, useEffect } from "react";
import "../index.css";


const Modal = ({ active, setActive, address }) => {
  const [name, setName] = useState();
  const [site, setSite] = useState();
  const [video, setVideo] = useState();
  const [desc, setDesc] = useState();
  const [values, setValues] = useState();
  const [goal, setGoal] = useState();
  const [now, setNow] = useState();
  //Провайдер с подключением контракта..................
  const provider = new ethers.BrowserProvider(window.ethereum);
  const contract = new Contract(`${address}`, abi, provider);
  //...................................................
  // Для того чтобы задать переменные взятые из контракта
  useEffect(() => {
    (async () => {
      setName(await contract.name());
      setSite(await contract.site());
      setDesc(await contract.description());
      setVideo(await contract.video());
      setGoal(formatEther(await contract.goal()));
      setNow(formatEther(await contract.treasure()));
      console.log(goal);
      console.log(now);
      console.log(address);
    })();
  }, [active]);
  //.....................................................
  function getValues(e) {
    setValues(e.target.value);
  }
  //Название само за себя говорит ,отправка транзакции
  const transaction = async (e) => {
    e.preventDefault();
    const signer = await provider.getSigner();
    const signedContract = new Contract(address, abi, signer);
    try {
      await signedContract.donate({ value: parseEther(values) });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className="p-5 rounded-xl bg-white w-[1000px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="flex  p-2 mb-5">
            <div className="-ml-3 ">
              {video ? (
                <iframe
                  width="600px"
                  className="rounded-xl"
                  height={350}
                  src={`https://www.youtube.com/embed/${video}`}
                  title={name}
                ></iframe>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col w-full ml-3 rounded-xl items-center border border-solid border-red-600">
              <h1 className="font-bold text-[25px] mb-7">Progress</h1>
              <div className="flex">
                <h2 className="font-bold text-[19px] mr-10 ">Goal: {goal}</h2>
                <h2 className="font-bold text-[19px] ">Now: {now}</h2>
              </div>
              <form className="flex mt-10" onSubmit={transaction}>
                <input
                  className="border h-10 rounded-l-lg "
                  type="number"
                  step=".01"
                  value={values}
                  onChange={getValues}
                />
                <div className="flex justify-center items-end w-full h-full">
                  <input
                    type="submit"
                    value="Donate now"
                    className="rounded-r-lg bg-blue h-10 mb-5 text-white p-2 "
                  />
                </div>
              </form>
            </div>
          </div>
          <div>
            {/* <div className='h-[150px] overflow-y-auto'>
                            <h1 className="font-bold  text-[25px] ">Our Mission</h1>
                            <h2 className="text-left text-[19px] mb-10 ">{items.desc.Mission} </h2> 
                       </div> */}
            <h1 className="font-bold text-[25px]">Why Donate to {name}</h1>
            <h2 className="text-left text-[19px] ">{desc}</h2>
            <h3 className="font-bold text-[18px] mt-3">
              Wibsite:{" "}
              <a className="font-thin" href={`${site}`}>
                {site}
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
