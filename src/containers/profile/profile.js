import React, { useState, useEffect } from "react";
import SidebarForm from "../../components/sidebar/sidebarForm/sidebarForm";
import SidebarInfo from "../../components/sidebar/sidebarInfo/sidebarInfo";
import ProfileTable from "../../components/profile/profileTable";
import PitchingValues from "../../components/profile/pitchingValues/pitchingValues";
import RecentSession from "../../components/profile/recentSession/recentSession";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  GET_CURRENT_PROFILE,
  UPDATE_CURRENT_PROFILE
} from "../../utils/queries";

const Profile = props => {
  const [isSidebarFormOpened, toggleSidebarForm] = useState(true);
  const { loading, error, data } = useQuery(GET_CURRENT_PROFILE);
  const [updateProfile] = useMutation(UPDATE_CURRENT_PROFILE);

  console.log(props.match.params.id);

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
          <RecentSession />
          <PitchingValues />
        </section>
        <ProfileTable data={data.current_profile} />
      </main>
    </div>
  );
};

export default Profile;
