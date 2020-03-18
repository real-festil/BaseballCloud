import { createAction } from "redux-actions";
import API from "../utils/API";
import history from "../utils/history";

export const registerRequest = createAction("REGISTER_REQUEST");
export const registerSuccess = createAction("REGISTER_SUCCESS");
export const registerFailure = createAction("REGISTER_FAILURE");

export const loginRequest = createAction("LOGIN_REQUEST");
export const loginSuccess = createAction("LOGIN_SUCCESS");
export const loginFailure = createAction("LOGIN_FAILURE");

export const register = ({ email, password }) => async dispatch => {
  dispatch(registerRequest());
  try {
    const res = await API.post("/auth", {
      email,
      password
    });
    dispatch(registerSuccess(res));
    history.push("/profile");
  } catch (e) {
    dispatch(
      registerFailure({ error: e.response.data.errors.full_messages[0] })
    );
  }
};

export const login = ({ email, password }) => async dispatch => {
  dispatch(loginRequest());
  try {
    const res = await API.post("/auth/sign_in", {
      email,
      password
    });
    dispatch(loginSuccess(res));
    history.push("/profile");
  } catch (e) {
    dispatch(loginFailure({ error: e.response.data.errors[0] }));
  }
};
