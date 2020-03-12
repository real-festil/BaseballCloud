import React from "react";

const RegisterCheckbox = props => {
  const { type, changeType } = props;

  return (
    <div className="modal-signUp__toggle-block">
      <button
        className={
          "modal-signUp__btn modal-signUp__btn--player " +
          (type === "Player" && "modal-btn-checked")
        }
        onClick={() => changeType("Player")}
      >
        <span
          className={"modal-signUp__check-img" + (type === "Player" && "hide")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="15"
            viewBox="0 0 14 15"
          >
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M6.116 10.884l5.482-5.482a.566.566 0 0 0 0-.804l-.91-.91a.566.566 0 0 0-.804 0l-4.17 4.17L3.83 5.972a.566.566 0 0 0-.803 0l-.91.91a.566.566 0 0 0 0 .804l3.196 3.197c.223.223.58.223.803 0zM13.714 3v8.571a2.572 2.572 0 0 1-2.571 2.572H2.57A2.572 2.572 0 0 1 0 11.57V3A2.572 2.572 0 0 1 2.571.429h8.572A2.572 2.572 0 0 1 13.714 3z"
            ></path>
          </svg>
        </span>
        <span className="modal-signUp__btn-label">Sign Up as Player</span>
      </button>
      <button
        className={
          "modal-signUp__btn modal-signUp__btn--player " +
          (type === "Scout" && "modal-btn-checked")
        }
        onClick={() => changeType("Scout")}
      >
        <span
          className={"modal-signUp__check-img" + (type === "Scout" && "hide")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="15"
            viewBox="0 0 14 15"
          >
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M6.116 10.884l5.482-5.482a.566.566 0 0 0 0-.804l-.91-.91a.566.566 0 0 0-.804 0l-4.17 4.17L3.83 5.972a.566.566 0 0 0-.803 0l-.91.91a.566.566 0 0 0 0 .804l3.196 3.197c.223.223.58.223.803 0zM13.714 3v8.571a2.572 2.572 0 0 1-2.571 2.572H2.57A2.572 2.572 0 0 1 0 11.57V3A2.572 2.572 0 0 1 2.571.429h8.572A2.572 2.572 0 0 1 13.714 3z"
            ></path>
          </svg>
        </span>
        <span className="modal-signUp__btn-label">Sign Up as Scout</span>
      </button>
    </div>
  );
};

export default RegisterCheckbox;
