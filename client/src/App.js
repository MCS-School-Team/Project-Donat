import Layout from "./components/Layout.js";
import Header from "./components/Header.js";

import Search from "./components/Search&Donate";
import { Routes, Route} from "react-router-dom";
import CreateCampaign from "./components/CreateCampaign.js";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Create" element={<CreateCampaign />} />
      </Routes>
    </>
  );
};

export default App;
