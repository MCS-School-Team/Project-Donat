import logo from "../images/Logo_for_Header.png";
import { Link } from "react-router-dom";
import Button from "./Button";
import { ethers } from "ethers";

const Header = () => {
  async function onClickConnect() {
    let signer = null;
    let provider;
    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
      provider = ethers.getDefaultProvider();
    }
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts) {
          alert("Successfully log in MetaMask");
        }
      } catch (error) {
        if (error.code === 4001) {
          alert("You didn't enter MetaMask account. Please, repeat the excess");
        } else {
          alert(error.message);
        }
      }
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
    }
  }

  return (
    <>
      <div className="bg-light-brown  ">
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

            <Button
              text="Connect Wallet"
              type="button"
              buttonStyle="connect"
              onClick={onClickConnect}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
