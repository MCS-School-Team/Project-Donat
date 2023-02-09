import React from "react";
import { useState,useEffect } from "react";
import Modal from "./Modal"
import list from "../data/list"
import { compony } from "../data/ArrayCompony";
import { ethers,Contract,parseEther,formatEther } from "ethers";
import abi from "../abi.json"


const filterName = (findname, findCategory, findcountry, items) => {
    if (!findname) {
      return items;
    } else {
      if (findCategory === "All" && findcountry === "All") {
        return items.filter(({ name }) =>
          name.toLowerCase().includes(findname.toLowerCase())
        );
      } else if (findCategory !== "All" && findcountry === "All") {
        let findedcity = items.filter(({ category}) => category.includes(findCategory));
        return findedcity.filter(({ name }) =>
          name.toLowerCase().includes(findname.toLowerCase())
        );
      } else if (findCategory === "All" && findcountry !== "All") {
        let findedcountri = items.filter(({ countri }) =>
          countri.includes(findcountry)
        );
        return findedcountri.filter(({ name }) =>
          name.toLowerCase().includes(findname.toLowerCase())
        );
      } else if (findCategory !== "All" && findcountry !== "All") {
        let findall = items.filter(({ countri }) =>
          countri.includes(findcountry)
        );
        let findedall = findall.filter(({ city }) => city.includes(findCategory));
        return findedall.filter(({ name }) =>
          name.toLowerCase().includes(findname.toLowerCase())
        );
      }
    }
  };

export default function Search(){
    const [findName, setFind] = useState("");
    const [fin, setFin] = useState(false);
    const [findCategory, setCategory] = useState("All");
    const [findCountry, setCountry] = useState("All");
    const [items, setItems] = useState(compony);
    const [modalActive, setModalActive] = useState(false)
    const [forModal ,setForModal]=useState(items[0])
    const [name,setName] = useState()
    const [signer ,setSigner] = useState()
    const [addrr,setAddrr] = useState()
    // Провайдер с подключением контракта..............................................
    let contract;
    const provider = new ethers.BrowserProvider(window.ethereum); 
    contract = new Contract("0x59f496E5580B7dF7de7BFAAF629eBf88B9CD0a15", abi, provider)
    //..................................................................................


    let address = ["0x59f496E5580B7dF7de7BFAAF629eBf88B9CD0a15"] // Массив с адресами контрактов 


    //Получение имени..................................................................
    useEffect(() => {
      (async () => {
         setName( await contract.name())
      })()
    },[])
    //.................................................................................

    function getName(e) {
      setFind(e.target.value);
    }
    function getCategory(e) {
      setCategory(e.target.value);
    }
    function getCountry(e) {
      setCountry(e.target.value);
    }
    
    useEffect(() => {
      const filteredName = filterName(findName, findCategory, findCountry, compony);
      setItems(filteredName);
    }, [fin]);

    function handleSubmit(e) {
      setFin(!fin);
      e.preventDefault();
    }
    function modal(index){
        setModalActive(true)
        setForModal(items[index])
        setAddrr(address[index])// Тут получаем индекс из кнопки и передаём переменной addrr элемент массива address 
    }
    console.log(forModal)
   
   return (
    <>
    {/* Тут в Modal мы передаёи пропсы ,соответственно address={addrr} это передача адреса */}
    <Modal active={modalActive} setActive={setModalActive} items={forModal} address={addrr} /> 
    <div className="flex font-Chewy flex-col ">
    <div className="flex  justify-center  p-16">
    <form className=" w-3/5 " onSubmit={handleSubmit}>
        <input type="search" className="w-10/12 h-[46px] text-[20px] border border-solid border-gray-300 rounded-l-lg  indent-2  " placeholder="Search by name..." value={findName} onChange={getName} />
        <input type="submit"className="bg-blue h-[48px] -ml-1 text-[20px] text-white border rounded-r-lg  w-2/12" value="Search" />
        <div className="w-full flex justify-center">
        <select className="w-1/3 p-1 rounded-lg mr-2  border border-solid indent-2 border-gray-300 bg-white  mt-2 text-[20px]" onChange={getCategory}>
        <option value="All">Filter by category</option>
        <option value="addiction-recovery">Addiction Recovery</option>
        <option value="animals">Animals</option>
        <option value="arts-culture">Arts &amp; Culture</option>
        <option value="children-youth">Children &amp; Youth</option>
        <option value="community-foundations">Community Foundations</option>
        <option value="community-service">Community Service</option>
        <option value="developmental-disabilities">Developmental Disabilities</option>
        <option value="disaster-response">Disaster Response</option>
        <option value="education-training">Education &amp; Training</option>
        <option value="environment">Environment</option>
        <option value="first-responders-veterans">First Responders &amp; Veterans</option>
        <option value="health-medicine">Health &amp; Medicine</option>
        <option value="higher-education">Higher Education</option>
        <option value="homelessness">Homelessness</option>
        <option value="human-rights">Human Rights</option>
        <option value="hunger">Hunger</option>
        <option value="immigration-refugees">Immigration &amp; Refugees</option>
        <option value="international-development">International Development</option>
        <option value="legal-support">Legal Support</option>
        <option value="lgbtq">LGBTQ</option>
        <option value="racial-justice">Racial Justice</option>
        <option value="religion-and-faith-based">Religion and Faith Based</option>
        <option value="technology">Technology</option>
        <option value="water-hygiene">Water &amp; Hygiene</option>
        <option value="women-girls">Women &amp; Girls</option>
        </select>
        <select className="w-1/3 border border-solid  bg-white-r rounded-lg indent-2 border-gray-300 mt-2 text-[20px]" onChange={getCountry}>
          <option value="All">Country</option>
          {list.map(item => item)}
        </select>
        </div>
      </form>
    </div>
    <div className=" flex  justify-center">
        <ul className=" flex   w-[1250px]  ">
 <div className="  flex   w-full flex-wrap ">
          {items.map((item, index) => (
            <li key={index}>
                <div className="flex bg-white-r items-center text-[25px] rounded-lg  p-9 ml-7 mt-3 mb-4 flex-col drop-shadow-xl">
                {item.image}
                {name} 
                <button onClick={()=>modal(0)} className="text-[17px] w-10/12 rounded-lg h-10 mt-4 text-white bg-blue">Learn more</button>
                </div>
                </li>
          ))}
  </div>
        </ul>
    
      </div>
      </div>
    </>
    )
}




