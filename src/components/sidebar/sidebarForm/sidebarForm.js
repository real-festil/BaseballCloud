import React from "react";
import { Form, Field } from "react-final-form";
import Select from "../../selectComponent/selectComponent";
import classes from "./sidebarForm.module.css";
import userPic from "../../../styles/img/userpic.png";
import { useQuery } from "@apollo/react-hooks";
import { GET_FACILITIES, GET_SCHOOLS, GET_TEAMS } from "../../../utils/queries";

const positionOptions = [
  { id: "Catcher", name: "Catcher" },
  { id: "FirstBase", name: "First Base" },
  { id: "SecondBase", name: "Second Base" },
  { id: "Shortstop", name: "Shortstop" },
  { id: "ThirdBase", name: "Third Base" },
  { id: "Outfield", name: "Outfield" },
  { id: "Pitcher", name: "Pitcher" }
];

const handOptions = [
  { id: "R", name: "R" },
  { id: "L", name: "L" }
];

const schoolYearOptions = [
  { id: "Freshman", name: "Freshman" },
  { id: "Sophomore", name: "Sophomore" },
  { id: "Junior", name: "Junior" },
  { id: "Senior", name: "Senior" },
  { id: "None", name: "None" }
];

const errorStyle = {
  color: "red",
  paddingBottom: "10px"
};

const required = value => (value ? undefined : "Required");

const ageValidate = value => {
  if (!value) return "Required";
  if (value > 30 || value < 0) return "Must not be older than 30";
};

const feetValidate = value => {
  if (!value) return "Required";
  if (value > 7) {
    return "Maximum height is 7";
  }
  if (value < 4) {
    return "Minimal height is 4";
  }
};

const inchesValidate = value => {
  if (value < 0 || value > 11) {
    return "Inches can be from 0 to 11";
  }
};

const weightValidate = value => {
  if (value < 50 || value > 350) {
    return "Weight can be from 50 to 350";
  }
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
          id: facility.id,
          name: facility.u_name
        };
      })
    : null;

  const initialFacilities = props.initialData.facilities.map(facility => {
    return {
      id: facility.id,
      name: facility.u_name
    };
  });

  const schoolsOptions = !schools.loading
    ? schools.data.schools.schools.map(schools => {
        return { id: schools.id, name: schools.name };
      })
    : null;

  const teamsOptions = !teams.loading
    ? teams.data.teams.teams.map(teams => {
        return { id: teams.id, name: teams.name };
      })
    : null;

  const initialValues = {
    ...props.initialData,
    position: {
      id: props.initialData.position,
      name: props.initialData.position
    },
    position2: {
      id: props.initialData.position2,
      name: props.initialData.position2
    },
    bats_hand: {
      id: props.initialData.bats_hand,
      name: props.initialData.bats_hand
    },
    throws_hand: {
      id: props.initialData.throws_hand,
      name: props.initialData.throws_hand
    },
    school_year: {
      id: props.initialData.school_year,
      name: props.initialData.school_year
    },
    facilities: initialFacilities
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
  };

  return (
    <aside className="profile-aside">
      <div className={classes.ProfileImage}>
        <img src={userPic} alt="" />
      </div>
      <Form
        initialValues={initialValues}
        onSubmit={values => props.onSubmit(values)}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={classes.SidebarForm}>
            <Field name="first_name" validate={required}>
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
            <Field name="last_name" validate={required}>
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
              validate={required}
            />
            <Field
              name="position2"
              component={Select}
              options={positionOptions}
              placeholder="Secondary position in game"
            />
            <h2>Personal info</h2>
            <Field name="age" validate={ageValidate}>
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
            <Field name="feet" validate={feetValidate}>
              {({ input, meta }) => (
                <>
                  <input {...input} name="Feet" placeholder="Feet *" />
                  {meta.touched && meta.error && (
                    <p style={errorStyle}>{meta.error}</p>
                  )}
                </>
              )}
            </Field>
            <Field name="inches" validate={inchesValidate}>
              {({ input, meta }) => (
                <>
                  <input {...input} name="Inches" placeholder="Inches" />
                  {meta.touched && meta.error && (
                    <p style={errorStyle}>{meta.error}</p>
                  )}
                </>
              )}
            </Field>
            <Field name="weight" validate={weightValidate}>
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
              validate={required}
              options={handOptions}
              placeholder="Throws *"
            />
            <Field
              name="bats_hand"
              component={Select}
              validate={required}
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
              name="school_year"
              component={Select}
              options={schoolYearOptions}
              placeholder="School Year"
            />
            <Field
              name="teams"
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
