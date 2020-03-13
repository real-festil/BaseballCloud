import { handleActions, combineActions } from "redux-actions";
import * as authActions from "../actions/auth";
import { combineReducers } from "redux";

const user = handleActions(
  {
    [combineActions(authActions.registerSuccess, authActions.loginSuccess)](
      state,
      action
    ) {
      const { id, email } = action.payload;

      return { id, email };
    },
    [authActions.registerFailure](state, action) {
      return { registerError: action.payload.error };
    },
    [authActions.loginFailure](state, action) {
      return { loginError: action.payload.error };
    }
  },
  ""
);

const registerState = handleActions(
  {
    [authActions.registerRequest]() {
      return "requested";
    },
    [authActions.registerSuccess]() {
      return "succeed";
    },
    [authActions.registerFailure]() {
      return "failed";
    }
  },
  ""
);

const loginState = handleActions(
  {
    [authActions.loginRequest]() {
      return "requested";
    },
    [authActions.loginSuccess]() {
      return "succeed";
    },
    [authActions.loginFailure]() {
      return "failed";
    }
  },
  ""
);

export default combineReducers({ user, registerState, loginState });
