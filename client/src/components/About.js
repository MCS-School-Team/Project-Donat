import box from "../images/box.png";
const About=()=>{
    return(
        <div className="text-black " id="about">
          <div className=" ml-12 flex">

            <div className="flex ml-48 text-[20px] flex-col justify-center">
              <h1 className="font-bold text-[25px] mb-4">
                A Crypto Donation Ecosystem
              </h1>
              <p className="w-1/2">
                The Donkey_Hot is the #1 cryptocurrency donation solution that
                provides an ecosystem for charities to raise funds in ETH, get
                found by cryptocurrency donors, receive funds instantly, and
                become part of a network of cryptocurrency media partners to
                support their missions.
              </p>
            </div>
            <img src={box} alt="" className=" mr-48 h-[450px] w-[450px]" />
          </div>
        </div>

 
    )
}
export default About;