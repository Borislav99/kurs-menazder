import React from "react";
import { userIcon, lockIcon } from "../../utils/fontawesome";
import { useState, useEffect } from "react";
import { useLoginContext } from "../../context/login_context";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
const Login = () => {
  const { loginUser, loginLoading, loginError, isAuth } = useLoginContext();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // check if auth
  useEffect(() => {
    if (isAuth) {
      navigate("/student");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);
  // jsx
  return (
    <Wrapper>
      <div className="login">
        <form
          className="login-form"
          method="POST"
          encType="multipart/form-data"
        >
          {loginError ? (
            <div className="login__feedback-container">
              <p className="login__feedback-container--text">
                Unesite validne podatke u formu.{" "}
              </p>
            </div>
          ) : null}
          <div className="login-form__input">
            <label className="login-form__input--icon" htmlFor="username">
              <i>{userIcon}</i>
            </label>
            <input
              type="text"
              id="username"
              placeholder="korisnicko ime"
              required="required"
              className="login-form__input--field"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="login-form__input">
            <label className="login-form__input--icon" htmlFor="password">
              <i>{lockIcon}</i>
            </label>
            <input
              type="password"
              id="password"
              placeholder="lozinka"
              required="required"
              value={password}
              className="login-form__input--field"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className={
              loginError ? "btn login-btn disabled-btn" : "btn login-btn"
            }
            onClick={(e) => {
              e.preventDefault();
              loginUser(name, password);
              setName("");
              setPassword("");
            }}
          >
            {loginLoading ? "ucitavanje..." : "prijava"}
          </button>
        </form>
        <p>
          Niste clan? <Link to="/">Kontaktirajte nas!</Link>
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  /* ---------- LOGIN PAGE ---------- */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-black-1);
  .login {
    transition: var(--transition);
    opacity: 0;
    transform: translateY(5rem);
    animation: moveIn 2s 1;
    animation-fill-mode: forwards;
    padding: 0rem calc(var(--padding-small) / 2);
  }
  .login-form {
    margin-bottom: var(--margin-small);
  }
  .login-form__input {
    display: flex;
  }
  .login-form__input:not(:last-child) {
    margin-bottom: calc(var(--margin-small) / 2);
  }
  .login-form__input input {
    background-color: var(--clr-primary-3);
    border: none;
    outline: none;
    border-top-right-radius: calc(var(--radius) / 2);
    border-bottom-right-radius: calc(var(--radius) / 2);
    font-size: 1rem;
    width: 100%;
    color: var(--clr-white);
    padding: calc(var(--padding-small) / 4) calc(var(--padding-small) / 2);
    transition: var(--transition);
  }
  .login-form__input input:hover {
    background-color: var(--clr-primary-4);
  }
  .login-form__input input::placeholder {
    color: var(--clr-black-1);
    text-transform: capitalize;
  }
  .login-form__input--icon {
    background-color: var(--clr-primary-1);
    color: white;
    padding: calc(var(--padding-small) / 2) var(--padding-small);
    font-size: 0.5rem;
    border-top-left-radius: calc(var(--radius) / 2);
    border-bottom-left-radius: calc(var(--radius) / 2);
  }
  .login-btn {
    border-radius: calc(var(--radius) / 2);
    width: 100%;
  }
  .login p {
    text-align: center;
    font-size: 0.75rem;
    font-weight: lighter;
  }
  .login p a {
    color: var(--clr-white);
  }
  @media screen and (min-width: 567px) {
    .login-form__input input {
      font-size: 1.5rem;
    }
    .login-form__input--icon {
      font-size: 0.75rem;
    }
    .login p {
      font-size: 1.25rem;
    }
    .login-btn {
      font-size: 1.5rem;
    }
  }
  @keyframes moveIn {
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  /* ---------- END OF LOGIN PAGE ---------- */
  /* ---------- FEEDBACK ---------- */
  .login__feedback-container {
    animation-fill-mode: forwards;
    animation: error 1s 1;
  }
  .login__feedback-container--text {
    font-size: 1rem;
    color: var(--clr-red);
  }
  @keyframes error {
    0% {
      opacity: 1;
      transform: translateX(-1rem);
    }
    20% {
      transform: translateX(1rem);
    }
    60% {
      transform: translateX(-1rem);
    }
    80% {
      transform: translateX(1rem);
    }
    100% {
      transform: translateX(0);
    }
  }
  .disabled-btn {
    pointer-events: none;
  }
  .disabled-btn:hover {
    cursor: not-allowed;
  }
  /* ---------- END OF FEEDBACK ---------- */
`;
export default Login;
