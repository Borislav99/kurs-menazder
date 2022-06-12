// assets
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  CHANGE_ACTIVE_LINK,
  SET_SECTIONS_POSITIONS,
  CHECK_SECTIONS_POSITIONS,
  SET_SCROLLED_PERCENTAGE,
  SHOW_CONTACT_FEEDBACK,
  CLEAR_FEEDBACK,
  SEND_EMAIL,
} from "../actions";
const homepage_reducer = (state, action) => {
  // if else....
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === CHANGE_ACTIVE_LINK) {
    return { ...state, activeLink: action.payload };
  }
  if (action.type === SET_SECTIONS_POSITIONS) {
    return {
      ...state,
      sections: {
        ...action.payload,
      },
    };
  }
  if (action.type === CHECK_SECTIONS_POSITIONS) {
    const positionsObject = state.sections;
    const positionsArray = Object.values(positionsObject);
    const positionNamesArray = Object.keys(positionsObject);
    let currentLink = "";
    positionsArray.forEach((item, index) => {
      if (action.payload + 50 >= item) {
        currentLink = positionNamesArray[index];
      }
    });
    if (currentLink) {
      return { ...state, activeLink: currentLink };
    }
    return { ...state };
  }
  if (action.type === SET_SCROLLED_PERCENTAGE) {
    return { ...state, scrolledPercentage: action.payload };
  }
  if (action.type === SHOW_CONTACT_FEEDBACK) {
    const value = action.payload.value;
    return {
      ...state,
      feedback: {
        text: action.payload.text,
        value: action.payload.value,
      },
    };
  }
  if (action.type === CLEAR_FEEDBACK) {
    return {
      ...state,
      feedback: {
        text: "",
        value: "",
      },
    };
  }
  if (action.type === SEND_EMAIL) {
    return { ...state, emailLoading: action.payload };
  }
};
export default homepage_reducer;
