import React from "react";
import classes from "./comparisonDropdown.module.css";

const ComparisonDropdown = props => {
  const { loading, data, searchInput, isDropdownShow, onSelectProfile } = props;

  return (
    <div className={classes.DropdownWrapper}>
      {!loading && data && searchInput.length > 1 && isDropdownShow && (
        <div className={classes.Dropdown}>
          {data.profile_names.profile_names.map(profile => (
            <p
              key={profile.id}
              className={classes.Profile}
              onClick={() => onSelectProfile(profile.id)}
            >
              {profile.first_name} {profile.last_name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ComparisonDropdown;
