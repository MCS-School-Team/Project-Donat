import zaman from "../images/Zaman.jpeg"
import GameToGrow from "../images/GameToGrow.jpeg"
import Friendship from "../images/Friendship-2.jpg"
import ByeBye from "../images/ByeBye.jpg"


export const compony = [
    {
      name: "MMM",
      category: "education-training",
      countri: "RU",
      image: <img src={zaman} alt="" />,
      desc: {
        Mission: "",
        WhyDonate:""
      }

    },
    {
      name: "mpet",
      category: "community-service",
      countri: "US",
      image: <img src={GameToGrow} alt="" />,
      desc: {
        Mission: "",
        WhyDonate:""
      }
    },
     {
        name: "For Friend",
        category: "human-rights",
        countri: "CV",
        image: <img src={Friendship} alt="" className="h-[200px] w-[200px]" />,
        desc: {
          Mission: "",
          WhyDonate:""
        }
      },
     {
        name: "Bye Bye Plastic",
        category: "animals",
        countri: "CU",
        image: <img src={ByeBye} alt="" className="h-[200px] w-[200px]" />,
        video:"rYeRFC3KYww",
        desc: {
          Mission:"Bye Bye Plastic is a disruptive non-profit removing single-use plastics from the music & events industry! We use the power of music, the strongest social connector, to create impact & change for our planet.",
          WhyDonate:"Eco-Rider: for touring artists who want to use their voice & platform to make a change and stay plastic-free while traveling around the globe Clean The Beat: our global cleanup & awareness program activating local DJs, music-enthusiasts, & eco-community to work as a collective to divert waste & plastics from the environment to proper management systems and back into the economy using game-changing plastic circularity technology.   $BYEBYE Eco-Token: The first impact-to-earn token rewarding our community for eco-positive actions.   Stay’ge Positive: mentorship program custom-crafted for artists who want to become creative leaders of climate action, & navigate ways to efficiently relay this journey to their fans.   Plastic-Free Transitions: Our phase-by-phase guide to help clubs & event/festival producers reduce their plastic-footprint  & more! "
        }
      }
    
  ];