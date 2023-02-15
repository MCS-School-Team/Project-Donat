import React, { useState, useEffect } from 'react';
import {Contract,ethers} from 'ethers';
import abi from "./abi.json"
const Campaing = () => {
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [goal, setGoal] = useState('');
    const [treasure, setTreasure] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('');
    const [donaters, setDonaters] = useState('');
    const provider = new ethers.BrowserProvider(window.ethereum);
    provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new Contract(
        '0x59f496E5580B7dF7de7BFAAF629eBf88B9CD0a15',
        abi,
        provider
    );

    const getName = async () => {
        setName(await contract.name());
    }

    const checkDonate = async () => {
        try {
            const response = await contract.check_donate();
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    const donate = async () => {
        try {
            await contract.donate();
        } catch (err) {
            console.log(err);
        }
    };

    const withdraw = async () => {
        try {
            await contract.withdraw();
        } catch (err) {
            console.log(err);
        }
    };

    const moneyBack = async () => {
        try {
            await contract.money_back();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h1>Campaing</h1>
            <p>Name: {name}</p>
            <p>Owner: {owner}</p>
            <p>Goal: {goal}</p>
            <p>Treasure: {treasure}</p>
            <p>Description: {description}</p>
            <p>Time: {time}</p>
            <p>Donaters: {donaters}</p>
            <button onClick={getName}>GetName</button>
            <button onClick={checkDonate}>Check Donate</button>
            <button onClick={donate}>Donate</button>
            <button onClick={withdraw}>Withdraw</button>
            <button onClick={moneyBack}>Money Back</button>
        </div>
    );
};

export default Campaing;