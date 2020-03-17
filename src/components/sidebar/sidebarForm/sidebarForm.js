import React from "react";
import { Form, Field } from "react-final-form";
import Select from "../../selectComponent/selectComponent";
import classes from "./sidebarForm.module.css";
import userPic from "../../../styles/img/userpic.png";

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

const errorStyle = {
  color: "red",
  paddingBottom: "10px"
};

const SidebarForm = props => (
  <aside className="profile-aside">
    <div className={classes.ProfileImage}>
      <img src={userPic} alt="" />
    </div>
    <Form
      onSubmit={values => console.log(values)}
      validate={values => {
        const errors = {};

        if (!values.firstName) {
          errors.firstName = "Required";
        }
        if (!values.lastName) {
          errors.lastName = "Required";
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
        if (!values.throws) {
          errors.throws = "Required";
        }
        if (!values.bats) {
          errors.bats = "Required";
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
          <Field name="firstName">
            {({ input, meta }) => (
              <>
                <input {...input} name="firstName" placeholder="First Name *" />
                {meta.touched && meta.error && (
                  <p style={errorStyle}>{meta.error}</p>
                )}
              </>
            )}
          </Field>
          <Field name="lastName">
            {({ input, meta }) => (
              <>
                <input {...input} name="lastName" placeholder="Last Name *" />
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
            name="secPosition"
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
            name="throws"
            component={Select}
            options={handOptions}
            placeholder="Throws *"
          />
          <Field
            name="bats"
            component={Select}
            options={handOptions}
            placeholder="Bats *"
          />
          <h2>School</h2>
          <Field
            name="FSU"
            component={Select}
            options={handOptions}
            placeholder="FSU"
          />
          <Field
            name="schoolYear"
            component={Select}
            options={handOptions}
            placeholder="School Year"
          />
          <Field
            name="team"
            component={Select}
            isMulti={true}
            options={handOptions}
            placeholder="Team"
          />
          <h2>Facility</h2>
          <Field
            name="facility"
            component={Select}
            isMulti={true}
            options={handOptions}
            placeholder="Facility"
          />
          <h2>About</h2>
          <Field name="about" component="textarea" />
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

export default SidebarForm;
