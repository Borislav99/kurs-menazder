import React from "react";
import { useContext, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/login_reducer";
import {
  LOGIN_LOADING,
  LOGIN_ERROR,
  LOGIN_RESET,
  LOGIN_USER,
  SET_PRESENTATIONS,
  SET_PROJECTS,
  SET_EXERCISES,
  SET_HOMEWORK,
  SET_TASKS,
  SET_TUTORIALS,
  SET_LECTURES,
  LOGOUT_USER,
  ADD_HOMEWORK,
} from "../actions";
import { getToken } from "../utils/helpers";
const initialState = {
  loginLoading: false,
  isAuth: false,
  user: {},
  presentations: [],
  projects: [],
  exercises: [],
  tasks: [],
  tutorials: [],
  lectures: [],
};
const LoginContext = React.createContext();
export const LoginProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // login user function
  const loginUser = async (name, password) => {
    dispatch({ type: LOGIN_LOADING, payload: true });
    // empty fields
    if (name === "" || password === "") {
      dispatch({ type: LOGIN_ERROR });
      setTimeout(() => {
        dispatch({ type: LOGIN_RESET });
        dispatch({ type: LOGIN_LOADING, payload: false });
      }, 2000);
    } else {
      try {
        const req = await axios.post(
          `${process.env.REACT_APP_BACK_END_API_KEY}/student/login`,
          {
            username: name,
            password,
          }
        );
        dispatch({
          type: LOGIN_USER,
          payload: { token: req.data.token, student: req.data.student },
        });
        dispatch({ type: LOGIN_LOADING, payload: false });
        // get requests
        getStudentData("student/presentations", SET_PRESENTATIONS);
        getStudentData("student/projects", SET_PROJECTS);
        getStudentData("student/exercises", SET_EXERCISES);
        getStudentData("student/homework", SET_HOMEWORK);
        getStudentData("student/tasks", SET_TASKS);
        getStudentData("student/tutorials", SET_TUTORIALS);
        getStudentData("student/lectures", SET_LECTURES);
      } catch (error) {
        dispatch({ type: LOGIN_ERROR });
        setTimeout(() => {
          dispatch({ type: LOGIN_RESET });
          dispatch({ type: LOGIN_LOADING, payload: false });
        }, 2000);
      }
    }
  };
  // logout korisnika
  const logoutUser = async () => {
    const token = getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const req = await axios.post(
      `${process.env.REACT_APP_BACK_END_API_KEY}/student/logout`,
      {},
      config
    );
    dispatch({ type: LOGOUT_USER });
  };
  // dobijanje prezentacija
  const getStudentData = async (route, action) => {
    const token = getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const req = await axios.get(
      `${process.env.REACT_APP_BACK_END_API_KEY}/${route}`,
      config
    );
    dispatch({ type: action, payload: req.data.response });
  };
  // dodaj zadacu
  const addHomework = (value) => {
    dispatch({ type: ADD_HOMEWORK, payload: value });
  };
  return (
    <LoginContext.Provider
      value={{
        ...state,
        loginUser,
        logoutUser,
        addHomework,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
// export
export const useLoginContext = () => {
  return useContext(LoginContext);
};
