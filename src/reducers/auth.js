import { handleActions } from "redux-actions";
import * as authActions from "../actions/auth";
import { combineReducers } from "redux";

const register = handleActions(
  {
    [authActions.registerSuccess](state, action) {
      const { email, password } = action.payload;

      console.log(email, password);
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

export default combineReducers({ register, registerState });
