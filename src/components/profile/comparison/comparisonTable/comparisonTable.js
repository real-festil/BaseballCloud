import React, { useState } from "react";
import Select from "react-select";

const ComparisonTable = props => {
  const { batting_top_values } = props.data;
  const [type, changeType] = useState("exit_velocity");

  const getValue = name => {
    if (batting_top_values) {
      const result = batting_top_values.filter(
        value => value.pitch_type === name
      );

      if (result.length) {
        return result[0][type];
      }
    }
  };

  return (
    <div className="profile-table__values">
      <div className="profile-table__sorting">
        <button className="profile-table__sorting-btn">
          <p>Top Pitching Values - </p>
          <Select
            defaultValue={{ value: "exit_velocity", label: "Exit velocity" }}
            className="react-select-container"
            classNamePrefix="react-select"
            options={[
              { value: "distance", label: "Distance" },
              { value: "launch_angle", label: "Launch angle" },
              { value: "exit_velocity", label: "Exit velocity" }
            ]}
            onChange={value => changeType(value.value)}
          />
        </button>
      </div>

      <div className="profile-table__values-table">
        <div className="profile-table__values-row">
          <div className="profile-table__values-col profile-table__values-col--name">
            Fastball
          </div>
          <div className="profile-table__values-col">
            {getValue("Fastball")}
          </div>
          <div className="profile-table__values-col">-</div>
        </div>
        <div className="profile-table__values-row">
          <div className="profile-table__values-col profile-table__values-col--name">
            Curveball
          </div>
          <div className="profile-table__values-col">
            {getValue("Curveball")}
          </div>
          <div className="profile-table__values-col">-</div>
        </div>
        <div className="profile-table__values-row">
          <div className="profile-table__values-col profile-table__values-col--name">
            Changeup
          </div>
          <div className="profile-table__values-col">
            {getValue("Changeup")}
          </div>
          <div className="profile-table__values-col">-</div>
        </div>
        <div className="profile-table__values-row">
          <div className="profile-table__values-col profile-table__values-col--name">
            Slider
          </div>
          <div className="profile-table__values-col">{getValue("Slider")}</div>
          <div className="profile-table__values-col">-</div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
