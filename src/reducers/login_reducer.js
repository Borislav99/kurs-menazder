import React from "react";
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
const student_reducer = (state, action) => {
  if (action.type === LOGIN_LOADING) {
    return { ...state, loginLoading: action.payload };
  }
  if (action.type == LOGIN_ERROR) {
    return { ...state, loginError: true };
  }
  if (action.type == LOGIN_RESET) {
    return { ...state, loginError: false };
  }
  if (action.type === LOGIN_USER) {
    const { student, token } = action.payload;
    localStorage.setItem("token", token);
    return { ...state, isAuth: true, user: student };
  }
  if (action.type === SET_PRESENTATIONS) {
    return { ...state, presentations: action.payload };
  }
  if (action.type === SET_PROJECTS) {
    return { ...state, projects: action.payload };
  }
  if (action.type === SET_EXERCISES) {
    return { ...state, exercises: action.payload };
  }
  if (action.type === SET_HOMEWORK) {
    return { ...state, homework: action.payload };
  }
  if (action.type === SET_TASKS) {
    return { ...state, tasks: action.payload };
  }
  if (action.type === ADD_HOMEWORK) {
    const newState = [...state.tasks, action.payload];
    return { ...state, tasks: newState };
  }
  if (action.type === SET_TUTORIALS) {
    return { ...state, tutorials: action.payload };
  }
  if (action.type === SET_LECTURES) {
    return { ...state, lectures: action.payload };
  }
  if (action.type === LOGOUT_USER) {
    localStorage.setItem("token", "");
    return {
      ...state,
      loginLoading: false,
      isAuth: false,
      user: {},
      loading: false,
      presentations: [],
      projects: [],
      exercises: [],
      homework: [],
    };
  }
};
export default student_reducer;
