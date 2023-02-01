import Layout from "./components/Layout";
import Header from "./components/Header";
import { useState } from "react";

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
    </>
  );
};

export default App;
