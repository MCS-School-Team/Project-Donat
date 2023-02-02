import Layout from "./components/Layout.js";
import Header from "./components/Header.js";
import About from "./components/About.js";
import { useState } from "react";
import Benefits from "./components/Benefits.js";

const App = () => {
  const [screen, setScreen] = useState({
    isCreateCampaign: false,
    isDonateCrypto: false,
    isHome: true,
  });

  const handleSetCreateCampaignScreen = () => {
    setScreen({
      isCreateCampaign: true,
      isDonateCrypto: false,
      isHome: false,
    });
  };

  const handleSetHomeScreen = () => {
    setScreen({
      isCreateCampaign: false,
      isDonateCrypto: false,
      isHome: true,
    });
  };

  const handleSetDonateCryptoScreen = () => {
    setScreen({
      isCreateCampaign: false,
      isDonateCrypto: true,
      isHome: false,
    })
  }

  return (
    <>
      <Header handleSetHomeScreen = {handleSetHomeScreen}/>
      <Layout
        handleSetCreateCampaign={handleSetCreateCampaignScreen}
        handleSetDonateCryptoScreen={handleSetDonateCryptoScreen}
        screen={screen}
      ></Layout>
      <Benefits></Benefits>
      <About></About>
    </>
  );
};

export default App;
