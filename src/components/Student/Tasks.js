// react stuff
import React from "react";
import "./Main.css";
import { plus, exclamation, app } from "../../utils/fontawesome";
// context stuff
import { useStudentContext } from "../../context/student_context";
import { useLoginContext } from "../../context/login_context";
const Main = () => {
  const { openUpload } = useStudentContext();
  const { tasks, user } = useLoginContext();
  const { homeworkLink, homeworkAllowed } = user;
  return (
    <main className="main-container">
      {/* send button */}
      {homeworkAllowed ? (
        <a className="single-course" onClick={openUpload}>
          <span className="single-course__icon">
            <i className="font-awesome">{plus}</i>
          </span>
          posalji zadacu
        </a>
      ) : (
        <a className="single-course single-course--not-allowed">
          <span className="single-course__icon">
            <i className="font-awesome">{plus}</i>
          </span>
          posalji zadacu
        </a>
      )}
      {/* send button */}
      {/* important */}
      <a target="_blank" href={homeworkLink} className="single-course">
        <span className="single-course__icon">
          <i className="font-awesome">{exclamation}</i>
        </span>
        pravila slanja zadace
      </a>
      {/* important */}
      {tasks.map((task) => {
        const { _id: id, name } = task;
        return (
          <a key={id} className="single-course single-course not-allowed">
            <span className="single-course__icon">
              <i className="font-awesome">{app}</i>
            </span>
            {name}
          </a>
        );
      })}
    </main>
  );
};

export default Main;
