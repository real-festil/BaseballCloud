import React from "react";
import { Form, Field } from "react-final-form";
import Select from "../../selectComponent/selectComponent";

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
    <Form
      onSubmit={values => console.log(values)}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="firstName">
            {({ input }) => (
              <input {...input} name="firstName" placeholder="First Name" />
            )}
          </Field>
          <Field name="lastName">
            {({ input }) => (
              <input {...input} name="lastName" placeholder="Last Name" />
            )}
          </Field>
          <Field
            name="Position"
            component={Select}
            options={positionOptions}
            placeholder="Position in game"
          />
          <Field
            name="SecPosition"
            component={Select}
            options={positionOptions}
            placeholder="Secondary position in game"
          />
          <h2>Personal info</h2>
          <Field name="firstName">
            {({ input }) => (
              <input {...input} name="firstName" placeholder="Age" />
            )}
          </Field>
          <Field name="firstName">
            {({ input }) => (
              <input {...input} name="firstName" placeholder="Feet" />
            )}
          </Field>
          <Field name="firstName">
            {({ input }) => (
              <input {...input} name="firstName" placeholder="Inches" />
            )}
          </Field>
          <Field name="firstName">
            {({ input }) => (
              <input {...input} name="firstName" placeholder="Weight" />
            )}
          </Field>
          <Field
            name="Throws"
            component={Select}
            options={handOptions}
            placeholder="Throws"
          />
          <Field
            name="Bats"
            component={Select}
            options={handOptions}
            placeholder="Bats"
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
            name="Team"
            component={Select}
            options={handOptions}
            placeholder="Team"
          />
          <h2>Facility</h2>
          <Field
            name="Facility"
            component={Select}
            options={handOptions}
            placeholder="Facility"
          />
          <h2>About</h2>
          <Field name="About" component="textarea" />
          <button>Cancel</button>
          <button>Submit</button>
        </form>
      )}
    />
  </aside>
);

export default SidebarForm;
