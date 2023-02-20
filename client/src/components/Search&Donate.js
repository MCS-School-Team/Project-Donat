import React from "react";
import { useState,useEffect } from "react";
import Modal from "./Modal"
import list from "../data/list"
import list2 from "../data/list2"
import { compony } from "../data/ArrayCompony";
import { ethers,Contract,parseEther,formatEther } from "ethers";
import abi from "../abi.json"
import campaingFactory from "../data/campaingFactory";
import filterName from "./serachFunc";
import photoCamp from "../images/comp.png"


const lol = async() => {
  return [await campaingFactory.name()]
}


export default function Search(){
    const [findName, setFind] = useState("");
    const [fin, setFin] = useState(false);
    const [findCategory, setCategory] = useState("All");
    const [findCountry, setCountry] = useState("All");
    const [items, setItems] = useState(compony);
    const [modalActive, setModalActive] = useState(false)
    const [forModal ,setForModal]=useState(items[0])
    const [name,setName] = useState([])
    const [loader ,setLoader] = useState(true)
    const [po ,setPo] =useState(false)
    const [address ,setAddress]=useState([])
    const [addrr,setAddrr] = useState()
    // Провайдер с подключением контракта..............................................
    let contractFctory;
    const provider = new ethers.BrowserProvider(window.ethereum); 
    contractFctory = campaingFactory
    //..................................................................................


    // let address = ["0x59f496E5580B7dF7de7BFAAF629eBf88B9CD0a15","0x0cf20925394275b0B177813c88E1FB5E5DBA8922","0x894fc722Eac35af3d8e4D492C6f4b242ace6395D"] // Массив с адресами контрактов 

    //Получение адресов...............................................................
    
    useEffect(() => { 
       (async () => {
       setAddress(await contractFctory.campaingsArray()) 
       })()  
    },[])
    const comp = address.map(adr => new Contract(`${adr}`,abi,provider))
    useEffect(()=>{ 
      try{
       (async () => {
       let proper = []
       for(let i = 0;i<comp.length;i++ ){
       let por = await comp[i].name()
       proper.push(por)
     } 
     setName(proper)
     })()
      } catch(err){
       console.error(err)
      }
        
     },[address])
     useEffect(()=>{
      let time = setTimeout(()=>{
        setLoader(false)
      },2000)
      return()=>{
        clearTimeout(time)
      }
     },[name])
   console.log(name)
    //.................................................................................
    // (async()=>{
    //   let proper = []
    //  for(let i = 0;i<comp.length;i++ ){
    //   let por = await comp[i].name()
    //   proper.push(por)
    // } 
    // setName(proper)
    // })()

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
    function modal(index = 0){

        setModalActive(true)
        setForModal(items[index])
        setAddrr(address[index])// Тут получаем индекс из кнопки и передаём переменной addrr элемент массива address
    }
    if(loader === true){
     return(
      <div className="flex justify-center items-center h-[700px]">
      <div className=" p-10 rounded-full animate-spin w-10 border border-dashed" />
      </div>
     ) 
    }else if(loader === false){
   return (
    <>
    {/* Тут в Modal мы передаёи пропсы ,соответственно address={addrr} это передача адреса */}
    <Modal active={modalActive} setActive={setModalActive} items={forModal} address={addrr} /> 
    <div className="flex  bg-cover bg-gradient-to-b from-light-brown z-20 to-light-brown-2 font-Chewy flex-col ">
      <div className="bg-mounti2 bg-cover ">
    <div className="flex  justify-center  p-16">
    <form className=" w-3/5 opacity-90" onSubmit={handleSubmit}>
        <input type="search" className="w-10/12 h-[46px] text-[20px] border border-solid border-gray-300 rounded-l-lg  indent-2  " placeholder="Search by name..." value={findName} onChange={getName} />
        <input type="submit"className="bg-blue h-[48px] -ml-1 text-[20px] text-white border rounded-r-lg  w-2/12" value="Search" />
        <div className="w-full flex justify-center">
        <select className="w-1/3 p-1 rounded-lg mr-2  border border-solid indent-2 border-gray-300 bg-white  mt-2 text-[20px]" onChange={getCategory}>
        <option value="All">Filter by category</option>
        {/* {list2.map(list => <option key={list} >{list}</option>)} */}
        </select>
        <select className="w-1/3 border border-solid  bg-white-r rounded-lg indent-2 border-gray-300 mt-2 text-[20px]" onChange={getCountry}>
          <option value="All">Country</option>
          {/* {list.map(item => <option key={item} >{item}</option> )} */}
        </select>
        </div>
      </form>
    </div>
    <div className=" flex  justify-center">
        <ul className=" flex   w-[1250px]  ">
 <div className="  flex   w-full flex-wrap ">
          {name.map((item, index) => (
            <li key={index}>
                <div className="flex opacity-90 bg-white-r items-center text-[25px] rounded-lg  p-9 ml-7 mt-3 mb-4 flex-col drop-shadow-xl">
                <img src={photoCamp} alt="" className="h-[200px] w-[200px]"  />
                {item}
                <button onClick={()=>modal(index)} className="text-[17px] w-10/12 rounded-lg h-10 mt-4 text-white bg-blue">Learn more</button>
                </div>
                </li>
          ))}
  </div>
        </ul>
      </div>
      </div>
      </div> 
    </>     
    )
          }           
}




