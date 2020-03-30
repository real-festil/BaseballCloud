import React, { useState, useEffect } from "react";

const PitchingValues = props => {
  const { batter_summary, pitcher_summary } = props.data;

  const [type, toggleType] = useState("");

  useEffect(() => {
    if (props.data) {
      if (batter_summary.length) {
        toggleType("batting");
      } else toggleType("pitching");
    } else toggleType("");
  }, [batter_summary, props.data]);

  return (
    <div className="profile-rates__values-block">
      <h2 className="profile-rates__title">
        {type === "batting" ? "Top Batting Values" : "Top Pitching Values"}
      </h2>
      <div className="profile-rates__scores-layout">
        <div className="profile-rates__scores">
          <div className="profile-rates__scores-info">
            <div className="profile-rates__scores-name">
              {type === "batting" ? "Exit Velocity" : "Fastball Velocity"}
            </div>
            <div className="profile-rates__scores-value">
              {type
                ? type === "batting"
                  ? batter_summary[0]["exit_velocity"]
                  : pitcher_summary[0]["velocity"]
                : "N/A"}
            </div>
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
              {type === "batting" ? "Carry Distance" : "Spin Rate"}
            </div>
            <div className="profile-rates__scores-value">
              {type
                ? type === "batting"
                  ? batter_summary[0]["distance"]
                  : pitcher_summary[0]["spin_rate"]
                : "N/A"}
            </div>
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
              {type === "batting" ? "Launch Angle" : "Pitch Movement"}
            </div>
            <div className="profile-rates__scores-value">
              {type
                ? type === "batting"
                  ? batter_summary[0]["launch_angle"]
                  : pitcher_summary[0]["horizontal_break"]
                : "N/A"}
            </div>
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
  );
};

export default PitchingValues;
