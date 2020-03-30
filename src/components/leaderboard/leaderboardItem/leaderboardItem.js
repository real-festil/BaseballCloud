import React from "react";
import { Link } from "react-router-dom";

const LeaderboardList = props => {
  const {
    rank,
    batter_name,
    age,
    exit_velocity,
    launch_angle,
    distance,
    school,
    teams,
    favorite,
    id
  } = props;

  return (
    <>
      <div className="leaderboards__table-row">
        <div className="leaderboards__table-col leaderboards__table-col--rank">
          {rank}
        </div>
        <Link
          to={`/profile/${id}`}
          className="leaderboards__table-col leaderboards__table-col--batter"
        >
          {batter_name}
        </Link>
        <div className="leaderboards__table-col leaderboards__table-col--age">
          {age}
        </div>
        <div className="leaderboards__table-col leaderboards__table-col--school">
          {school.name}
        </div>
        <div className="leaderboards__table-col leaderboards__table-col--teams">
          {teams.map(team => (
            <span key={team.id}>{team.name}</span>
          ))}
        </div>
        <div className="leaderboards__table-col leaderboards__table-col--velocity">
          {exit_velocity}
        </div>
        <div className="leaderboards__table-col leaderboards__table-col--angle">
          {launch_angle || "-"}
        </div>
        <div className="leaderboards__table-col leaderboards__table-col--distance">
          {distance}
        </div>
        <div className="leaderboards__table-col leaderboards__table-col--favorite">
          <a href="/" className="leaderboards__table-like">
            <i
              className="leaderboards__blue-icon fa fa-heart-o"
              aria-hidden={favorite}
            ></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default LeaderboardList;
