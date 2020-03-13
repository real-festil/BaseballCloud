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
      return { error: action.payload.error };
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

export default combineReducers({ user, registerState });
