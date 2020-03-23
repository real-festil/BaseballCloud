import React, { useState, useEffect } from "react";
import SidebarForm from "../../components/sidebar/sidebarForm/sidebarForm";
import SidebarInfo from "../../components/sidebar/sidebarInfo/sidebarInfo";
import ProfileTable from "../../components/profile/profileTable";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  GET_CURRENT_PROFILE,
  UPDATE_CURRENT_PROFILE
} from "../../utils/queries";

const Profile = props => {
  const [isSidebarFormOpened, toggleSidebarForm] = useState(true);
  const { loading, error, data } = useQuery(GET_CURRENT_PROFILE);
  const [updateProfile] = useMutation(UPDATE_CURRENT_PROFILE);

  useEffect(() => {
    if (!loading)
      if (data.current_profile.first_name) {
        toggleSidebarForm(false);
      }
  }, [data, loading]);

  const onSubmitForm = values => {
    const teams = values.teams.map(team => {
      return { id: team.id, name: team.name };
    });
    const facilities = values.facilities.map(facility => {
      return { id: facility.id, email: facility.name };
    });
    const updatedValues = {
      ...values,
      throws_hand: values.throws_hand.name,
      bats_hand: values.bats_hand.name,
      position: values.position.name,
      position2: values.position2.name,
      age: parseInt(values.age),
      school_year: values.school_year.name,
      feet: parseInt(values.feet),
      inches: parseInt(values.inches || 0),
      weight: parseInt(values.weight),
      school: { id: values.school.id, name: values.school.name },
      teams,
      facilities,
      id: data.current_profile.id
    };
    delete updatedValues["__typename"];
    updateProfile({
      variables: {
        form: updatedValues
      }
    });
    toggleSidebarForm(false);
  };

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="profile-container">
      {isSidebarFormOpened ? (
        <SidebarForm
          onFormClose={() =>
            data.current_profile.first_name && toggleSidebarForm(false)
          }
          onSubmit={onSubmitForm}
          initialData={data.current_profile}
        />
      ) : (
        <SidebarInfo
          onFormOpen={() => toggleSidebarForm(true)}
          userData={loading ? null : data}
        />
      )}
      <main className="profile-main">
        <section className="profile-rates">
          <div className="profile-rates__values-block">
            <h2 className="profile-rates__title">Top Pitching Values</h2>

            <div className="profile-rates__scores-layout">
              <div className="profile-rates__scores">
                <div className="profile-rates__scores-info">
                  <div className="profile-rates__scores-name">
                    Fastball Velocity
                  </div>
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
                  <div className="profile-rates__scores-name">
                    Pitch Movement
                  </div>
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

          <div className="profile-rates__reports-block">
            <h2 className="profile-rates__title">Recent Session Reports</h2>
            <div className="profile-rates__message">
              No data currently linked to this profile
            </div>
          </div>
        </section>
        <ProfileTable data={data.current_profile} />
      </main>
    </div>
  );
};

export default Profile;
