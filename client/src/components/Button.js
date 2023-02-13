const Button = ({ buttonStyle, type, text, onClick,disabled}) => {
  return (
    <div className="p-1">
      <button
        className={
          buttonStyle === "connect" ? roundedButtonConnectWallet : null||
          buttonStyle === "desabled" ? desabledButton : null
        }
        type={type}
        onClick={onClick}
        disabled ={disabled}
      >
        {text}
      </button>
    </div>
  );
};
const roundedButtonConnectWallet =
  " min-w-xs max-w-xs transition ease-in-out delay-150  bg-blue text-light-brown text-ellipsis overflow-hidden ... font-Chewy text-xl p-4 rounded-3xl hover:bg-light-blue hover:-translate-y-1 hover:scale-110 duration-300 ";
const desabledButton = " bg-transparent border: none !important  text-brown font-Chewy text-xl font-black "
export default Button;
