import React from "react";
import { Header, VideoTemplate, Youtube } from "../components/Student";
const Tutorial = () => {
  return (
    <>
      <Youtube />
      <Header value={"tutorijali"} path={"/student/tutorials"} third={true} />
      <VideoTemplate value="tutorijal" />
    </>
  );
};

export default Tutorial;
