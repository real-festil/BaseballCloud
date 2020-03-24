import React, { useState, useEffect } from "react";
import LeaderboardItem from "../../components/leaderboardItem/leaderboardItem";
import { useLazyQuery } from "@apollo/react-hooks";
import { GET_LEADERBOARD_BATTING } from "../../utils/queries";
import classes from "./leaderboard.module.css";

const Leaderboard = () => {
  const [filter, toggleFilter] = useState("exit_velocity");
  const [isFilterShow, toggleFilterShow] = useState(false);
  const [getBattingData, battingData] = useLazyQuery(GET_LEADERBOARD_BATTING, {
    variables: { input: { type: filter } }
  });

  useEffect(() => {
    getBattingData(filter);
  }, [filter, getBattingData]);

  if (battingData.error) return `Error! ${battingData.error.message}`;

  return (
    <main className="leaderboards">
      <header className="leaderboards__header">
        <h1 className="leaderboards__title">Leaderboards</h1>

        <div className="leaderboards__filter-list">
          <div className="leaderboards__filter">
            <div className="leaderboards__filter-dropdown">
              <div className="leaderboards__filter-value">
                <span className="leaderboards__dropdown-value">Date</span>
              </div>
              <span className="leaderboards__filter-icon">
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
              <div className="leaderboards__dropdown hide"></div>
            </div>
          </div>

          <div className="leaderboards__filter">
            <input
              className="leaderboards__filter-input leaderboards__filter-input--school"
              type="text"
              name="school"
              placeholder="School"
            />
            <span className="leaderboards__filter-icon">
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
          </div>

          <div className="leaderboards__filter">
            <input
              className="leaderboards__filter-input leaderboards__filter-input--team"
              type="text"
              name="team"
              placeholder="Team"
            />
            <span className="leaderboards__filter-icon">
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
          </div>

          <div className="leaderboards__filter">
            <div className="leaderboards__filter-dropdown">
              <div className="leaderboards__filter-value">
                <span className="leaderboards__dropdown-value">Position</span>
              </div>
              <span className="leaderboards__filter-icon">
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
              <div className="leaderboards__dropdown hide"></div>
            </div>
          </div>

          <div className="leaderboards__filter">
            <input
              className="leaderboards__filter-input leaderboards__filter-input--age"
              type="number"
              name="age"
              placeholder="Age"
              min="6"
              max="30"
              value=""
            />
            <span className="leaderboards__filter-icon">
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
          </div>

          <div className="leaderboards__filter">
            <div className="leaderboards__filter-dropdown">
              <div className="leaderboards__filter-value">
                <span className="leaderboards__dropdown-value">All</span>
              </div>
              <span className="leaderboards__filter-icon">
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
              <div className="leaderboards__dropdown hide"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="leaderboards__table">
        <div className="leaderboards__table-sort">
          <div className="leaderboards__tabs">
            <a
              href="/"
              className="leaderboards__tab-btn leaderboards__tab-btn--active"
            >
              Batting
            </a>
            <a href="/" className="leaderboards__tab-btn">
              Pitching
            </a>
          </div>

          <div
            className="leaderboards__sort"
            onClick={() => toggleFilterShow(!isFilterShow)}
          >
            <div className="leaderboards__sort-dropdown">
              <div className="leaderboards__sort-value">
                <span className="leaderboards__dropdown-value">
                  {filter === "exit_velocity"
                    ? "Exit velocity"
                    : "Carry distance"}
                </span>
              </div>
              <span className="leaderboards__sort-icon">
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
              <div className={classes.DropdownWrapper}>
                {isFilterShow && (
                  <div className={classes.Dropdown}>
                    <p onClick={() => toggleFilter("exit_velocity")}>
                      Exit velocity
                    </p>
                    <p onClick={() => toggleFilter("carry_distance")}>
                      Carry distance
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="leaderboards__table-content">
          <div className="leaderboards__table-header">
            <div className="leaderboards__table-col leaderboards__table-col--rank">
              Rank
            </div>
            <div className="leaderboards__table-col leaderboards__table-col--batter">
              Batter Name
            </div>
            <div className="leaderboards__table-col leaderboards__table-col--age">
              Age
            </div>
            <div className="leaderboards__table-col leaderboards__table-col--school">
              School
            </div>
            <div className="leaderboards__table-col leaderboards__table-col--teams">
              Teams
            </div>
            <div className="leaderboards__table-col leaderboards__table-col--velocity">
              Exit Velocity
            </div>
            <div className="leaderboards__table-col leaderboards__table-col--angle">
              Launch Angle
            </div>
            <div className="leaderboards__table-col leaderboards__table-col--distance">
              Distance
            </div>
            <div className="leaderboards__table-col leaderboards__table-col--favorite">
              Favorite
            </div>
          </div>
          <div className="leaderboards__table-items">
            {!battingData.data || battingData.loading
              ? "Loading..."
              : battingData.data.leaderboard_batting.leaderboard_batting.map(
                  (player, index) => {
                    const {
                      batter_name,
                      exit_velocity,
                      launch_angle,
                      distance,
                      age,
                      school,
                      teams,
                      favorite,
                      batter_datraks_id
                    } = player;

                    return (
                      <LeaderboardItem
                        key={index}
                        rank={index + 1}
                        batter_name={batter_name}
                        exit_velocity={exit_velocity}
                        launch_angle={launch_angle}
                        distance={distance}
                        age={age}
                        school={school}
                        teams={teams}
                        favorite={favorite}
                      />
                    );
                  }
                )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Leaderboard;
