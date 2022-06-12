// react stuff
import React from "react";
import { useContext, useReducer } from "react";
import axios from "axios";
import { getToken } from "../utils/helpers";
// context stuff
import reducer from "../reducers/student_reducer";
import { useLoginContext } from "./login_context";
import {
  OPEN_UPLOAD,
  CLOSE_UPLOAD,
  UPLOAD_LOADING,
  OPEN_TUTORIAL,
  CLOSE_TUTORIAL,
  SET_CURRENT_TUTORIAL,
} from "../actions";
const initialState = {
  upload: false,
  uploadLoading: false,
  tutorial: false,
  currentTutorial: "",
};
const StudentContext = React.createContext();
export const StudentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // login context
  const { addHomework } = useLoginContext();
  // otvori upload
  const openUpload = () => {
    dispatch({ type: OPEN_UPLOAD });
  };
  // zatvori upload
  const closeUpload = () => {
    dispatch({ type: CLOSE_UPLOAD });
  };
  // upload loading
  const changeUploadLoading = (value) => {
    dispatch({ type: UPLOAD_LOADING, payload: value });
  };
  // otvori tutorijal
  const openTutorial = () => {
    dispatch({ type: OPEN_TUTORIAL });
  };
  // zatvori tutorijal
  const closeTutorial = () => {
    dispatch({ type: CLOSE_TUTORIAL });
  };
  // dodaj zadacu
  // posalji zadacu
  const sendHomework = async (value) => {
    changeUploadLoading(true);
    const data = value.files[0];
    const fd = new FormData();
    const token = getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      fd.append("file", data, data.name);
      const req = await axios.post(
        `${process.env.REACT_APP_BACK_END_API_KEY}/student/task`,
        fd,
        config
      );
      const task = req.data.task;
      addHomework(task);
      changeUploadLoading(false);
      alert("Uspjesno ste poslali zadacu, hvala.");
    } catch (error) {
      changeUploadLoading(false);
      alert("Doslo je do greske servera, radimo na gresci.");
      console.log("error");
    }
  };
  const setTutorial = (value) => {
    dispatch({ type: SET_CURRENT_TUTORIAL, payload: value });
  };
  return (
    <StudentContext.Provider
      value={{
        ...state,
        openUpload,
        closeUpload,
        changeUploadLoading,
        sendHomework,
        openTutorial,
        closeTutorial,
        setTutorial,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
// export
export const useStudentContext = () => {
  return useContext(StudentContext);
};
