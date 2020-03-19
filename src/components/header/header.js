import React, { useState } from "react";
import HeaderLogo from "../icons/headerLogo";
import { GET_CURRENT_PROFILE } from "../../utils/queries";
import { useQuery } from "@apollo/react-hooks";

const Header = props => {
  const [isNavOpen, toggleNav] = useState(false);
  const { loading, error, data } = useQuery(GET_CURRENT_PROFILE);

  return (
    <header className="page-header">
      <HeaderLogo />
      {props.isAuth && (
        <nav className="page-header--nav main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <a href="#" className="main-nav__link">
                Leaderboards
              </a>
            </li>
            <li className="main-nav__item">
              <a href="#" className="main-nav__link">
                Network
              </a>
            </li>
            <li className="main-nav__item main-nav__item--user">
              <i
                className="fa fa-user-circle-o fa-2x main-nav__user-pic"
                aria-hidden="true"
              ></i>
              <p
                href="#"
                className="main-nav__user-control"
                onClick={() => toggleNav(!isNavOpen)}
              >
                {loading
                  ? "User Name"
                  : (data.current_profile.first_name || "User") +
                    " " +
                    (data.current_profile.last_name || "Name")}
              </p>
              {isNavOpen && (
                <div className="main-nav__dropdown">
                  <a href="#" className="main-nav__dropdown-link">
                    My Profile
                  </a>
                  <a href="#" className="main-nav__dropdown-link">
                    Log Out
                  </a>
                </div>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
