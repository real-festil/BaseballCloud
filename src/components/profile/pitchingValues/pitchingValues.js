import React from "react";

const PitchingValues = () => (
  <div className="profile-rates__values-block">
    <h2 className="profile-rates__title">Top Pitching Values</h2>

    <div className="profile-rates__scores-layout">
      <div className="profile-rates__scores">
        <div className="profile-rates__scores-info">
          <div className="profile-rates__scores-name">Fastball Velocity</div>
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
          <div className="profile-rates__scores-name">Pitch Movement</div>
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
);

export default PitchingValues;
