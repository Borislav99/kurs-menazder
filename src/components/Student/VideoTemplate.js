// react stuff
import React from "react";
import { youtube } from "../../utils/fontawesome";
import Material from "./Material";
// context stuff
import { useStudentContext } from "../../context/student_context";
import { useLoginContext } from "../../context/login_context";
const VideoTemplate = ({ value }) => {
  const { openTutorial, setTutorial } = useStudentContext();
  const { tutorials, lectures } = useLoginContext();
  let data;
  if (value === "tutorijal") {
    data = tutorials;
  } else if (value === "lekcija") {
    data = lectures;
  }
  if (data.length === 0) {
    return <Material value={value} />;
  }
  return (
    <main className="main-container">
      {/* single video */}
      {data.map((tutorial) => {
        const { _id, name, path } = tutorial;
        return (
          <a
            key={_id}
            className="single-course"
            onClick={() => {
              openTutorial();
              setTutorial(path);
            }}
          >
            <span className="single-course__icon">
              <i>{youtube}</i>
            </span>
            {name}
          </a>
        );
      })}
      {/* end of single video */}
    </main>
  );
};
export default VideoTemplate;
