import React, { useState } from "react";
import Comparison from "./comparison/comparison";
import Batting from "./batting/batting";

const Profile = props => {
  const [tab, changeTab] = useState("comparison");

  return (
    <section className="profile-table">
      <div className="profile-table__toggle-wrap">
        <p
          className={
            "profile-table__toggle" +
            (tab === "batting" ? " profile-table__toggle--active" : "")
          }
          onClick={() => changeTab("batting")}
        >
          Pitching
        </p>
        <p
          className={
            "profile-table__toggle" +
            (tab === "session" ? " profile-table__toggle--active" : "")
          }
          onClick={() => changeTab("session")}
        >
          Session Reports
        </p>
        <p
          className={
            "profile-table__toggle" +
            (tab === "comparison" ? " profile-table__toggle--active" : "")
          }
          onClick={() => changeTab("comparison")}
        >
          Comparison
        </p>
      </div>
      {tab === "comparison" ? (
        <Comparison data={props.data} />
      ) : tab === "batting" ? (
        <Batting />
      ) : null}
    </section>
  );
};

export default Profile;
