import React from "react";
import { Tasks } from "../components/Student";
import { Header, Upload, Loading } from "../components/Student";
const Task = () => {
  return (
    <>
      <Loading />
      <Upload />
      <Header value={"izrada"} path={"/student/tasks"} third={true} />
      <Tasks />
    </>
  );
};

export default Task;
