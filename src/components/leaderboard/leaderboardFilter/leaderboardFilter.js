import React, { useState } from "react";
import classes from "./leaderboardFilter.module.css";

const LeaderboardFilter = props => {
  const [isFilterShow, filterToggle] = useState("false");
  const {
    battingFilter,
    pitchingFilter,
    togglePitchingFilter,
    toggleBattingFilter,
    tab
  } = props;

  return (
    <div
      className="leaderboards__sort"
      onClick={() => filterToggle(!isFilterShow)}
    >
      <div className="leaderboards__sort-dropdown">
        <div className="leaderboards__sort-value">
          <span className="leaderboards__dropdown-value">
            {tab === "batting"
              ? battingFilter === "exit_velocity"
                ? "Exit velocity"
                : "Carry distance"
              : pitchingFilter === "pitch_velocity"
              ? "Pitch velocity"
              : "Spin rate"}
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
          {!isFilterShow &&
            (tab === "batting" ? (
              <div className={classes.Dropdown}>
                <p onClick={() => toggleBattingFilter("exit_velocity")}>
                  Exit velocity
                </p>
                <p onClick={() => toggleBattingFilter("carry_distance")}>
                  Carry distance
                </p>
              </div>
            ) : (
              <div className={classes.Dropdown}>
                <p onClick={() => togglePitchingFilter("pitch_velocity")}>
                  Pitch velocity
                </p>
                <p onClick={() => togglePitchingFilter("spin_rate")}>
                  Spin rate
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardFilter;
