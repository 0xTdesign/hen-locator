import React from "react";
import "./Footer.css";

export default function Footer({ pageClass }) {
  return (
    <footer>
      <div className="footer-icons">
        <div className="links">
          <a href="https://twitter.com/chikn_nft" target="__blank">
            <i className="fa-brands fa-twitter fa-1x"></i>
          </a>
          <a href="https://discord.gg/zPadKQKkna" target="__blank">
            <i className="fab fa-discord fa-1x"></i>
          </a>
          <a href="https://chikn.farm/" target="__blank">
            <i className="fa-solid fa-egg fa-1x"></i>
          </a>

          {/* <i className="fa-brands fa-github fa-1x"></i>
          <i className="fab fa-linkedin fa-1x"></i> */}
        </div>
      </div>
    </footer>
  );
}
