import React from "react";
import { useState, useEffect } from "react";
import idvideo from "../images/idvideo.png";
import { parseEther, ethers } from "ethers";
import campaingFactory from "../data/campaingFactory";
import CreateImages from "./CreateImages";
import list from "../data/list";
import list2 from "../data/list2"

const CreateCampaign = () => {
  const [name, setName] = useState();
  const [description, setDesc] = useState();
  const [goal, setGoal] = useState(0);
  const [video, setYoutube] = useState();
  const [site, setWebsite] = useState();
  const [quest, setQuest] = useState(false);
  const[image, setImage] = useState('')
  const[timeStart, setTimeStart]=useState(new Date())
  const[timeStartInSec, setTimeStartInSec]=useState('')
  const[timeEnd, setTimeEnd] = useState(new Date())
  const[timeEndInSec, setTimeEndInSec] = useState('')
  const[country, setCountry]=useState()
  const[category, setCategory]=useState()
  const [date, setDate] = useState(new Date().getTime() / 1000);


  useEffect(()=>{
    const dateTimeStart = new Date(timeStart).getTime()/1000
    setTimeStartInSec(dateTimeStart)
  },[timeStart])
  
  useEffect(()=>{
    const dateTimeEnd = new Date(timeEnd).getTime()/1000
    setTimeEndInSec(dateTimeEnd)
  },[timeEnd])
  const timeEndInSecNumber = Number.parseInt(timeEndInSec, 10);
  const diffEndCampainginDay = Math.floor((timeEndInSecNumber - date) / 86400);
  console.log("diffEndCampainginDay:", diffEndCampainginDay);
  
  console.log('timeStart:',typeof timeStart, 'timeEnd:', typeof timeEnd)
  console.log('timeStartInSec:',timeStartInSec, 'timeEndInSec:', timeEndInSec)

  const handleOnChangeNameCampaign = (e) => {
    setName(e.target.value);
  };
  const handleOnChangeYoutube = (e) => {
    setYoutube(e.target.value);
  };
  const handleOnChangeWebsite = (e) => {
    setWebsite(e.target.value);
  };

  const handleOnChangeDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleOnChangeGoal = (e) => {
    setGoal(e.target.value);
  };
  const handleOnChangeTimeStart = (e) => {
    setTimeStart()
    setTimeStart(e.target.value);
  }  

  const handleOnChangeTimeEnd = (e) => {
    setTimeEnd();
    setTimeEnd(e.target.value);   
  };


  const handleOnChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const handleOnChangeCategory = (e) => {
    setCategory(e.target.value);
  };
  const provider = new ethers.BrowserProvider(window.ethereum);
  const createCampaignTransaction = async (e) => {
    e.preventDefault();
    const signer = await provider.getSigner();
    const signedContract = campaingFactory.connect(signer);
    try {
      await signedContract.createCampaing(
        name,
        description,
        goal,
        video,
        site,
        image,
        timeStartInSec,
        timeEndInSec,
        country,
        category

      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className = "bg-light-brown pb-8 bg-mounti2 h-100% bg-cover">
    <article className=" w-6/12 mx-auto bg-white drop-shadow-xl">
      {/*<section className="about-you m-10 border-2 mt-5 border-gray-300 rounded-lg p-7">*/}
      {/*    <p className="pb-5 text-brown font-Chewy text-2xl font-black">About you</p>*/}
      {/*    <form className="form-about-you flex-col">*/}
      {/*        <div className="grid grid-cols-2 gap-x-5 pb-5">*/}
      {/*            <div className="">*/}
      {/*                <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white"*/}
      {/*                       htmlFor="first-name">First*/}
      {/*                    name</label><br/>*/}
      {/*                <input*/}
      {/*                    className="first-name bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
      {/*                    name="first-name" type="text"/>*/}
      {/*            </div>*/}
      {/*            <div className="">*/}
      {/*                <label className="mb-2 text-sm font-medium text-gray-900 dark:text-whith"*/}
      {/*                       htmlFor="last-name">Last name</label><br/>*/}
      {/*                <input*/}
      {/*                    className="last-name bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
      {/*                    name="last-name" type="text"/>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*        <div className="grid grid-cols-2 gap-x-5 pb-5">*/}
      {/*            <div className="">*/}
      {/*                <label className="mb-2 text-sm font-medium text-gray-900 dark:text-whith"*/}
      {/*                       htmlFor="email block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label><br/>*/}
      {/*                <input*/}
      {/*                    className="email bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
      {/*                    name="email" type="text"/>*/}
      {/*            </div>*/}
      {/*            <div className="">*/}
      {/*                <label className="mb-2 text-sm font-medium text-gray-900 dark:text-whith"*/}
      {/*                       htmlFor="job-title block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job*/}
      {/*                    title</label><br/>*/}
      {/*                <input*/}
      {/*                    className="job-title bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
      {/*                    name="job-title" type="text"/>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*        <div>*/}
      {/*            <label className="mb-2 text-sm font-medium text-gray-900 dark:text-whith"*/}
      {/*                   htmlFor="phone-number">Phone*/}
      {/*                number</label><br/>*/}
      {/*            <input*/}
      {/*                className="phone-number bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
      {/*                name="phone-number" type="text"/>*/}
      {/*        </div>*/}
      {/*    </form>*/}
      {/*</section>*/}
      <section className="border-2  border-gray-300 rounded-lg  p-7 drop-shadow-xl">
        <p className="pb-5 text-black font-Chewy text-2xl text-brown">
          About your campaign
        </p>
        <form
          className="grid grid-cols-1 gap-y-5"
          onSubmit={createCampaignTransaction}
        >
          <div className="">
            <label
              className="mb-2 text-sm font-medium text-gray-900 dark:text-whith"
              htmlFor="name-campaign"
            >
              Name campaign
            </label>
            <br />
            <input
              className="phone-number bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="name-campaign"
              type="text"
              onChange={handleOnChangeNameCampaign}
            />
          </div>
          <div className="">
            <label
              className="mb-2 text-sm font-medium text-black dark:text-whith"
              htmlFor="description"
            >
              Description
            </label>
            <br />
            <textarea
              className="description bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="description"
              onChange={handleOnChangeDesc}
            />
          </div>
          <div className="">
            <label
              className="mb-2 text-sm font-medium text-gray-900 dark:text-whith"
              htmlFor="vide"
            >
              Youtube video ID{" "}
              {quest === false ? (
                <button onClick={() => setQuest(!quest)} className="font-bold bg-gray-300 p-2 m-1 rounded-lg">
                  ?
                </button>
              ) : (
                <div>
                  <button onClick={() => setQuest(!quest)}>
                    <img src={idvideo} alt="" />
                  </button>
                </div>
              )}
            </label>
            <br />
            <input
              className="phone-number bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="video"
              type="text"
              onChange={handleOnChangeYoutube}
            />
            <label
              className="mb-2 text-sm font-medium text-gray-900 dark:text-whith"
              htmlFor="website"
            >
              Link on your website
            </label>
            <br />
            <input
              className=" mb-2 phone-number bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="website"
              type="text"
              onChange={handleOnChangeWebsite}
            />
            <label
              className="mb-2 text-sm font-medium text-gray-900 dark:text-whith"
              htmlFor="goal"
            >
              Goal
            </label>
            <br />
            <input
              className="mb-2 phone-number bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="goal"
              step=".01"
              type="number"
              onChange={handleOnChangeGoal}
            />
              <label
              className="mb-2 text-sm font-medium text-gray-900 dark:text-whith"
              htmlFor="goal"
            >
              Time
            </label>
            <br />
            <div className =" mb-2  flex flex-row" >
            <input
              className=" mr-1 phone-number bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="timeStart"
              onChange={handleOnChangeTimeStart}
              type="date"
             />
              <input
              className="ml-1 phone-number bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="timeEnd"
              onChange={handleOnChangeTimeEnd}
              type="date"
             />
            </div>
           
            <label className="mb-2 text-sm font-medium text-gray-900 dark:text-whith"
            htmlFor="name-campaign">Country campaign</label><br/>
            <select
            className=" mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="country"
            onChange={handleOnChangeCountry}>
            <option value="All">Country</option>
        {list.map(item => item)}
            </select>
           
           
            <label className="mb-2 text-sm font-medium text-gray-900 dark:text-whith" htmlFor="category-campaign">Category campaign</label><br/>
            <select
           className=" mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             name="category"
             onChange={handleOnChangeCategory}>
           <option value="All">Choose category</option>
           {list2.map(item => item)}
          </select>
         
        
         

            <CreateImages setImgHash = {setImage}></CreateImages>
            <div>
      <label className=" text-sm font-medium text-gray-900 dark:text-whith">Image Hash</label>
      <input  className="phone-number bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name = "image" value={image} disabled="disabled"/>
      </div>
          </div>
          <div className=" grid justify-items-center">
            <button
              className="text-[17px] w-2/5 rounded-lg h-10 text-white bg-blue"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </section>
    </article>
    </div>
  );
};

export default CreateCampaign;
