import "./About.css";
import { useEffect } from "react";

export default function About({ setpageClass }) {
  useEffect(() => {
    setpageClass("about");
  }, []);

  return (
    <>
      <div className="about-content">
        <div className="about-container">
          <div className="top-about-container">
            <h2>About</h2>
          </div>
          <div className="bottom-about-container">
            <p>
              All you need to do is find the ID of the NFT you want to buy, once you've found it, create a post and send it
              to the holder, claws crossed they see it. If you would like to remove your post there is an option to delete,
              if needs be. You will be able to view your offer and other people's in a section called The Coop. Hope you find
              the Coq you've always wanted. Good luck and have fun. Bok Bok
            </p>
            <br />
            <div className="line"></div>
            <br />
            <h2 className="tc">T&C</h2>
            <p>
              This website is designed to match you with your favourite Coq. Everything on this site is for entertainment
              purposes only. Please make sure you always do your own research and diligence. Its always best to buy from a
              market place. Watch out for scam Dms.
            </p>
            <button type="button" className="welcome-btn">
              <a href="/Coop">Create a Coq</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
