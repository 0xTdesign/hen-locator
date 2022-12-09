import React from "react";
import CardWorldCup from "../../components/Card/CardWorldCup";
import edgyegg from "../../assets/logo-white.svg";
import { useEffect, useState } from "react";
import "./WorldCup.css";
import Rules from "../../components/Rules/Rules";
import axios from "axios";
import ModalTeam from "../../components/ModalTeams/ModalTeam";

export default function WorldCup({
  worldCupEgg,
  handleChangeCreateEdgyegg,
  createEdgyeggForm,
  createWorldCupEgg,
  setpageClass,
  API_URL,
}) {
  const submitCreateEdgyegg = (e) => {
    e.preventDefault();
    createWorldCupEgg();
  };
  useEffect(() => {
    // alert("Grand Prize entries close on the 8th Dec");
    setpageClass("worldCup");
    getCountryVotes();
    todaysGames();
  }, []);

  const [showModalWorldCup, setshowModalWorldCup] = useState(false);
  const [showModalWorldCupTeam, setshowModalWorldCupTeam] = useState(false);

  const [todaysmatches, settodaysmatches] = useState([]);
  const changeModalWorldCup = () => {
    setshowModalWorldCup(!showModalWorldCup);
  };

  const changeModalWorldCupTeams = () => {
    setshowModalWorldCupTeam(!showModalWorldCupTeam);
  };

  const [worldcupTeams, setworldcupTeams] = useState({
    Qatar: 0,
    Ecuador: 0,
    Senegal: 0,
    Netherlands: 0,
    England: 0,
    Iran: 0,
    USA: 0,
    Wales: 0,
    Argentina: 0,
    SaudiArabia: 0,
    Mexico: 0,
    Poland: 0,
    France: 0,
    Australia: 0,
    Denmark: 0,
    Tunisia: 0,
    Spain: 0,
    CostaRica: 0,
    Germany: 0,
    Japan: 0,
    Belgium: 0,
    Canada: 0,
    Morocco: 0,
    Croatia: 0,
    Brazil: 0,
    Serbia: 0,
    Switzerland: 0,
    Cameroon: 0,
    Portugal: 0,
    Ghana: 0,
    Uruguay: 0,
    KoreaRepublic: 0,
    total: 0,
  });

  const getCountryVotes = async () => {
    const API = `${API_URL}/edgyegg`;
    const res = await axios.get(API);
    // count the occurance of each rarity
    let Qatar = 0;
    let Ecuador = 0;
    let Senegal = 0;
    let Netherlands = 0;
    let England = 0;
    let Iran = 0;
    let USA = 0;
    let Wales = 0;
    let Argentina = 0;
    let SaudiArabia = 0;
    let Mexico = 0;
    let Poland = 0;
    let France = 0;
    let Australia = 0;
    let Denmark = 0;
    let Tunisia = 0;
    let Spain = 0;
    let CostaRica = 0;
    let Germany = 0;
    let Japan = 0;
    let Belgium = 0;
    let Canada = 0;
    let Morocco = 0;
    let Croatia = 0;
    let Brazil = 0;
    let Serbia = 0;
    let Switzerland = 0;
    let Cameroon = 0;
    let Portugal = 0;
    let Ghana = 0;
    let Uruguay = 0;
    let KoreaRepublic = 0;
    let total = 0;

    // res.data.forEach((egg) => { // we want to use the response from an API call, but we don't have it yet
    res.data.forEach((country) => {
      // so we just use the json file Tim scraped together
      switch (country.winningTeam) {
        case "Qatar 🇶🇦":
          Qatar++;
          total++;
          break;
        case "Ecuador 🇪🇨":
          Ecuador++;
          total++;
          break;
        case "Senegal 🇸🇳":
          Senegal++;
          total++;
          break;
        case "The Netherlands 🇳🇱":
          Netherlands++;
          total++;
          break;
        case "England 🏴󠁧󠁢󠁥󠁮󠁧󠁿":
          England++;
          total++;
          break;
        case "IR Iran 🇮🇷":
          Iran++;
          total++;
          break;
        case "USA 🇺🇸":
          USA++;
          total++;
          break;
        case "Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿":
          Wales++;
          total++;
          break;
        case "Argentina 🇦🇷":
          Argentina++;
          total++;
          break;
        case "Saudi-Arabia 🇸🇦":
          SaudiArabia++;
          total++;
          break;
        case "Mexico 🇲🇽":
          Mexico++;
          total++;
          break;
        case "Poland 🇵🇱":
          Poland++;
          total++;
          break;
        case "France 🇫🇷":
          France++;
          total++;
          break;
        case "Australia 🇦🇺":
          Australia++;
          total++;
          break;
        case "Denmark 🇩🇰":
          Denmark++;
          total++;
          break;
        case "Tunisia 🇹🇳":
          Tunisia++;
          total++;
          break;
        case "Spain 🇪🇸":
          Spain++;
          total++;
          break;
        case "Costa Rica 🇨🇷":
          CostaRica++;
          total++;
          break;
        case "Germany 🇩🇪":
          Germany++;
          total++;
          break;
        case "Japan 🇯🇵":
          Japan++;
          total++;
          break;
        case "Belgium 🇧🇪":
          Belgium++;
          total++;
          break;
        case "Canada 🇨🇦":
          Canada++;
          total++;
          break;
        case "Morocco 🇲🇦":
          Morocco++;
          total++;
          break;
        case "Croatia 🇭🇷":
          Croatia++;
          break;
        case "Brazil 🇧🇷":
          Brazil++;
          break;
        case "Serbia 🇷🇸":
          Serbia++;
          break;
        case "Switzerland 🇨🇭":
          Switzerland++;
          break;
        case "Cameroon 🇨🇲":
          Cameroon++;
          total++;
          break;
        case "Portugal 🇵🇹":
          Portugal++;
          total++;
          break;
        case "Ghana 🇬🇭":
          Ghana++;
          total++;
          break;
        case "Uruguay 🇺🇾":
          Uruguay++;
          total++;
          break;
        case "Korea Republic 🇰🇷":
          KoreaRepublic++;
          total++;
          break;
        default:
          break;
      }
    });

    // set state to be the counts
    setworldcupTeams({
      Qatar,
      Ecuador,
      Senegal,
      Netherlands,
      England,
      Iran,
      USA,
      Wales,
      Argentina,
      SaudiArabia,
      Mexico,
      Poland,
      France,
      Australia,
      Denmark,
      Tunisia,
      Spain,
      CostaRica,
      Germany,
      Japan,
      Belgium,
      Canada,
      Morocco,
      Croatia,
      Brazil,
      Serbia,
      Switzerland,
      Cameroon,
      Portugal,
      Ghana,
      Uruguay,
      KoreaRepublic,
      total,
    });
  };

  const todaysGames = async () => {
    const API = `https://worldcupjson.net/matches/today`;
    const res = await axios.get(API);
    settodaysmatches(res.data);
  };

  return (
    <>
      {showModalWorldCup && <Rules changeModalWorldCup={changeModalWorldCup} />}
      {showModalWorldCupTeam && (
        <ModalTeam
          changeModalWorldCupTeams={changeModalWorldCupTeams}
          worldcupTeams={worldcupTeams}
          getCountryVotes={getCountryVotes}
        />
      )}
      <div className="createChikn space">
        <div className="topContainer">
          <h2>Pick your Team</h2>
        </div>
        <br></br>
        <p className="private">
          The entries for the grand prize have come to an end. You can still enter to win the $500 raffle by minting an Egg
          up until 18th December 2022 5 minutes before the start of the final match. of the World Cup. Good luck!
        </p>
        <br />
        <button className="mint-btn">
          <a href="https://www.edgyeggs.wtf//#mint" target="__blank">
            Mint EdgyEggs
          </a>
        </button>
        {/* <form className="form-create" onSubmit={submitCreateEdgyegg}>
          <p className="private">To enter the draw the Egg needs to minted from the 20th of Nov onwards.</p>

          <input
            onChange={handleChangeCreateEdgyegg}
            name="tokenId"
            type="text"
            placeholder="Token ID"
            maxLength="20"
            value={createEdgyeggForm.tokenId}
          />

          <select
            className="select"
            value={createEdgyeggForm.winningTeam}
            onChange={handleChangeCreateEdgyegg}
            name="winningTeam"
          >
            <option value="" disabled selected>
              Select your Team
            </option>
            <option value="The Netherlands 🇳🇱">The Netherlands 🇳🇱</option>
            <option value="England 🏴󠁧󠁢󠁥󠁮󠁧󠁿">England 🏴󠁧󠁢󠁥󠁮󠁧󠁿</option>
            <option value="Argentina 🇦🇷">Argentina 🇦🇷</option>
            <option value="France 🇫🇷">France 🇫🇷</option>
            <option value="Morocco 🇲🇦">Morocco 🇲🇦</option>
            <option value="Croatia 🇭🇷">Croatia 🇭🇷</option>
            <option value="Brazil 🇧🇷">Brazil 🇧🇷</option>
            <option value="Portugal 🇵🇹">Portugal 🇵🇹</option>
          </select>

          <input
            onChange={handleChangeCreateEdgyegg}
            name="note"
            value={createEdgyeggForm.note}
            type="text"
            placeholder="Transaction Hash (Hidden)"
            maxLength="100"
          />
          <input
            onChange={handleChangeCreateEdgyegg}
            name="discord"
            type="text"
            placeholder="Discord # (Hidden)"
            maxLength="100"
            value={createEdgyeggForm.discord}
          />
          <button className="worldCup-btn" type="submit">
            <img className="enter-btn" src={edgyegg} alt="EdgyEgg" />
          </button>
        </form> */}
      </div>
      <div className="createRooster space">
        <div className="topContainer">
          <h2>How to Play</h2>
        </div>
        <p className="howToPlay">
          <p>Read the Rules</p>
          <button onClick={changeModalWorldCup} className="rules">
            ⮕ Rules ⬅
          </button>
          <br />
          <div className="topContainer">
            <h2>Prizes</h2>
          </div>
          <br />
          <span>iPhone 14</span>
          <br />
          <span>PS5 Digital</span>
          <br />
          <span>3x Minted Edgy Eggs</span>
          <br />
          Raffle $500 USDC
        </p>
        {/* <button className="mint-btn">
          <a href="https://www.edgyeggs.wtf//#mint" target="__blank">
            Mint EdgyEggs
          </a>
        </button> */}
      </div>
      <div className="showCreate">
        <div className="topContainer">
          <h2>Recent added entries</h2>
        </div>

        <CardWorldCup worldCupEgg={worldCupEgg} />
      </div>

      <div className="button-coop">
        {/* <a href="/Stadium">
          <button className="coop-btn">Stadium</button>
        </a> */}
        <button onClick={changeModalWorldCupTeams} className="coop-btn">
          Country Entries
        </button>
      </div>

      <div className="games">
        <div className="topContainer">
          <h2>Today's Games</h2>
        </div>
        {todaysmatches?.map((game, idx) => {
          return (
            <>
              <div className="today" key={idx}>
                <p>
                  {game.home_team.name} {game.home_team.goals} vs {game.away_team.goals} {game.away_team.name}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
