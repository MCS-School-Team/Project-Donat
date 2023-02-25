import benefits from "../images/Benefits.png";

const Benefits = () => {
  return (
    <div className="flex justify-center text-black  p-10  " id="benefits">
      <div>
        <img src={benefits} alt="" className=" mr-48 h-[450px] w-[450px]" />
      </div>

      <div className=" ml-12 flex">
        <div className="flex ml-30 text-[20px] flex-col justify-center">
          <h1 className="font-bold text-[25px] mb-4">
            Get tokens for donation
          </h1>
          <p className="w-full">For every 1 ETH get 1 KickToken

          </p>
        </div>
      </div>
    </div>
  );
};
export default Benefits;
