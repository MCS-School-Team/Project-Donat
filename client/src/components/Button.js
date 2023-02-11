const Button = ({ buttonStyle, type, text, onClick}) => {
  return (
    <div className="p-1">
      <button
        className={
          buttonStyle === "connect" ? roundedButtonConnectWallet : null
        }
        type={type}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};
const roundedButtonConnectWallet =
  "bg-blue text-light-brown font-Chewy text-2xl p-4 rounded-3xl";

export default Button;
