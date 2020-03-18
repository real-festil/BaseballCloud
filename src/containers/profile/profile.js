import React, { useState } from "react";
import userPic from "../../styles/img/userpic.png";
import SidebarForm from "../../components/sidebar/sidebarForm/sidebarForm";
import SidebarInfo from "../../components/sidebar/sidebarInfo/sidebarInfo";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import ApolloWrapper from "../../utils/Apollo";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { connect } from "react-redux";

const GET_CURRENT_PROFILE = gql`
  {
    current_profile {
      id
      first_name
      last_name
      position
      position2
      avatar
      throws_hand
      bats_hand
      biography
      school_year
      feet
      inches
      weight
      age
      school {
        id
        name
      }
      teams {
        id
        name
      }
      facilities {
        id
        email
        u_name
      }
    }
  }
`;

const Profile = props => {
  const [isSidebarFormOpened, toggleSidebarForm] = useState(false);

  const { loading, error, data } = useQuery(GET_CURRENT_PROFILE);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="profile-container">
      {isSidebarFormOpened ? (
        <SidebarForm onFormClose={() => toggleSidebarForm(false)} />
      ) : (
        <SidebarInfo
          onFormOpen={() => toggleSidebarForm(true)}
          userData={loading ? null : data}
        />
      )}
      <main className="profile-main">
        <section className="profile-rates">
          <div className="profile-rates__values-block">
            <h2 className="profile-rates__title">Top Pitching Values</h2>

            <div className="profile-rates__scores-layout">
              <div className="profile-rates__scores">
                <div className="profile-rates__scores-info">
                  <div className="profile-rates__scores-name">
                    Fastball Velocity
                  </div>
                  <div className="profile-rates__scores-value">N/A</div>
                </div>
                <div className="profile-rates__progressbar">
                  <svg
                    className="rc-progress-line "
                    viewBox="0 0 100 1"
                    preserveAspectRatio="none"
                  >
                    <path
                      className="rc-progress-line-trail"
                      d="M 0.5,0.5
                  L 99.5,0.5"
                      strokeLinecap="round"
                      stroke="#eff1f3"
                      strokeWidth="1"
                      fillOpacity="0"
                    ></path>
                    <path
                      className="rc-progress-line-path"
                      d="M 0.5,0.5
                  L 99.5,0.5"
                      strokeLinecap="round"
                      stroke="#ffd01a"
                      strokeWidth="1"
                      fillOpacity="0"
                      style={{
                        strokeDasharray: "0px , 100px",
                        strokeDashoffset: "0px",
                        transition:
                          "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s"
                      }}
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="profile-rates__scores">
                <div className="profile-rates__scores-info">
                  <div className="profile-rates__scores-name">Spin Rate</div>
                  <div className="profile-rates__scores-value">N/A</div>
                </div>
                <div className="profile-rates__progressbar">
                  <svg
                    className="rc-progress-line "
                    viewBox="0 0 100 1"
                    preserveAspectRatio="none"
                  >
                    <path
                      className="rc-progress-line-trail"
                      d="M 0.5,0.5
                  L 99.5,0.5"
                      strokeLinecap="round"
                      stroke="#eff1f3"
                      strokeWidth="1"
                      fillOpacity="0"
                    ></path>
                    <path
                      className="rc-progress-line-path"
                      d="M 0.5,0.5
                  L 99.5,0.5"
                      strokeLinecap="round"
                      stroke="#ffd01a"
                      strokeWidth="1"
                      fillOpacity="0"
                      style={{
                        strokeDasharray: "0px , 100px",
                        strokeDashoffset: "0px",
                        transition:
                          "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s"
                      }}
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="profile-rates__scores">
                <div className="profile-rates__scores-info">
                  <div className="profile-rates__scores-name">
                    Pitch Movement
                  </div>
                  <div className="profile-rates__scores-value">N/A</div>
                </div>
                <div className="profile-rates__progressbar">
                  <svg
                    className="rc-progress-line "
                    viewBox="0 0 100 1"
                    preserveAspectRatio="none"
                  >
                    <path
                      className="rc-progress-line-trail"
                      d="M 0.5,0.5
                  L 99.5,0.5"
                      strokeLinecap="round"
                      stroke="#eff1f3"
                      strokeWidth="1"
                      fillOpacity="0"
                    ></path>
                    <path
                      className="rc-progress-line-path"
                      d="M 0.5,0.5
                  L 99.5,0.5"
                      strokeLinecap="round"
                      stroke="#ffd01a"
                      strokeWidth="1"
                      fillOpacity="0"
                      style={{
                        strokeDasharray: "0px , 100px",
                        strokeDashoffset: "0px",
                        transition:
                          "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s"
                      }}
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-rates__reports-block">
            <h2 className="profile-rates__title">Recent Session Reports</h2>
            <div className="profile-rates__message">
              No data currently linked to this profile
            </div>
          </div>
        </section>

        <section className="profile-table">
          <div className="profile-table__toggle-wrap">
            <a href="#" className="profile-table__toggle">
              Pitching
              <div className="profile-table__toggle-dropdown"></div>
            </a>
            <a href="#" className="profile-table__toggle">
              Session Reports
            </a>
            <a
              href="#"
              className="profile-table__toggle  profile-table__toggle--active"
            >
              Comparison
            </a>
          </div>

          <ul className="profile-table__tab-wrap">
            <li className="profile-table__tab profile-table__tab--pitching hide">
              There's no info yet
            </li>

            <li className="profile-table__tab profile-table__tab--session hide">
              The player haven't had any sessions yet!
            </li>

            <li className="profile-table__tab profile-table__tab--comparison">
              <div className="profile-table__players-table">
                <div className="profile-table__names">
                  <div className="profile-table__current-player">
                    <img
                      src={userPic}
                      width="40"
                      height="40"
                      alt="userpic"
                      className="profile-table__current-img"
                    />
                    <a href="#" className="profile-table__current-name">
                      Dmitriy Kryhtin
                    </a>
                  </div>
                  <div className="profile-table__select-player">
                    <img
                      src={userPic}
                      width="40"
                      height="40"
                      alt="userpic"
                      className="profile-table__select-img"
                    />
                    <div className="profile-table__search-wrap">
                      <input
                        type="search"
                        name="selected-player"
                        id="player-search"
                        placeholder="Enter player name"
                        className="profile-table__search"
                      />
                      <span className="profile-table__search-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="#48BBFF"
                            fillRule="nonzero"
                            d="M15.64 13.537l-3.826-3.828c.577-.947.91-2.06.91-3.25 0-3.461-3-6.459-6.46-6.459A6.263 6.263 0 0 0 0 6.265c0 3.46 2.999 6.458 6.458 6.458a6.227 6.227 0 0 0 3.154-.854l3.847 3.85a.965.965 0 0 0 1.363 0l.955-.956c.376-.376.24-.85-.136-1.226zM1.929 6.265a4.337 4.337 0 0 1 4.336-4.338c2.396 0 4.531 2.134 4.531 4.531a4.338 4.338 0 0 1-4.337 4.338c-2.396 0-4.53-2.136-4.53-4.531z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="profile-table__info-table">
                  <div className="profile-table__info-row">
                    <div className="profile-table__info-col">Age: 29</div>
                    <div className="profile-table__info-col">Age: -</div>
                  </div>
                  <div className="profile-table__info-row">
                    <div className="profile-table__info-col">
                      Height: 7 ft 10 in
                    </div>
                    <div className="profile-table__info-col">Height: -</div>
                  </div>
                  <div className="profile-table__info-row">
                    <div className="profile-table__info-col">
                      Weight: 180 lbs
                    </div>
                    <div className="profile-table__info-col">Weight: -</div>
                  </div>
                </div>

                <div className="profile-table__values">
                  <div className="profile-table__sorting">
                    <button className="profile-table__sorting-btn">
                      Top Pitching Values -{" "}
                      <span className="js-value">Velocity</span>
                      <span className="profile-table__sorting-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="9"
                          viewBox="0 0 16 9"
                        >
                          <path
                            fill="#48BBFF"
                            fillRule="nonzero"
                            d="M13.469.432a1.081 1.081 0 0 1 1.565 0 1.165 1.165 0 0 1 0 1.615L8.78 8.43a1.083 1.083 0 0 1-1.567 0L.962 2.047a1.168 1.168 0 0 1 0-1.615 1.081 1.081 0 0 1 1.564 0L8 5.667 13.469.432z"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>

                  <div className="profile-table__values-table">
                    <div className="profile-table__values-row">
                      <div className="profile-table__values-col profile-table__values-col--name">
                        Fastball
                      </div>
                      <div className="profile-table__values-col">-</div>
                      <div className="profile-table__values-col">-</div>
                    </div>
                    <div className="profile-table__values-row">
                      <div className="profile-table__values-col profile-table__values-col--name">
                        Curveball
                      </div>
                      <div className="profile-table__values-col">-</div>
                      <div className="profile-table__values-col">-</div>
                    </div>
                    <div className="profile-table__values-row">
                      <div className="profile-table__values-col profile-table__values-col--name">
                        Changeup
                      </div>
                      <div className="profile-table__values-col">-</div>
                      <div className="profile-table__values-col">-</div>
                    </div>
                    <div className="profile-table__values-row">
                      <div className="profile-table__values-col profile-table__values-col--name">
                        Slider
                      </div>
                      <div className="profile-table__values-col">-</div>
                      <div className="profile-table__values-col">-</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Profile;
