import React from "react";
import { Header, DownloadTemplate } from "../components/Student";
const Project = ({ value }) => {
  return (
    <>
      <Header value={"projekti"} path={"/student/projects"} third={true} />
      <DownloadTemplate value={value} />
    </>
  );
};

export default Project;
