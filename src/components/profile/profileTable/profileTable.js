import React, { useState } from "react";
import userPic from "../../../styles/img/userpic.png";
import { GET_PROFILE, GET_PROFILE_BY_ID } from "../../../utils/queries";
import { useLazyQuery } from "@apollo/react-hooks";
import classes from "./profileTable.module.css";

const ProfileTable = props => {
  const [searchInput, searchInputChange] = useState("");
  const [profileId, changeProfileId] = useState();
  const [isDropdownShow, toggleDropdown] = useState("false");

  const {
    first_name,
    last_name,
    age,
    feet,
    inches,
    weight,
    position
  } = props.data;

  const [findProfile, { loading, data }] = useLazyQuery(GET_PROFILE, {
    variables: {
      input: {
        player_name: searchInput,
        position
      }
    }
  });

  const [selectProfile, profile] = useLazyQuery(GET_PROFILE_BY_ID, {
    variables: {
      id: profileId
    }
  });

  const searchProfile = e => {
    searchInputChange(e.target.value);
    findProfile();
    toggleDropdown(true);
  };

  const onSelectProfile = id => {
    changeProfileId(id);
    selectProfile();
    toggleDropdown(false);
  };

  return (
    <section className="profile-table">
      <div className="profile-table__toggle-wrap">
        <p className="profile-table__toggle">
          Pitching
          <div className="profile-table__toggle-dropdown"></div>
        </p>
        <p className="profile-table__toggle">Session Reports</p>
        <p className="profile-table__toggle  profile-table__toggle--active">
          Comparison
        </p>
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
                <p className="profile-table__current-name">
                  {first_name + " " + last_name}
                </p>
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
                    value={searchInput}
                    onChange={searchProfile}
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
                  <div className={classes.DropdownWrapper}>
                    {!loading &&
                      data &&
                      searchInput.length > 1 &&
                      isDropdownShow && (
                        <div className={classes.Dropdown}>
                          {data.profile_names.profile_names.map(profile => (
                            <p
                              key={profile.id}
                              className={classes.Profile}
                              onClick={() => onSelectProfile(profile.id)}
                            >
                              {profile.first_name} {profile.last_name}
                            </p>
                          ))}
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-table__info-table">
              <div className="profile-table__info-row">
                <div className="profile-table__info-col">Age: {age}</div>
                <div className="profile-table__info-col">
                  Age: {(profile.data && profile.data.profile.age) || "-"}
                </div>
              </div>
              <div className="profile-table__info-row">
                <div className="profile-table__info-col">
                  Height: {feet} ft {inches} in
                </div>
                <div className="profile-table__info-col">
                  Height:{" "}
                  {(profile.data &&
                    profile.data.profile.feet +
                      " ft " +
                      profile.data.profile.inches +
                      " in") ||
                    "-"}
                </div>
              </div>
              <div className="profile-table__info-row">
                <div className="profile-table__info-col">
                  Weight: {weight} lbs
                </div>
                <div className="profile-table__info-col">
                  Weight:{" "}
                  {(profile.data && profile.data.profile.weight + " lbs") ||
                    "-"}
                </div>
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
  );
};

export default ProfileTable;
