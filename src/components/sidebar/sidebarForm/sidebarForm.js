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

const SidebarForm = props => (
  <aside className="profile-aside">
    <div className={classes.ProfileImage}>
      <img src={userPic} alt="" />
    </div>
    <Form
      onSubmit={values => console.log(values)}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={classes.SidebarForm}>
          <Field name="firstName">
            {({ input }) => (
              <input {...input} name="firstName" placeholder="First Name *" />
            )}
          </Field>
          <Field name="lastName">
            {({ input }) => (
              <input {...input} name="lastName" placeholder="Last Name *" />
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
            {({ input }) => <input {...input} name="Age" placeholder="Age *" />}
          </Field>
          <Field name="feet">
            {({ input }) => (
              <input {...input} name="Feet" placeholder="Feet *" />
            )}
          </Field>
          <Field name="inches">
            {({ input }) => (
              <input {...input} name="Inches" placeholder="Inches" />
            )}
          </Field>
          <Field name="weight">
            {({ input }) => (
              <input {...input} name="Weight" placeholder="Weight *" />
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
            <button className={classes.CancelButton}>Cancel</button>
            <button className={classes.SubmitButton}>Submit</button>
          </div>
        </form>
      )}
    />
  </aside>
);

export default SidebarForm;
