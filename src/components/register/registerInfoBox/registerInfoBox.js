import React from "react";

const RegisterInfoBox = props => (
  <>
    {props.type === "Player" ? (
      <div className="modal-signUp__toggle-info modal-signUp__toggle-info--player">
        <div className="modal-signUp__toggle-title">Players</div>
        <p className="modal-signUp__toggle-desc">
          Players have their own profile within the system and plan on having
          data collected.
        </p>
      </div>
    ) : (
      <div className="modal-signUp__toggle-info modal-signUp__toggle-info--scout">
        <div className="modal-signUp__toggle-title">Scouts</div>
        <p className="modal-signUp__toggle-desc">
          Coaches and scouts can view players in the system but do not have
          their own profile.
        </p>
      </div>
    )}
  </>
);

export default RegisterInfoBox;
