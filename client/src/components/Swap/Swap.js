import "../Swap/Swap.css";
// import "../SwapModal/SwapModal.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useAccount, useSendTransaction } from "wagmi";

import tokensJsonAvax from "../../config/tokenAvax.json";
import nativeToken from "../../config/nativeToken.json";
import AVAXLogo from "../../images/tokenimg/avax.png";
import STLogo from "../../images/tokenimg/snowtracelogo.svg";
// import { Spinner } from "loading-animations-react";

export default function Swap() {
  const [fromToken] = useState(nativeToken[0].address);
  const [toToken, setToToken] = useState("");
  const [value, setValue] = useState("10000000000000000");
  const [valueExchanged, setValueExchanged] = useState("");
  const [valueExchangedDecimals, setValueExchangedDecimals] = useState(1e18);
  const [to, setTo] = useState("");
  const [txData, setTxData] = useState("");
  const [balance, setBalance] = useState("");
  const [listShow, setListShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  console.log();

  const changeModal = () => {
    setModalShow(!modalShow);
  };

  const account = useAccount({
    onConnect({ address, connector, isReconnected }) {
      console.log("Connected", { address, connector, isReconnected });
    },
  });

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  const myAddress = account.address;

  const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction({
    request: {
      from: myAddress,
      to: String(to),
      data: String(txData),
      value: String(value),
    },
  });

  const AvaxAPI = process.env.REACT_APP_INFURA_ID;

  async function getBalance() {
    const ethers = require("ethers");

    (async () => {
      const provider = new ethers.providers.JsonRpcProvider(`https://avalanche-mainnet.infura.io/v3/${AvaxAPI}`);
      const balance = await provider.getBalance(account.address, "latest");
      setBalance(balance.toString());
    })();
  }

  function changeToToken(e) {
    setToToken(e.target.value);
    setValueExchanged("");
  }

  function changeValue(e) {
    setValue(e.target.value * 1e18);
    setValueExchanged("");
  }

  async function get1inchSwap() {
    const tx = await axios.get(
      `https://api.1inch.io/v5.0/43114/swap?fromTokenAddress=${fromToken}&toTokenAddress=${toToken}&amount=${value}&fromAddress=${myAddress}&slippage=1`
    );
    console.log(tx.data);
    setTo(tx.data.tx.to);
    setTxData(tx.data.tx.data);
    setValueExchangedDecimals(Number(`1E${tx.data.toToken.decimals}`));
    setValueExchanged(tx.data.toTokenAmount);
  }

  const handleListShow = () => {
    setListShow(!listShow);
  };

  const handleToToken = (token) => {
    setToToken(token);
  };

  return (
    <div className="swap">
      <div className="swap-container">
        <div className="swap-content-top">
          <p className="swap-title">Farmers Market Swap</p>
          <div className="balance">
            <img className="balance-logo" src={AVAXLogo} alt="" width="20" height="20" />
            <p>Balance: {(balance / 1e18).toFixed(3)}</p>
          </div>
        </div>
        <div className="swap-content">
          <div className="input-box">
            <input
              className="input-field"
              onChange={(e) => changeValue(e)}
              value={value / 1e18}
              type="number"
              min={0}
              max={(balance.balance / 1e18).toFixed(3)}
              placeholder={"0.0"}
            ></input>
            <button className="input-btn">
              <div className="input-inner-box">
                <img className="input-logo" src={AVAXLogo} alt="Avalanche Logo" />
                <p className="input-symbol" onChange={(e) => changeToToken(e)} value={fromToken}>
                  {nativeToken[0].symbol}
                </p>
              </div>
            </button>
          </div>

          <div className="output-box">
            <input
              className="output-field"
              onChange={(e) => changeValue(e)}
              value={!valueExchanged ? "" : (valueExchanged / valueExchangedDecimals).toFixed(3)}
              placeholder={"0.0"}
            ></input>
            <button className="output-btn" onClick={handleListShow}>
              <div className="output-inner-box">
                {toToken === "" && "Select"}
                {toToken !== "" && (
                  <img
                    src={tokensJsonAvax.find((token) => token.address === toToken).logoURI}
                    alt=""
                    className="output-logo"
                  />
                )}
                {toToken !== "" && tokensJsonAvax.find((token) => token.address === toToken).symbol}
              </div>
            </button>
            <div className="SwapDropdownContent">
              {listShow &&
                tokensJsonAvax.map((token, idx) => {
                  return (
                    <button className="dropdown-list" key={idx} onClick={() => handleToToken(token.address)}>
                      <img src={token.logoURI} alt="" />
                      <span className="token-swap">{token.symbol}</span>
                    </button>
                  );
                })}
            </div>
          </div>

          <div className="button-containers">
            <button className="conversion-btn" onClick={get1inchSwap}>
              Get Conversion
            </button>
            <button className="swap-btn" disabled={false} onClick={sendTransaction}>
              Swap Tokens
            </button>
          </div>
        </div>
      </div>
      {
        (modalShow,
        isLoading && (
          <div className="modal">
            <div className="modal-box">
              <p className="walletcheck-msg">Checking Wallet...</p>
              {/* <Spinner className="spinner-loading" color1="#fff" color2="#fff" textColor="rgba(0,0,0, 0.5)" /> */}
              <button className="modal-button" onClick={changeModal}>
                X
              </button>
            </div>
          </div>
        ))
      }
      {isSuccess && (
        <div className="transaction-container">
          <h4 className="transaction-title">Click to see your txn status</h4>
          <a className="transaction-msg" href={`https://snowtrace.io/tx/${data?.hash}`} target="_blank" rel="noreferrer">
            <img src={STLogo} alt="" width={200} height={30} />
          </a>
        </div>
      )}
    </div>
  );
}
