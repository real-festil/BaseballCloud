import React, { useState, useEffect } from "react";
import LeaderboardTable from "../../components/leaderboard/leaderboardTable/leaderboardTable";
import LeaderboardFilters from "../../components/leaderboard/leaderboardFilters/leaderboardFilters";
import { useLazyQuery } from "@apollo/react-hooks";
import {
  GET_LEADERBOARD_BATTING,
  GET_LEADERBOARD_PITCHING
} from "../../utils/queries";

const Leaderboard = () => {
  const [tab, toggleTab] = useState("batting");
  const [filters, changeFilters] = useState({ type: "exit_velocity" });

  const toggleTabHandler = tab => {
    toggleTab(tab);
    if (tab === "batting") {
      changeFilters(Object.assign(filters, { type: "exit_velocity" }));
    } else {
      changeFilters(Object.assign(filters, { type: "pitch_velocity" }));
    }
    changeFilters(filters);
  };

  const changeFiltersHandler = filter => {
    changeFilters(Object.assign(filters, filter));
    tab === "batting" ? getBattingData(filters) : getPitchingData(filters);
  };

  const [getBattingData, battingData] = useLazyQuery(GET_LEADERBOARD_BATTING, {
    variables: { input: filters }
  });

  const [getPitchingData, pitchingData] = useLazyQuery(
    GET_LEADERBOARD_PITCHING,
    {
      variables: { input: filters }
    }
  );

  useEffect(() => {
    tab === "batting" ? getBattingData(filters) : getPitchingData(filters);
  }, [filters, getBattingData, getPitchingData, tab]);

  if (battingData.error) return `Error! ${battingData.error.message}`;

  return (
    <main className="leaderboards">
      <header className="leaderboards__header">
        <h1 className="leaderboards__title">Leaderboards</h1>

        <div className="leaderboards__filter-list">
          <LeaderboardFilters
            tab={tab}
            changeFiltersHandler={filter => changeFiltersHandler(filter)}
          />
        </div>
      </header>

      <div className="leaderboards__table">
        <div className="leaderboards__table-sort">
          <div className="leaderboards__tabs">
            <p
              onClick={() => toggleTabHandler("batting")}
              className={
                tab === "batting"
                  ? "leaderboards__tab-btn leaderboards__tab-btn--active"
                  : "leaderboards__tab-btn"
              }
            >
              Batting
            </p>
            <p
              onClick={() => toggleTabHandler("pitching")}
              className={
                tab === "pitching"
                  ? "leaderboards__tab-btn leaderboards__tab-btn--active"
                  : "leaderboards__tab-btn"
              }
            >
              Pitching
            </p>
          </div>
        </div>
        <LeaderboardTable
          tab={tab}
          battingData={battingData}
          pitchingData={pitchingData}
        />
      </div>
    </main>
  );
};

export default Leaderboard;
