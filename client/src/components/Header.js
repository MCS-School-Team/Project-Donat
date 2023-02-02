import logo from "../images/Logo_for_Header.png";

const Header = () => {
  return (
    <>
      <div className="bg-light-brown  ">
        <div className="flex flex-row justify-between">
          <img className="ml-20" src={logo} alt="Logo" />

          <div className=" flex space-x-12 justify-end items-center mr-12 ">
            <a
              href="/"
              className="bg-light-brown text-brown font-Chewy text-2xl font-black "
            >
              Home
            </a>
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

            <button className="bg-blue text-light-brown font-Chewy text-2xl p-4 rounded-3xl">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
