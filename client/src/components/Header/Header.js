import { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import logoWhite from "../../assets/logoWhite.svg";

export default function Header({ pageClass }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header>
      <div className="header">
        <div className=" header-items flex items-center justify-center ">
          <nav>
            <section className="MOBILE-MENU flex lg:hidden">
              <div className="HAMBURGER-ICON space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
                {pageClass === "home" && <img className="bar pulse" src={logo} alt="Logo" />}
                {pageClass === "about" && <img className="bar pulse" src={logo} alt="Logo" />}
                {pageClass === "chikn" && <img className="bar pulse" src={logo} alt="Logo" />}
                {pageClass === "edgyeggs" && <img className="bar pulse" src={logo} alt="Logo" />}
                {pageClass === "create" && <img className="bar pulse" src={logoWhite} alt="Logo" />}
                {pageClass === "coop" && <img className="bar pulse" src={logoWhite} alt="Logo" />}

                <p className="menu">Menu</p>
              </div>

              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div className="absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}>
                  <svg
                    className=" cross h-8 w-8 "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="flex flex-col items-center justify-between min-h-[250px]">
                  <li className=" my-8 uppercase">
                    <a href="/">Home</a>
                  </li>
                  <li className="border-b  my-8 uppercase">
                    <a href="/About">About</a>
                  </li>
                  <li className="border-b  my-8 uppercase">
                    <a href="/Chikn">Coq Search</a>
                  </li>
                  <li className="border-b  my-8 uppercase">
                    <a href="/Edgyeggs">EdgyEggs</a>
                  </li>
                  <li className="border-b  my-8 uppercase">
                    <a href="/Create">Hen Creator</a>
                  </li>
                  <li className="border-b  my-8 uppercase">
                    <a href="/Coop">Coop</a>
                  </li>
                </ul>
              </div>
            </section>
            <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
              <li>
                <a href="/Chikn">Coq Search</a>
              </li>
              <li>
                <a href="/Edgyeggs">EdgyEggs</a>
              </li>
              <li>
                <a href="/Create">Hen Creator </a>
              </li>
              <li>
                <a href="/Coop">Coop</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
