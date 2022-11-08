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

import { SEARCH_API, DETAILS_API, REPORT_API, API_URL } from "./api";

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
    egg: "",
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

  const [chiknDetails, setchiknDetails] = useState({
    token: "",
    kg: "",
    rarity: "",
    score: "",
    forSale: "",
    salePrice: "",
  });

  const [roostrDetails, setroostrDetails] = useState({
    token: "",
    kg: "",
    rarity: "",
    score: "",
    forSale: "",
    salePrice: "",
  });

  const [createChiknForm, setcreateChiknForm] = useState({
    chiknId: "",
    note: "",
    price: "",
    contact: "",
  });

  const [createRoostrForm, setcreateRoostrForm] = useState({
    roostrId: "",
    note: "",
    price: "",
    contact: "",
  });

  const [offersChikn, setoffersChikn] = useState([]);

  const [offersRoostr, setoffersRoostr] = useState([]);

  /**************
  useEffect form 
  *************/

  useEffect(() => {
    getReports();
    getAllBirds();
  }, []);

  /**************
  form functions
   *************/

  const handleChangeCreateChikn = (e) => {
    setcreateChiknForm({ ...createChiknForm, [e.target.name]: e.target.value });
  };

  const handleChangeCreateRoostr = (e) => {
    setcreateRoostrForm({ ...createRoostrForm, [e.target.name]: e.target.value });
  };

  const createNewChikn = async (e) => {
    console.log(createChiknForm);
    const API = `${API_URL}/chikn/${createChiknForm.chiknId}`;
    const res = await axios.post(API, createChiknForm);

    setcreateChiknForm({ tokenId: "", note: "", price: "", contact: "" });
    setoffersChikn([...offersChikn, res.data]);
  };

  const createNewRoostr = async (e) => {
    console.log(createRoostrForm);
    const API = `${API_URL}/roostr/${createRoostrForm.roostrId}`;
    const res = await axios.post(API, createRoostrForm);

    setcreateRoostrForm({ tokenId: "", note: "", price: "", contact: "" });

    setoffersRoostr([...offersRoostr, res.data]);
  };

  const getAllBirds = async () => {
    const API = `${API_URL}/chikn`;
    const res = await axios.get(API);
    const API2 = `${API_URL}/roostr`;
    const res2 = await axios.get(API2);
    setoffersChikn(res.data);
    setoffersRoostr(res2.data);
  };

  const updateRooster = async (e) => {
    e.preventDefault();
  };

  const updateChikn = async (e) => {
    e.preventDefault();
  };

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
      egg: resPrice.data.quotes.EGG.quote,
    });
  };

  const getSearchChikn = async (e) => {
    const API = SEARCH_API("chikn", formChiknSearch.chiknId);
    const res = await axios.get(API);
    setChiknSearch({ image: res.data.image, name: res.data.name });

    setformChiknSearch({ ...formChiknSearch, chiknId: "" });
  };

  const getSearchRoostr = async (e) => {
    const API = SEARCH_API("roostr", formChiknSearch.roostrId);
    const res = await axios.get(API);
    setRoostrSearch({ image: res.data.image, name: res.data.name });
    setformChiknSearch({ ...formChiknSearch, roostrId: "" });
  };

  const getDetailsChikn = async () => {
    const API = DETAILS_API("chikn", formChiknSearch.chiknId);
    const res = await axios.get(API);
    setchiknDetails({
      token: res.data.token,
      kg: res.data.kg,
      rarity: res.data.rarity,
      score: res.data.score,
      forSale: res.data.forSale,
      salePrice: res.data.salePrice,
    });
    setformChiknSearch({ ...formChiknSearch, chiknId: "" });
  };

  const getDetailsRooster = async () => {
    const API = DETAILS_API("roostr", formChiknSearch.roostrId);
    const res = await axios.get(API);
    setroostrDetails({
      token: res.data.token,
      kg: res.data.kg,
      rarity: res.data.rarity,
      score: res.data.score,
      forSale: res.data.forSale,
      salePrice: res.data.salePrice,
    });
    setformChiknSearch({ ...formChiknSearch, roostrId: "" });
  };

  return (
    <BrowserRouter>
      <p className="design">
        <a href="https://www.freepik.com">Image designed by Upklyak - Freepik.com</a>
      </p>
      <div className={`App mainContainer ${pageClass}`}>
        <Header pageClass={pageClass} />
        <Price pageClass={pageClass} reports={reports} />
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
                chiknDetails={chiknDetails}
                getDetailsChikn={getDetailsChikn}
                getDetailsRooster={getDetailsRooster}
                roostrDetails={roostrDetails}
              />
            }
          />
          <Route path="/Edgyeggs" element={<Edgyeggs setpageClass={setpageClass} />} />
          <Route
            path="/Create"
            element={
              <Create
                setpageClass={setpageClass}
                getSearchRoostr={getSearchRoostr}
                getSearchChikn={getSearchChikn}
                formChiknSearch={formChiknSearch}
                handleChangeCreateChikn={handleChangeCreateChikn}
                createNewChikn={createNewChikn}
                createNewRoostr={createNewRoostr}
                createChiknForm={createChiknForm}
                createRoostrForm={createRoostrForm}
                handleSearch={handleSearch}
                offersRoostr={offersRoostr}
                offersChikn={offersChikn}
                handleChangeCreateRoostr={handleChangeCreateRoostr}
              />
            }
          />
          <Route
            path="/Coop"
            element={<Coop setpageClass={setpageClass} offersChikn={offersChikn} offersRoostr={offersRoostr} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
