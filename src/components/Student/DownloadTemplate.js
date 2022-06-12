// react stuff
import React from "react";
import { powerPoint, app } from "../../utils/fontawesome";
import Material from "./Material";
import "./Main.css";
// context stuff
import { useLoginContext } from "../../context/login_context";
const DownloadTemplate = ({ value }) => {
  const { presentations, projects, exercises } = useLoginContext();
  let data, icon;
  // check value then render
  if (value === "prezentacije") {
    data = presentations;
    icon = powerPoint;
  } else if (value === "projekti") {
    data = projects;
    icon = app;
  } else if (value === "vjezbe") {
    data = exercises;
    icon = app;
  }
  if (data.length === 0) {
    return <Material value={value} />;
  }
  return (
    <main className="main-container">
      {data.map((item, index) => {
        const { name, path } = item;
        return (
          <a
            key={index}
            href={path}
            target="_blank"
            className="single-course"
            rel="noreferrer"
          >
            <span className="single-course__icon">
              <i className="font-awesome ">{icon}</i>
            </span>
            {name}
          </a>
        );
      })}
    </main>
  );
};
export default DownloadTemplate;
