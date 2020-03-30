import React, { useState } from "react";
import userPic from "../../../styles/img/userpic.png";
import { GET_PROFILE, GET_PROFILE_BY_ID } from "../../../utils/queries";
import { useLazyQuery } from "@apollo/react-hooks";
import ComparisonDropdown from "./comparisonDropdown/comparisonDropdown";
import ComparisonTable from "./comparisonTable/comparisonTable";

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
    <ul className="profile-table__tab-wrap">
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
                <ComparisonDropdown
                  loading={loading}
                  data={data}
                  searchInput={searchInput}
                  isDropdownShow={isDropdownShow}
                  onSelectProfile={onSelectProfile}
                />
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
                {(profile.data && profile.data.profile.weight + " lbs") || "-"}
              </div>
            </div>
          </div>
          <ComparisonTable data={props.data} />
        </div>
      </li>
    </ul>
  );
};

export default ProfileTable;
