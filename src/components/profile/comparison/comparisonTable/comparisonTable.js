import React from "react";

const ComparisonTable = () => (
  <div className="profile-table__values">
    <div className="profile-table__sorting">
      <button className="profile-table__sorting-btn">
        Top Pitching Values - <span className="js-value">Velocity</span>
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
);

export default ComparisonTable;
