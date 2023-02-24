import React from "react";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import { ethers, Contract, InfuraProvider } from "ethers";
import abi from "../abi.json";
import campaingFactory from "../data/campaingFactory";
import photoCamp from "../images/mount.png";
import filterName from "./serachFunc";
import list2 from "../data/list2";
import list from "../data/list";

function Search() {
  const [word, setWord] = useState();
  const [fin, setFin] = useState(false);
  const [findCategory, setCategory] = useState("All");
  const [findCountry, setCountry] = useState("All");
  const [items, setItems] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [forModal, setForModal] = useState(items[0]);
  const [searchName, setSearchName] = useState([]);
  const [loader, setLoader] = useState(true);
  const [address, setAddress] = useState([]);
  const [addrr, setAddrr] = useState();
  const[date, setDate] = useState(new Date().getTime()/1000)

  // Провайдер с подключением контракта..............................................
  const provider = new InfuraProvider("goerli");
  //..................................................................................
  // let address = ["0x59f496E5580B7dF7de7BFAAF629eBf88B9CD0a15","0x0cf20925394275b0B177813c88E1FB5E5DBA8922","0x894fc722Eac35af3d8e4D492C6f4b242ace6395D"] // Массив с адресами контрактов
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
            goal: await comp[i].goal(),
            video: await comp[i].video(),
            site: await comp[i].site(),
            image: await comp[i].image(),
            timeStartInSec: await comp[i].timeStartInSec(),
            timeEndInSec: await comp[i].timeEndInSec(),
            country: await comp[i].country,
            category: await comp[i].category,
          };
          proper.push(por);
        }
        setItems(proper);
      })();
    } catch (err) {
      console.error(err);
    }
  }, [address]);
  console.log(items);

  useEffect(() => {
    if (items.length !== 0) {
      let time = setTimeout(() => {
        setLoader(false);
      }, 500);
      return () => {
        clearTimeout(time);
      };
    }
  }, [items]);
const timeEndInSecNumber = Number.parseInt(items.map(item=>item.timeEndInSec), 10)
  const diffEndCampainginDay = Math.floor((timeEndInSecNumber-date)/86400)
console.log('diffEndCampainginDay:',diffEndCampainginDay)

  const changeSearch = (e) => {
    setWord();
    const word = e.target.value;
    setWord(word);
  };
  function handleGetCategory(e) {
    setCategory(e.target.value);
  }
  function handleGetCountry(e) {
    setCountry(e.target.value);
  }

  useEffect(() => {
    const filteredName = filterName(word, findCategory, findCountry, items);
    setSearchName(filteredName);
  }, [fin]);
  console.log(searchName);
  function handleSubmit(e) {
    setFin(!fin);
    e.preventDefault();
  }
  function modal(index = 0) {
    setModalActive(true);
    setForModal(items[index]);
    setAddrr(address[index]); // Тут получаем индекс из кнопки и передаём переменной addrr элемент массива address
  }
  if (loader === true) {
    return (
      <>
        <div className="flex justify-center items-center h-[700px]">
          <div className=" p-10 rounded-full animate-spin w-10 border border-dashed"></div>
        </div>
      </>
    );
  } else if (loader === false) {
    return (
      <>
        {/* Тут в Modal мы передаёи пропсы ,соответственно address={addrr} это передача адреса */}
        <Modal
          active={modalActive}
          setActive={setModalActive}
          items={forModal}
          address={addrr}
        />

        <div className="flex z-20 bg-cover  bg-gradient-to-b from-light-brown  to-light-brown-2  font-Chewy flex-col ">
          <div className="bg-mounti2 h-screen bg-cover">
            <div className="flex  justify-center  p-16">
              <form className=" w-3/5 opacity-90" onSubmit={handleSubmit}>
                <input
                  type="search"
                  className="w-10/12 h-[46px] text-[20px] border border-solid border-gray-300 rounded-l-lg  indent-2  "
                  placeholder="Search by name..."
                  onChange={changeSearch}
                />

                <button
                  type="submit"
                  className="bg-blue h-[48px] -ml-1 text-[20px] text-white border rounded-r-lg  w-2/12"
                  onClick={() => setFin(!fin)}
                >
                  Search
                </button>

                <div className="w-full flex justify-center">
                  <select
                    className="w-1/2 p-1 rounded-lg mr-2  border border-solid indent-2 border-gray-300 bg-white  mt-2 text-[20px]"
                    onChange={handleGetCategory}
                  >
                    <option value="All">Filter by category</option>
                    {list2.map((list) => list)}
                  </select>
                  <select
                    className="w-1/3 border border-solid  bg-white-r rounded-lg indent-2 border-gray-300 mt-2 text-[20px]"
                    onChange={handleGetCountry}
                  >
                    <option value="All">Country</option>
                    {list.map((cont) => cont)}
                  </select>
                </div>
              </form>
            </div>

            <div className=" flex  justify-center">
              <ul className=" flex   w-[1250px]  ">
                <div className="  flex   w-full flex-wrap ">
                  {searchName.length !== 0
                    ? searchName.map((item, index) => (
                        <li key={index}>
                          <div className="flex opacity-90 bg-white-r items-center text-[25px] rounded-lg  p-9 ml-7 mt-3 mb-4 flex-col drop-shadow-xl">
                            <img
                              src={photoCamp}
                              alt=""
                              className="h-[200px] w-[200px]"
                            />
                            {item.name}
                            <button
                              onClick={() => modal(index)}
                              className="text-[17px] w-10/12 rounded-lg h-10 mt-4 text-white bg-blue"
                            >
                              Learn more
                            </button>
                          </div>
                        </li>
                      ))
                    : items.map((item, index) => (
                        <li key={index}>
                          <div className="flex opacity-90 bg-white-r items-center text-[25px] rounded-lg  p-9 ml-7 mt-3 mb-4 flex-col drop-shadow-xl">
                            <img
                              src={photoCamp}
                              alt=""
                              className="h-[200px] w-[200px]"
                            />
                            {item.name}
                            <button
                              onClick={() => modal(index)}
                              className="text-[17px] w-10/12 rounded-lg h-10 mt-4 text-white bg-blue"
                            >
                              Learn more
                            </button>
                          </div>
                        </li>
                      ))}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Search;
