// react stuff
import React from "react";
import { Link } from "react-router-dom";
import { folderIcon } from "../../utils/fontawesome";
import "./Main.css";
// context stuff
import { useLoginContext } from "../../context/login_context";
const Main = () => {
  const { user } = useLoginContext();
  const { courseName } = user;
  return (
    <main className="main-container">
      <Link to="/student/homepage" className="single-course">
        <span className="single-course__icon">
          <i className="font-awesome ">{folderIcon}</i>
        </span>
        {courseName}
      </Link>
    </main>
  );
};
export default Main;
