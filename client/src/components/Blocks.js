import { Link } from "react-router-dom"


const Blocks=()=>{
    return (<>
<div className="flex mt-12 mb-12 justify-center  ">                  
                  <div className="flex-none mr-10 w-1/3 flex-col rounded-xl  bg-md-brown text-brown font-Chewy text-2xl  font-black text-center p-10 ">
                   
                    <div className="mb-12">
                      <p className="mb-4">Create campaign</p>
                      <p>Realise your project and make your life brighter</p>
                    </div>
                   
                    <Link
                      className="bg-light-brown-2 text-brown rounded-lg text-center border-2 border-solid border-brown p-4 "
                      to="/Create"
                    >
                      Create campaign
                    </Link>
                   
                  </div>
                  <div id="rab"></div>
                  <div className="flex-none w-1/3 flex-col rounded-xl bg-blue text-white font-Chewy text-2xl font-black text-center p-10 m-1">
                    <div className="mb-12">
                      <p className="mb-4">Donate crypto</p>
                      <p className="font-normal">
                        Donate Ethereum to nonprofits campaign and receive
                        benefits
                      </p>
                    </div>

                    <Link
                      className=" bg-blue text-white rounded-lg text-center border-2 border-solid border-white p-4"
                      to="/Search"
                    >
                      Donate Now
                    </Link>
                  </div>
                </div>
                </>
            )
            }
            export default Blocks