import { publicRequest } from "../store/fetchMethods";
import { loginFail, loginStart, loginSuccess } from "./UserSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFail(error));
  }
};

export const logout = async (dispatch) => {
  try {
    await dispatch(logout());
  } catch (error) {
    dispatch(logout(error));
  }
};
