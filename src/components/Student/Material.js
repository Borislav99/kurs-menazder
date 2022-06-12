// react stuff
import React from "react";
import { capitalize } from "../../utils/helpers";
import "./Main.css";
// context stuff
import { useLoginContext } from "../../context/login_context";
const Material = ({ value }) => {
  const {
    user: { instructorName },
  } = useLoginContext();
  return (
    <main className="main-container">
      <p>
        Instruktor {capitalize(instructorName)} jos nije objavio {value}.{" "}
      </p>
    </main>
  );
};

export default Material;
