import React, { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_ERRORS,
  USER_LOADED,
  AUTH_ERROR
} from "../types";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  //load user
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const res = await axios.get("/api/auth");

    try {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: AUTH_ERROR
      });
    }
  };
  //register user
  const register = async formData => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/users", formData, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      loadUser();
    } catch (err) {
      dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
    }
  };
  //login user
  const login = () => {
    console.log("login");
  };

  //logout
  const logout = () => {
    console.log("logout");
  };

  //clear errors
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
