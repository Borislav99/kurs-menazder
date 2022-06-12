import React from "react";
import { Header, DownloadTemplate } from "../components/Student";
const Exercise = ({ value }) => {
  return (
    <>
      <Header value={"vjezba"} path={"/student/exercises"} third={true} />
      <DownloadTemplate value={value} />
    </>
  );
};

export default Exercise;
