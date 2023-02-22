import React from "react";
import { useState } from "react";
import idvideo from "../images/idvideo.png";
import { parseEther, ethers } from "ethers";
import campaingFactory from "../data/campaingFactory";
import CreateImages from "./CreateImages";

const CreateCampaign = () => {
  const [name, setName] = useState();
  const [description, setDesc] = useState();
  const [goal, setGoal] = useState(0);
  const [video, setYoutube] = useState();
  const [site, setWebsite] = useState();
  const [quest, setQuest] = useState(false);

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
  const provider = new ethers.BrowserProvider(window.ethereum);
  const createCampaignTransaction = async (e) => {
    e.preventDefault();
    const signer = await provider.getSigner();
    const signedContract = campaingFactory.connect(signer);
    try {
      await signedContract.createCampaing(
        name,
        description,
        parseEther(`${goal}`),
        video,
        site
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className = "bg-light-brown pb-8">
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
              className="phone-number bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              className="phone-number bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="goal"
              step=".01"
              type="number"
              onChange={handleOnChangeGoal}
            />

            {/*<div className="">*/}
            {/*    <label className="mb-2 text-sm font-medium text-gray-900 dark:text-whith"*/}
            {/*           htmlFor="name-campaign">Country*/}
            {/*        campaign</label><br/>*/}
            {/*    <select*/}
            {/*        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
            {/*        name="country-campaign">*/}
            {/*        <option value="All">Country</option>*/}
            {/*        {list.map(item => item)}*/}
            {/*    </select>*/}
            {/*</div>*/}
            {/*<div className="">*/}
            {/*    <label className="mb-2 text-sm font-medium text-gray-900 dark:text-whith" htmlFor="category-campaign">Category*/}
            {/*        campaign</label><br/>*/}
            {/*    <select*/}
            {/*        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
            {/*        name="category-campaign">*/}
            {/*        <option value="All">Filter by category</option>*/}
            {/*        <option value="addiction-recovery">Addiction Recovery</option>*/}
            {/*        <option value="animals">Animals</option>*/}
            {/*        <option value="arts-culture">Arts &amp; Culture</option>*/}
            {/*        <option value="children-youth">Children &amp; Youth</option>*/}
            {/*        <option value="community-foundations">Community Foundations</option>*/}
            {/*        <option value="community-service">Community Service</option>*/}
            {/*        <option value="developmental-disabilities">Developmental Disabilities</option>*/}
            {/*        <option value="disaster-response">Disaster Response</option>*/}
            {/*        <option value="education-training">Education &amp; Training</option>*/}
            {/*        <option value="environment">Environment</option>*/}
            {/*        <option value="first-responders-veterans">First Responders &amp; Veterans</option>*/}
            {/*        <option value="health-medicine">Health &amp; Medicine</option>*/}
            {/*        <option value="higher-education">Higher Education</option>*/}
            {/*        <option value="homelessness">Homelessness</option>*/}
            {/*        <option value="human-rights">Human Rights</option>*/}
            {/*        <option value="hunger">Hunger</option>*/}
            {/*        <option value="immigration-refugees">Immigration &amp; Refugees</option>*/}
            {/*        <option value="international-development">International Development</option>*/}
            {/*        <option value="legal-support">Legal Support</option>*/}
            {/*        <option value="lgbtq">LGBTQ</option>*/}
            {/*        <option value="racial-justice">Racial Justice</option>*/}
            {/*        <option value="religion-and-faith-based">Religion and Faith Based</option>*/}
            {/*        <option value="technology">Technology</option>*/}
            {/*        <option value="water-hygiene">Water &amp; Hygiene</option>*/}
            {/*        <option value="women-girls">Women &amp; Girls</option>*/}
            {/*    </select>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <label className="mb-2 text-sm font-medium text-gray-900 dark:text-whith"*/}
            {/*           htmlFor="logo-link">Logo link</label><br/>*/}
            {/*    <input*/}
            {/*        className="phone-number bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
            {/*        name="logo-link" type="url"/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <label className="mb-2 text-sm font-medium text-gray-900 dark:text-whith"*/}
            {/*           htmlFor="youtube-link">Youtube</label>*/}
            {/*           <label className="ml-2" htmlFor="youtube-link">{mouseClick ? <div className=""><button className="bg-red  p-1 rounded-sm" onClick={handleMouseClick}>close</button><img width="250px" src={idvideo} alt="" /></div>: <button  onClick={handleMouseClick}>?</button>}</label>*/}
            {/*           <br/>*/}
            {/*    <input*/}
            {/*        className="phone-number bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
            {/*        name="youtube-link" type="url"/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <label className="mb-2 text-sm font-medium text-gray-900 dark:text-whith"*/}
            {/*           htmlFor="youtube-link">Website</label><br/>*/}
            {/*    <input*/}
            {/*        className="phone-number bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
            {/*        name="website-link" type="url"/>*/}
            {/*</div>*/}
            <CreateImages ></CreateImages>
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
