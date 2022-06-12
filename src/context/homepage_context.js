// react stuff
import React, { useEffect } from "react";
import axios from "axios";
import { useContext, useReducer } from "react";
// assets
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  CHANGE_ACTIVE_LINK,
  SET_SECTIONS_POSITIONS,
  CHECK_SECTIONS_POSITIONS,
  SHOW_CONTACT_FEEDBACK,
  CLEAR_FEEDBACK,
  SET_SCROLLED_PERCENTAGE,
  SEND_EMAIL,
} from "../actions";
// context setup
import reducer from "../reducers/homepage_reducer";
const initialState = {
  isSidebarOpen: false,
  activeLink: "pocetna",
  sections: {
    pocetna: 0,
    informacije: 0,
    funkcije: 0,
    primjeri: 0,
    kontakt: 0,
  },
  scrolledPercentage: 0,
  feedback: {
    text: "",
    value: "",
  },
  emailLoading: false,
};
const HomepageContext = React.createContext();
export const HomepageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //   functions
  const sidebarToggle = (value) => {
    if (value) {
      dispatch({ type: SIDEBAR_OPEN });
    } else {
      dispatch({ type: SIDEBAR_CLOSE });
    }
  };
  const changeActiveLink = (value) => {
    dispatch({ type: CHANGE_ACTIVE_LINK, payload: value });
  };
  const getSectionsPositions = () => {
    const header = 0;
    const information = document.querySelector(
      "#information-section"
    ).offsetTop;
    const functions = document.querySelector("#functions-section").offsetTop;
    const examples = document.querySelector("#examples-section").offsetTop;
    const contact = document.querySelector("#contact-section").offsetTop;
    return {
      pocetna: header,
      informacije: information,
      funkcije: functions,
      primjeri: examples,
      kontakt: contact,
    };
  };
  const sectionsPositions = () => {
    const positionsObject = getSectionsPositions();
    dispatch({ type: SET_SECTIONS_POSITIONS, payload: positionsObject });
  };
  const checkSectionsPosition = (currentHeight) => {
    getSectionsPositions();
    dispatch({ type: CHECK_SECTIONS_POSITIONS, payload: currentHeight });
  };
  const sendEmail = async (value) => {
    const response = await axios.post(
      `${process.env.REACT_APP_BACK_END_API_KEY}/other/contact`,
      value
    );
  };
  const scrollPercentage = () => {
    var h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";
    var percent =
      ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
    return percent;
  };
  const handleSubmit = async (input) => {
    dispatch({ type: SEND_EMAIL, payload: true });
    const valuesArray = Object.values(input);
    const validation = (element) => element.trim() === "";
    const check = valuesArray.some(validation);
    if (check) {
      dispatch({
        type: SHOW_CONTACT_FEEDBACK,
        payload: {
          text: "Molim unesite validne podatke u formu",
          value: "negative-feedback",
        },
      });
      dispatch({ type: SEND_EMAIL, payload: false });
    } else {
      await sendEmail(input);
      dispatch({
        type: SHOW_CONTACT_FEEDBACK,
        payload: {
          text: "Hvala Vam na upitu, uskoro cemo Vas kontaktirati!",
          value: "positive-feedback",
        },
      });
      dispatch({ type: SEND_EMAIL, payload: false });
    }
  };
  const clearFeedback = () => {
    dispatch({ type: CLEAR_FEEDBACK });
  };
  // use effects
  useEffect(() => {
    window.addEventListener("resize", sectionsPositions);
    sectionsPositions();
    return () => window.removeEventListener("resize", sectionsPositions);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const currentWindowHeight = window.pageYOffset;
      const scrolledValue = scrollPercentage();
      dispatch({ type: SET_SCROLLED_PERCENTAGE, payload: scrolledValue });
      checkSectionsPosition(currentWindowHeight);
      return () => window.removeEventListener("scroll", checkSectionsPosition);
    });
  }, []);
  return (
    <HomepageContext.Provider
      value={{
        ...state,
        sidebarToggle,
        changeActiveLink,
        handleSubmit,
        clearFeedback,
        sectionsPositions,
      }}
    >
      {children}
    </HomepageContext.Provider>
  );
};
// export
export const useHomepageContext = () => {
  return useContext(HomepageContext);
};
