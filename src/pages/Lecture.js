import React from "react";
import { Header, VideoTemplate, Youtube } from "../components/Student";
const Lecture = () => {
  return (
    <>
      <Youtube />
      <Header value={"lekcije"} path={"/student/lectures"} third={true} />
      <VideoTemplate value="lekcija" />
    </>
  );
};

export default Lecture;
