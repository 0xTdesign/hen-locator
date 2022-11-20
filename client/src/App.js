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

import { createClient, WagmiConfig, configureChains } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

import { SEARCH_API, DETAILS_API, REPORT_API, API_URL } from "./api";
import FarmersMarket from "./pages/FarmersMarket/FarmersMarket";
import WorldCup from "./pages/WorldCup/WorldCup";
import Stadium from "./pages/Stadium/Stadium";

function App({ changeModalWorldCup }) {
  console.log(window.location.href.replace("http://localhost:3000/", "").replace("https://hen-locator.netlify.app/", ""));
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
    tokenId: "",
    kg: "",
    rarity: "",
    score: "",
    forSale: "",
    salePrice: "",
    fertPerDay: "",
    eggPerDay: "",
  });

  const [roostrDetails, setroostrDetails] = useState({
    tokenId: "",
    kg: "",
    rarity: "",
    score: "",
    forSale: "",
    salePrice: "",
    fertPerDay: "",
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
    getAllWorldCupEntrys();
  }, []);

  /**************
  form functions
   *************/

  const handleChangeCreateChikn = (e) => {
    setcreateChiknForm({ ...createChiknForm, [e.target.name]: e.target.value });
    console.log(createChiknForm);
  };

  const handleChangeCreateRoostr = (e) => {
    setcreateRoostrForm({ ...createRoostrForm, [e.target.name]: e.target.value });
  };

  const createNewChikn = async (e) => {
    console.log(createChiknForm);
    const APIIMAGE = `https://api.chikn.farm/api/chikn/metadata/${createChiknForm.chiknId}`;
    const APIIMAGERES = await axios.get(APIIMAGE);
    const API = `${API_URL}/chikn`;
    const res = await axios.post(API, { ...createChiknForm, image: APIIMAGERES.data.image });
    console.log(res);
    setcreateChiknForm({ chiknId: "", note: "", price: "", contact: "" });
    setoffersChikn([res.data, ...offersChikn]);
  };

  const createNewRoostr = async (e) => {
    console.log(createRoostrForm);
    const APIIMAGE = `https://api.chikn.farm/api/roostr/metadata/${createRoostrForm.roostrId}`;
    const APIIMAGERES = await axios.get(APIIMAGE);
    const API = `${API_URL}/roostr`;
    const res = await axios.post(API, { ...createRoostrForm, image: APIIMAGERES.data.image });
    console.log(res);
    setcreateRoostrForm({ roostrId: "", note: "", price: "", contact: "" });
    setoffersRoostr([res.data, ...offersRoostr]);
  };

  const getAllBirds = async () => {
    const API = `${API_URL}/chikn`;
    const res = await axios.get(API);
    const API2 = `${API_URL}/roostr`;
    const res2 = await axios.get(API2);
    setoffersChikn(res.data);
    setoffersRoostr(res2.data);
  };

  const deleteChikn = async (chiknObj) => {
    const check = window.confirm(`Are you sure you want to delete ${chiknObj.chiknId}?`);

    if (!check) {
      return;
    }
    const API = `${API_URL}/chikn/${chiknObj._id}`;
    const res = await axios.delete(API);
    if (res.data.deletedCount === 1) {
      getAllBirds();
    } else {
      alert("There was a problem deleteing that Bird");
    }
  };

  const deleteRoostr = async (roostrObj) => {
    const check = window.confirm(`Are you sure you want to delete ${roostrObj.roostrId}?`);

    if (!check) {
      return;
    }
    const API = `${API_URL}/roostr/${roostrObj._id}`;
    const res = await axios.delete(API);
    if (res.data.deletedCount === 1) {
      getAllBirds();
    } else {
      alert("There was a problem deleteing that Bird");
    }
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
      eggPerDay: res.data.eggPerDay,
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
      fertPerDay: res.data.fertPerDay,
    });
    setformChiknSearch({ ...formChiknSearch, roostrId: "" });
  };

  /**************
  functions EdgyEgg 
   *************/

  const [edgyeggSearch, setedgyeggSearch] = useState({});

  const [formEdgyeggSearch, setformEdgyeggSearch] = useState({
    tokenId: "",
  });

  const [worldCupEgg, setworldCupEgg] = useState([]);

  const [createEdgyeggForm, setcreateEdgyeggForm] = useState({
    tokenId: "",
    winningCountry: "",
    discord: "",
    note: "",
  });

  const handleChangeCreateEdgyegg = (e) => {
    setcreateEdgyeggForm({ ...createEdgyeggForm, [e.target.name]: e.target.value });
  };

  const createWorldCupEgg = async (e) => {
    const APIIMAGE = `https://s3.wasabisys.com/metadata.edgyeggs.wtf/${createEdgyeggForm.tokenId}.json`;
    const APIIMAGERES = await axios.get(APIIMAGE);
    const API = `${API_URL}/edgyegg`;
    const res = await axios.post(API, { ...createEdgyeggForm, image: APIIMAGERES.data.image });
    console.log(res);
    setcreateEdgyeggForm({ tokenId: "", winningCountry: "", discord: "", note: "" });
    setworldCupEgg([res.data, ...worldCupEgg]);
  };

  const getAllWorldCupEntrys = async () => {
    const API = `${API_URL}/edgyegg`;
    const res = await axios.get(API);
    setworldCupEgg(res.data);
  };

  const handleSearchEdgyegg = (e) => {
    setformEdgyeggSearch({ ...formEdgyeggSearch, [e.target.name]: e.target.value });
    console.log(formEdgyeggSearch);
  };

  const getSearchEdgyegg = async (e) => {
    e.preventDefault();
    const API = `https://s3.wasabisys.com/metadata.edgyeggs.wtf/${formEdgyeggSearch.tokenId}.json`;
    const res = await axios.get(API);
    console.log(res.data);
    setedgyeggSearch({ ...res.data, tokenId: formEdgyeggSearch.tokenId });
    console.log(formEdgyeggSearch);
    setformEdgyeggSearch({ ...formEdgyeggSearch, tokenId: "" });
  };

  /**************
Farmers Market Swap
   *************/

  const avalancheChain = {
    id: 43_114,
    name: "Avalanche",
    network: "avalanche",
    nativeCurrency: {
      decimals: 18,
      name: "Avalanche",
      symbol: "AVAX",
    },
    rpcUrls: {
      default: "https://avalanche-mainnet.infura.io/v3/",
    },
    blockExplorers: {
      default: { name: "SnowTrace", url: "https://snowtrace.io" },
    },
    testnet: false,
  };

  const { chains } = configureChains(
    [avalancheChain],
    [
      jsonRpcProvider({
        rpc: (chain) => {
          if (chain.id !== avalancheChain.id) return null;
          return { http: chain.rpcUrls.default };
        },
      }),
    ]
  );

  const wagmiClient = createClient(
    getDefaultClient({
      chains,
    })
  );

  return (
    <BrowserRouter>
      <WagmiConfig client={wagmiClient}>
        <ConnectKitProvider>
          <p className="design">
            <a target="_blank" href="https://www.freepik.com">
              Image designed by Upklyak - Freepik.com
            </a>
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
              <Route
                path="/Edgyeggs"
                element={
                  <Edgyeggs
                    getSearchEdgyegg={getSearchEdgyegg}
                    handleSearchEdgyegg={handleSearchEdgyegg}
                    setpageClass={setpageClass}
                    formEdgyeggSearch={formEdgyeggSearch}
                    edgyeggSearch={edgyeggSearch}
                  />
                }
              />
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
                    deleteChikn={deleteChikn}
                    deleteRoostr={deleteRoostr}
                  />
                }
              />
              <Route
                path="/Coop"
                element={
                  <Coop
                    setpageClass={setpageClass}
                    offersChikn={offersChikn}
                    offersRoostr={offersRoostr}
                    deleteChikn={deleteChikn}
                    deleteRoostr={deleteRoostr}
                  />
                }
              />
              <Route path="/FarmersMarket" element={<FarmersMarket setpageClass={setpageClass} />} />
              <Route
                path="/WorldCup"
                element={
                  <WorldCup
                    setpageClass={setpageClass}
                    createWorldCupEgg={createWorldCupEgg}
                    worldCupEgg={worldCupEgg}
                    createEdgyeggForm={createEdgyeggForm}
                    handleChangeCreateEdgyegg={handleChangeCreateEdgyegg}
                    changeModalWorldCup={changeModalWorldCup}
                    API_URL={API_URL}
                  />
                }
              />
              <Route path="/Stadium" element={<Stadium setpageClass={setpageClass} worldCupEgg={worldCupEgg} />} />
            </Routes>
          </div>
        </ConnectKitProvider>
      </WagmiConfig>
    </BrowserRouter>
  );
}

export default App;
