import { createAction } from "redux-actions";
import API from "../utils/API";

export const registerRequest = createAction("REGISTER_REQUEST");
export const registerSuccess = createAction("REGISTER_SUCCESS");
export const registerFailure = createAction("REGISTER_FAILURE");

export const register = ({ email, password }) => async dispatch => {
  dispatch(registerRequest());
  try {
    const res = await API.post("/auth", {
      email,
      password
    });
    dispatch(registerSuccess(res.data));
  } catch (e) {
    // console.log(e.response.data.errors.full_messages[0]);
    dispatch(registerFailure());
  }
};
