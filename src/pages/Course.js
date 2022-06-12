import React from "react";
import { Header, Main } from "../components/Student";
import { useLoginContext } from "../context/login_context";
const Course = () => {
  const { user } = useLoginContext();
  const { courseName } = user;
  return (
    <>
      <Header value={courseName} path={"/student/homepage"} />
      <Main />
    </>
  );
};

export default Course;
