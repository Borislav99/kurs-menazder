import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StudentProvider } from "./context/student_context";
import { LoginProvider } from "./context/login_context";

ReactDOM.render(
  <LoginProvider>
    <StudentProvider>
      <App />
    </StudentProvider>
  </LoginProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
