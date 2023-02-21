import logo from "../images/Logo_for_Header.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";
import { ethers } from "ethers";
import metamask from "../images/metamask.svg";


const Header = () => {
  const [currentAccount, setCurrentAccount] = useState();

  const onClickConnect = async () => {
    let signer = null;
    let provider;

    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
      provider = ethers.getDefaultProvider();
    }

    if (window.ethereum) {
      try {
        const accounts = await window.ethereum
          .request({
            method: "eth_requestAccounts",
          })
          .then((res) => {
            setCurrentAccount(res);
          });
        if (currentAccount) {
          alert("Successfully log in MetaMask");
        }
      } catch (error) {
        if (error.code === 4001) {
          alert("You didn't enter MetaMask account. Please, repeat the excess");
        }
        if (error.code === -32002) {
          alert(
            "You didn't enter MetaMask account. Please, enter the password"
          );
        } else {
          alert(error.message);
        }
      }
    } else {
         signer = await provider.getSigner();
    }
  };

  return (
    <>
      <div className="bg-light-brown ">
        <div className="flex flex-row justify-between">
          <img className="ml-20" src={logo} alt="Logo" />

          <div className=" flex space-x-12 justify-end items-center mr-12 ">
            <Link
              to="/"
              className="bg-light-brown text-brown font-Chewy text-2xl font-black "
            >
              Home
            </Link>
            <a
              href="#benefits"
              className="bg-light-brown text-brown font-Chewy text-2xl font-black "
            >
              Benefits
            </a>
            <a
              href="#about"
              className="bg-light-brown text-brown font-Chewy text-2xl font-black "
            >
              About
            </a>
            <div>
              <Button
                image={!currentAccount ? "" : <img  src={metamask} alt="meta" />}
                text={
                  !currentAccount
                    ? "Connect Wallet"
                    : `${currentAccount.map(
                        (account) =>
                          account.substring(0, 5) + "....." + account.slice(37)
                      )}`
                }
                type="button"
                buttonStyle={!currentAccount ? "connect" : "desabled"}
                onClick={onClickConnect}
                disabled={currentAccount}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
