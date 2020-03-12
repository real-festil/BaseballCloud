import React from "react";
import HeaderLogo from "../icons/headerLogo";

const Header = () => {
  return (
    <header className="page-header">
      <HeaderLogo />
      <nav className="page-header--nav main-nav hide">
        <ul className="main-nav__list">
          <li className="main-nav__item">
            <a href="pages/leaderboards.html" className="main-nav__link">
              Leaderboards
            </a>
          </li>
          <li className="main-nav__item">
            <a href="pages/network.html" className="main-nav__link">
              Network
            </a>
          </li>
          <li className="main-nav__item main-nav__item--user">
            <i
              className="fa fa-user-circle-o fa-2x main-nav__user-pic"
              aria-hidden="true"
            ></i>
            <a href="pages/profile.html" className="main-nav__user-control">
              Dmitriy Kryhtin
            </a>
            <div className="main-nav__dropdown hide">
              <a href="#" className="main-nav__dropdown-link">
                My Profile
              </a>
              <a href="#" className="main-nav__dropdown-link">
                Log Out
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
