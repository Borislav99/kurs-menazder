import React from "react";
import { Header, Homepage } from "../components/Student";
import { useLoginContext } from "../context/login_context";
const Home = () => {
  const {
    user: { courseName },
  } = useLoginContext();
  return (
    <>
      <Header />
      <Homepage />
    </>
  );
};
export default Home;
