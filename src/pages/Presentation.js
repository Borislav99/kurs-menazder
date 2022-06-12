import React from "react";
import { Header, DownloadTemplate } from "../components/Student";
const Presentation = ({ value }) => {
  return (
    <>
      <Header
        value={"prezentacije"}
        path={"/student/presentations"}
        third={true}
      />
      <DownloadTemplate value={value} />
    </>
  );
};

export default Presentation;
