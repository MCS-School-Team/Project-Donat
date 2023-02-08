import logo from "../images/Logo_for_Header.png";
import { Link } from "react-router-dom";
import Button from "./Button";
import { BrowserProvider, parseUnits } from "ethers";
import provider from "../provider";




const Header = () => {
  
  const onClickConnect = () => {
    let signer = null;

    let provider;
    if (window.ethereum == null) {
            console.log("MetaMask not installed; using read-only defaults")
        provider = ethers.getDefaultProvider()
    
    } else {
    
        provider = new ethers.BrowserProvider(window.ethereum)
            signer = provider.getSigner();
    }

  }
  return (
    <>
      <div className="bg-light-brown  ">
        <div className="flex flex-row justify-between">
          <img className="ml-20" src={logo} alt="Logo" />

          <div className=" flex space-x-12 justify-end items-center mr-12 ">
            <Link to="/"  
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
            type ="button"
            buttonStyle="connect"
            onClick ={onClickConnect}              
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
