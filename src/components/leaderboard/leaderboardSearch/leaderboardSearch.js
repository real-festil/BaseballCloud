import React, { useState } from "react";
import Select from "react-select";
import classes from "./leaderboardSearch.module.css";

const LeaderboardSearch = props => {
  const { tab } = props;

  const [filters, changeFilters] = useState({});

  const changeFiltersHandler = filter => {
    changeFilters(Object.assign(filters, filter));
    props.changeFiltersHandler(filters);
  };

  return (
    <>
      <Select
        defaultValue={{ value: "", label: "Date" }}
        className="react-select-container"
        classNamePrefix="react-select"
        options={[
          { value: "", label: "All" },
          { value: "last_week", label: "Date (last week)" },
          { value: "last_month", label: "Date (last month)" }
        ]}
        onChange={value => changeFiltersHandler({ date: value.value })}
      />

      <div className="leaderboards__filter">
        <input
          className="leaderboards__filter-input leaderboards__filter-input--school"
          type="text"
          name="school"
          placeholder="School"
          onChange={e => changeFiltersHandler({ school: e.target.value })}
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
          onChange={e => changeFiltersHandler({ team: e.target.value })}
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

      <Select
        defaultValue={{ value: "", label: "Position" }}
        className="react-select-container"
        classNamePrefix="react-select"
        options={[
          { value: "", label: "All" },
          { value: "catcher", label: "Catcher" },
          { value: "first_base", label: "First base" },
          { value: "second_base", label: "Second base" },
          { value: "shortstop", label: "Shortstop" },
          { value: "third_base", label: "Third base" },
          { value: "outfield", label: "Outfield" },
          { value: "pitcher", label: "Pitcher" }
        ]}
        onChange={value => changeFiltersHandler({ position: value.value })}
      />
      <div className="leaderboards__filter">
        <input
          className="leaderboards__filter-input leaderboards__filter-input--age"
          type="number"
          name="age"
          placeholder="Age"
          min="6"
          max="30"
          onChange={e =>
            changeFiltersHandler({ age: parseInt(e.target.value) })
          }
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
      <Select
        defaultValue={{ value: "", label: "All" }}
        className="react-select-container"
        classNamePrefix="react-select"
        options={[
          { value: "", label: "All" },
          { value: "1", label: "Favorite" }
        ]}
        onChange={value =>
          changeFiltersHandler({ favorite: parseInt(value.value) })
        }
      />
      {tab === "batting" ? (
        <Select
          defaultValue={{ value: "exit_velocity", label: "Exit velocity" }}
          className="react-select-container"
          classNamePrefix="react-select"
          options={[
            { value: "exit_velocity", label: "Exit velocity" },
            { value: "carry_distance", label: "Carry distance" }
          ]}
          onChange={value => changeFiltersHandler({ type: value.value })}
        />
      ) : (
        <Select
          defaultValue={{ value: "pitch_velocity", label: "Pitch velocity" }}
          className="react-select-container"
          classNamePrefix="react-select"
          options={[
            { value: "pitch_velocity", label: "Pitch velocity" },
            { value: "spin_rate", label: "Spin rate" }
          ]}
          onChange={value => changeFiltersHandler({ type: value.value })}
        />
      )}
    </>
  );
};

export default LeaderboardSearch;
