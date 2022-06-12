// react stuff
import React from "react";
import styled from "styled-components";
import { Zoom } from "react-awesome-reveal";
import { useState, useEffect } from "react";
// context stuff
import { useHomepageContext } from "../../context/homepage_context";
// assets
const Contact = () => {
  const { handleSubmit, feedback, clearFeedback, emailLoading } =
    useHomepageContext();
  const { text, value } = feedback;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  // use effects
  useEffect(() => {
    setName("");
    setEmail("");
    setTitle("");
    setMessage("");
    setTimeout(() => {
      clearFeedback();
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, value]);
  return (
    <Zoom>
      <Wrapper className="contact-section section" id="contact-section">
        <div className="section-center contact">
          {/* section title */}
          <div className="section-title contact-title">
            <h2 className="contact-title__title">
              kontaktiraj <span>nas</span>
            </h2>
            <p className="contact-title__paragraph">
              Kako biste dobili pristup platformi kao instruktor, napisite vas
              upit i mi cemo vas kontaktirati!
            </p>
            {/* feedback */}
            <p className={value}>{text}</p>
            {/* end of feedback */}
          </div>
          {/* end of section title */}
          {/* form */}
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit({
                name,
                email,
                title,
                msg: message,
              });
            }}
          >
            {/* <!-- name, email, subject container --> */}
            <div className="name-email-subject-container">
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  className="form-control__name"
                  placeholder="Vase ime"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  className="form-control__email"
                  placeholder="Vas email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="title"
                  className="form-control__text"
                  placeholder="Naslov upita"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
            </div>
            {/* <!-- end of name, email, subject container --> */}
            <div className="form-control message-control">
              <input
                type="text"
                name="message"
                className="form-control__question"
                placeholder="Vas upit"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </div>
            <input
              type="submit"
              value={emailLoading ? "ucitavanje..." : "posalji upit"}
              className="btn btn--input"
            />
          </form>
          {/* <!-- end of form --> */}
        </div>
      </Wrapper>
    </Zoom>
  );
};
// styled components
const Wrapper = styled.section`
  .contact-title__paragraph {
    font-weight: 999;
    font-size: 1.25rem;
    color: var(--clr-grey-5);
  }
  .contact-form {
    text-align: center;
  }
  .form-control {
    border-bottom: 3px solid var(--clr-primary-5);
    margin-bottom: var(--margin-small);
  }
  .form-control input {
    width: 100% !important;
    border: none;
    outline: none;
    margin-bottom: calc(var(--margin-small) / 2);
    background-color: transparent;
  }
  .form-control ::placeholder {
    text-align: center;
    font-size: 1rem;
  }
  .message-control {
    height: 5rem;
  }
  .btn--input {
    border-radius: calc(var(--radius) * 2);
    padding: var(--padding-small) var(--padding-medium);
  }
  .negative-feedback {
    color: red !important;
    animation: shake-horizontal 1s linear;
  }
  .positive-feedback {
    color: green !important;
    animation: shake-horizontal 1s linear;
  }
  @keyframes shake-horizontal {
    0%,
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70% {
      -webkit-transform: translateX(-10px);
      transform: translateX(-10px);
    }
    20%,
    40%,
    60% {
      -webkit-transform: translateX(10px);
      transform: translateX(10px);
    }
    80% {
      -webkit-transform: translateX(8px);
      transform: translateX(8px);
    }
    90% {
      -webkit-transform: translateX(-8px);
      transform: translateX(-8px);
    }
  }
  @media screen and (min-width: 882px) {
    .name-email-subject-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .name-email-subject-container > div {
      flex: 0 0 calc(33.33% - 1rem);
    }
  }
`;
export default Contact;
