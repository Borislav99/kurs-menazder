import React from "react";
import {
  OPEN_UPLOAD,
  CLOSE_UPLOAD,
  UPLOAD_LOADING,
  OPEN_TUTORIAL,
  CLOSE_TUTORIAL,
  SET_CURRENT_TUTORIAL,
} from "../actions";
const student_reducer = (state, action) => {
  if (action.type === SET_CURRENT_TUTORIAL) {
    return { ...state, currentTutorial: action.payload };
  }
  if (action.type === OPEN_UPLOAD) {
    return { ...state, upload: true };
  }
  if (action.type === CLOSE_UPLOAD) {
    return { ...state, upload: false };
  }
  if (action.type === UPLOAD_LOADING) {
    return { ...state, uploadLoading: action.payload };
  }
  if (action.type === OPEN_TUTORIAL) {
    return { ...state, tutorial: true };
  }
  if (action.type === CLOSE_TUTORIAL) {
    return { ...state, tutorial: false };
  }
};
export default student_reducer;
