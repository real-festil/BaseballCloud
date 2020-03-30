import React from "react";
import LeaderboardItem from "../leaderboardItem/leaderboardItem";

const LeaderboardTable = props => {
  const { tab, battingData, pitchingData } = props;

  return (
    <div className="leaderboards__table-content">
      <div className="leaderboards__table-header">
        <div className="leaderboards__table-col leaderboards__table-col--rank">
          Rank
        </div>
        <div className="leaderboards__table-col leaderboards__table-col--batter">
          {tab === "batting" ? "Batter Name" : "Pitcher Name"}
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
          {tab === "batting" ? "Exit velocity" : "Pitch type"}
        </div>
        <div className="leaderboards__table-col leaderboards__table-col--angle">
          {tab === "batting" ? "Launch angle" : "Velocity"}
        </div>
        <div className="leaderboards__table-col leaderboards__table-col--distance">
          {tab === "batting" ? "Distance" : "Spin rate"}
        </div>
        <div className="leaderboards__table-col leaderboards__table-col--favorite">
          Favorite
        </div>
      </div>
      <div className="leaderboards__table-items">
        {!battingData.data || battingData.loading
          ? "Loading..."
          : tab === "batting"
          ? battingData.data.leaderboard_batting.leaderboard_batting.map(
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
                    tab={tab}
                    rank={index + 1}
                    batter_name={batter_name}
                    exit_velocity={exit_velocity}
                    launch_angle={launch_angle}
                    distance={distance}
                    age={age}
                    school={school}
                    teams={teams}
                    favorite={favorite}
                    id={batter_datraks_id}
                  />
                );
              }
            )
          : !pitchingData.data || pitchingData.loading
          ? "Loading..."
          : pitchingData.data.leaderboard_pitching.leaderboard_pitching.map(
              (player, index) => {
                const {
                  pitcher_name,
                  pitch_type,
                  velocity,
                  spin_rate,
                  age,
                  school,
                  teams,
                  favorite,
                  pitcher_datraks_id
                } = player;

                return (
                  <LeaderboardItem
                    key={index}
                    tab={tab}
                    rank={index + 1}
                    batter_name={pitcher_name}
                    exit_velocity={pitch_type}
                    launch_angle={velocity}
                    distance={spin_rate}
                    age={age}
                    school={school}
                    teams={teams}
                    favorite={favorite}
                    id={pitcher_datraks_id}
                  />
                );
              }
            )}
      </div>
    </div>
  );
};

export default LeaderboardTable;
