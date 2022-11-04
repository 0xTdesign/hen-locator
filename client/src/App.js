import "./Reset.css";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Price from "./components/Price/Price";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Chikn from "./pages/Chikn/Chikn";
import Edgyeggs from "./pages/Edgyeggs/Edgyeggs";
import Create from "./pages/CreateChikn/Create";
import Coop from "./pages/Coop/Coop";
import { SEARCH_API, DETAILS_API, REPORT_API } from "./api";

function App() {
  /**************
  usestate Chikn API 
  *************/
  const [pageClass, setpageClass] = useState("home");

  const [reports, setreports] = useState({
    feedMinted: "",
    feedBurned: "",
    eggBurned: "",
    eggMinted: "",
    avax: "",
    feed: "",
    fert: "",
  });

  const [formChiknSearch, setformChiknSearch] = useState({
    chiknId: "",
    roostrId: "",
  });

  const [chiknSearch, setChiknSearch] = useState({
    name: "",
    image: "",
  });
  const [roostrSearch, setRoostrSearch] = useState({
    name: "",
    image: "",
  });

  /**************
  useEffect form 
  *************/

  useEffect(() => {
    getReports();
  }, []);

  /**************
  form functions
   *************/

  const updateRooster = async (e) => {
    e.preventDefault();
  };

  const updateChikn = async (e) => {
    e.preventDefault();
  };

  const getAllChikn = async () => {};

  const getAllRooster = async () => {};

  /**************
  functions Chikn 
   *************/

  const handleSearch = (e) => {
    setformChiknSearch({ ...formChiknSearch, [e.target.name]: e.target.value });
    console.log(formChiknSearch);
  };

  const getReports = async () => {
    const API_FEED = REPORT_API("FeedSummary");
    const resFeed = await axios.get(API_FEED);
    const API_EGG = REPORT_API("EggSummary");
    const resEgg = await axios.get(API_EGG);
    const API_PRICE = REPORT_API("CurrencyReport");
    const resPrice = await axios.get(API_PRICE);

    setreports({
      feedMinted: resFeed.data.minted,
      feedBurned: resFeed.data.burned,
      eggBurned: resEgg.data.burned,
      eggMinted: resEgg.data.minted,
      avax: resPrice.data.quotes.AVAX.quote,
      feed: resPrice.data.quotes.FEED.quote,
      fert: resPrice.data.quotes.FERT.quote,
    });
  };

  const getSearchChikn = async (e) => {
    e.preventDefault();
    const API = SEARCH_API("chikn", formChiknSearch.chiknId);
    const res = await axios.get(API);
    setChiknSearch({ image: res.data.image, name: res.data.name });

    setformChiknSearch({ ...formChiknSearch, chiknId: "" });
  };

  const getSearchRoostr = async (e) => {
    e.preventDefault();
    const API = SEARCH_API("roostr", formChiknSearch.roostrId);
    const res = await axios.get(API);
    setRoostrSearch({ image: res.data.image, name: res.data.name });
    setformChiknSearch({ ...formChiknSearch, roostrId: "" });
  };
  const getDetailsChikn = async () => {
    const API = DETAILS_API("chikn");
    const res = await axios.get(API);
  };

  const getDetailsRooster = async () => {
    const API = DETAILS_API("rooster");
    const res = await axios.get(API);
  };

  return (
    <BrowserRouter>
      <p className="design">
        <a href="https://www.freepik.com">Image designed by Upklyak - Freepik.com</a>
      </p>
      <div className={`App mainContainer ${pageClass}`}>
        <Header pageClass={pageClass} />
        <Price pageClass={pageClass} />
        <Content />
        <Footer pageClass={pageClass} />
        <Routes>
          <Route path="/" element={<Home setpageClass={setpageClass} />} />
          <Route path="/About" element={<About setpageClass={setpageClass} />} />
          <Route
            path="/Chikn"
            element={
              <Chikn
                setpageClass={setpageClass}
                handleSearch={handleSearch}
                getSearchRoostr={getSearchRoostr}
                getSearchChikn={getSearchChikn}
                chiknSearch={chiknSearch}
                roostrSearch={roostrSearch}
                formChiknSearch={formChiknSearch}
                reports={reports}
              />
            }
          />
          <Route path="/Edgyeggs" element={<Edgyeggs setpageClass={setpageClass} />} />
          <Route path="/Create" element={<Create setpageClass={setpageClass} />} />
          <Route path="/Coop" element={<Coop setpageClass={setpageClass} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
