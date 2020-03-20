import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import Select from "../../selectComponent/selectComponent";
import classes from "./sidebarForm.module.css";
import userPic from "../../../styles/img/userpic.png";
import { useQuery } from "@apollo/react-hooks";
import { GET_FACILITIES, GET_SCHOOLS, GET_TEAMS } from "../../../utils/queries";

const positionOptions = [
  { value: "Catcher", label: "Catcher" },
  { value: "FirstBase", label: "First Base" },
  { value: "SecondBase", label: "Second Base" },
  { value: "Shortstop", label: "Shortstop" },
  { value: "ThirdBase", label: "Third Base" },
  { value: "Outfield", label: "Outfield" },
  { value: "Pitcher", label: "Pitcher" }
];

const handOptions = [
  { value: "R", label: "R" },
  { value: "L", label: "L" }
];

const schoolYearOptions = [
  { value: "Freshman", label: "Freshman" },
  { value: "Sophomore", label: "Sophomore" },
  { value: "Junior", label: "Junior" },
  { value: "Senior", label: "Senior" },
  { value: "None", label: "None" }
];

const errorStyle = {
  color: "red",
  paddingBottom: "10px"
};

const SidebarForm = props => {
  const facilities = useQuery(GET_FACILITIES, {
    variables: { search: "" }
  });
  const schools = useQuery(GET_SCHOOLS, {
    variables: { search: "" }
  });
  const teams = useQuery(GET_TEAMS, {
    variables: { search: "" }
  });

  const facilitiesOptions = !facilities.loading
    ? facilities.data.facilities.facilities.map(facility => {
        return {
          value: facility.u_name,
          label: facility.u_name,
          id: facility.id
        };
      })
    : null;

  const schoolsOptions = !schools.loading
    ? schools.data.schools.schools.map(schools => {
        return { value: schools.name, label: schools.name };
      })
    : null;

  const teamsOptions = !teams.loading
    ? teams.data.teams.teams.map(teams => {
        return { value: teams.name, label: teams.name };
      })
    : null;

  return (
    <aside className="profile-aside">
      <div className={classes.ProfileImage}>
        <img src={userPic} alt="" />
      </div>
      <Form
        initialValues={
          {
            ...props.initialData,
            position: {
              value: props.initialData.position,
              label: props.initialData.position
            },
            position2: {
              value: props.initialData.position2,
              label: props.initialData.position2
            },
            bats_hand: {
              value: props.initialData.bats_hand,
              label: props.initialData.bats_hand
            },
            throws_hand: {
              value: props.initialData.throws_hand,
              label: props.initialData.throws_hand
            }
          } || {
            feet: null,
            inches: 0,
            weight: 50,
            age: null,
            biography: "",
            position: null,
            position2: null,
            first_name: null,
            last_name: null,
            bats_hand: null,
            throws_hand: null,
            school: null,
            teams: [],
            facilities: []
          }
        }
        onSubmit={values => props.onSubmit(values)}
        validate={values => {
          const errors = {};

          if (!values.first_name) {
            errors.first_name = "Required";
          }
          if (!values.last_name) {
            errors.last_name = "Required";
          }
          if (!values.position) {
            errors.position = "Required";
          }
          if (!values.age) {
            errors.age = "Required";
          }
          if (!values.feet) {
            errors.feet = "Required";
          }
          if (!values.weight) {
            errors.weight = "Required";
          }
          if (!values.throws_hand) {
            errors.throws_hand = "Required";
          }
          if (!values.bats_hand) {
            errors.bats_hand = "Required";
          }
          if (values.age > 30) {
            errors.age = "Must not be older than 30";
          }
          if (values.age < 0) {
            errors.age = "Must be older than 0";
          }
          if (values.feet > 7) {
            errors.feet = "Maximum height is 7";
          }
          if (values.feet < 4) {
            errors.feet = "Minimal height is 4";
          }
          if (values.inches < 0 || values.inches > 11) {
            errors.inches = "Inches can be from 0 to 11";
          }
          if (values.weight < 50 || values.weight > 350) {
            errors.weight = "Weight can be from 50 to 350";
          }
          return errors;
        }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={classes.SidebarForm}>
            <Field name="first_name">
              {({ input, meta }) => (
                <>
                  <input
                    {...input}
                    name="first_name"
                    placeholder="First Name *"
                  />
                  {meta.touched && meta.error && (
                    <p style={errorStyle}>{meta.error}</p>
                  )}
                </>
              )}
            </Field>
            <Field name="last_name">
              {({ input, meta }) => (
                <>
                  <input
                    {...input}
                    name="last_name"
                    placeholder="Last Name *"
                  />
                  {meta.touched && meta.error && (
                    <p style={errorStyle}>{meta.error}</p>
                  )}
                </>
              )}
            </Field>
            <Field
              name="position"
              component={Select}
              options={positionOptions}
              placeholder="Position in game *"
            />
            <Field
              name="position2"
              component={Select}
              options={positionOptions}
              placeholder="Secondary position in game"
            />
            <h2>Personal info</h2>
            <Field name="age">
              {({ input, meta }) => (
                <>
                  <input
                    {...input}
                    name="Age"
                    placeholder="Age *"
                    type="number"
                  />
                  {meta.touched && meta.error && (
                    <p style={errorStyle}>{meta.error}</p>
                  )}
                </>
              )}
            </Field>
            <Field name="feet">
              {({ input, meta }) => (
                <>
                  <input {...input} name="Feet" placeholder="Feet *" />
                  {meta.touched && meta.error && (
                    <p style={errorStyle}>{meta.error}</p>
                  )}
                </>
              )}
            </Field>
            <Field name="inches">
              {({ input, meta }) => (
                <>
                  <input {...input} name="Inches" placeholder="Inches" />
                  {meta.touched && meta.error && (
                    <p style={errorStyle}>{meta.error}</p>
                  )}
                </>
              )}
            </Field>
            <Field name="weight">
              {({ input, meta }) => (
                <>
                  <input {...input} name="Weight" placeholder="Weight *" />
                  {meta.touched && meta.error && (
                    <p style={errorStyle}>{meta.error}</p>
                  )}
                </>
              )}
            </Field>
            <Field
              name="throws_hand"
              component={Select}
              options={handOptions}
              placeholder="Throws *"
            />
            <Field
              name="bats_hand"
              component={Select}
              options={handOptions}
              placeholder="Bats *"
            />
            <h2>School</h2>
            <Field
              name="school"
              component={Select}
              options={schoolsOptions}
              placeholder="FSU"
            />
            <Field
              name="schoolYear"
              component={Select}
              options={schoolYearOptions}
              placeholder="School Year"
            />
            <Field
              name="team"
              component={Select}
              isMulti={true}
              options={teamsOptions}
              placeholder="Team"
            />
            <h2>Facility</h2>
            <Field
              name="facilities"
              component={Select}
              isMulti={true}
              options={facilitiesOptions}
              placeholder="Facility"
            />
            <h2>About</h2>
            <Field name="biography" component="textarea" />
            <div className={classes.FormControl}>
              <button
                className={classes.CancelButton}
                type="button"
                onClick={props.onFormClose}
              >
                Cancel
              </button>
              <button className={classes.SubmitButton} type="submit">
                Submit
              </button>
            </div>
          </form>
        )}
      />
    </aside>
  );
};

export default SidebarForm;
