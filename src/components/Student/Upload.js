// react stuff
import React from "react";
import { closeIcon } from "../../utils/fontawesome";
import { useRef, useState } from "react";
// styled components
import styled from "styled-components";
// context stuff
import { useStudentContext } from "../../context/student_context";
import { ThemeProvider } from "styled-components";
const Upload = () => {
  const { upload, closeUpload, sendHomework } = useStudentContext();
  const inputContainer = useRef(null);
  const uploadBtn = useRef(null);
  const [feedback, setFeedback] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    const value = inputContainer.current.value;
    if (value === "") {
      setFeedback(true);
      uploadBtn.current.disabled = true;
      setTimeout(() => {
        setFeedback(false);
        uploadBtn.current.disabled = false;
      }, 1500);
    } else {
      sendHomework(inputContainer.current);
      inputContainer.current.value = "";
      closeUpload();
    }
  };
  if (upload) {
    return (
      <ThemeProvider theme={theme}>
        <UploadSection />
      </ThemeProvider>
    );
  } else {
    return <UploadSection />;
  }
};
const UploadSection = () => {
  const { upload, closeUpload, sendHomework } = useStudentContext();
  const inputContainer = useRef(null);
  const uploadBtn = useRef(null);
  const [feedback, setFeedback] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    const value = inputContainer.current.value;
    if (value === "") {
      setFeedback(true);
      uploadBtn.current.disabled = true;
      setTimeout(() => {
        setFeedback(false);
        uploadBtn.current.disabled = false;
      }, 1500);
    } else {
      sendHomework(inputContainer.current);
      inputContainer.current.value = "";
      closeUpload();
    }
  };
  return (
    <Wrapper className={upload ? "file-upload-show" : null}>
      <article className="file-upload-container">
        <div className="file-upload-container__header">
          <div>
            <span>kurs</span>
            menadzer
          </div>
          <span className="btn--close-howework" onClick={closeUpload}>
            <i>{closeIcon}</i>
          </span>
        </div>
        <div
          className={
            feedback ? "feedback-container show" : "feedback-container hide"
          }
        >
          <p>Molim unesite validne podatke u formu. </p>
        </div>
        <form action="" onSubmit={submitForm}>
          <div className="file-name-container">
            <input
              ref={inputContainer}
              type="file"
              name="file-upload"
              id="file"
              className="file-upload-container__file"
            />
          </div>
          <input
            type="submit"
            className="btn btn--upload"
            value="posalji"
            ref={uploadBtn}
          />
        </form>
      </article>
    </Wrapper>
  );
};
// styled components
const theme = {
  show: "flex !important",
};
const Wrapper = styled.section`
  /* ---------- FILE UPLOAD ---------- */
  position: fixed;
  height: 100%;
  width: 100vw;
  justify-content: center;
  align-items: center;
  display: none;
  background-color: rgba(0, 0, 0, 0.2);
  display: ${(props) => props.theme.show};
  .file-upload-container {
    opacity: 0;
    background: var(--clr-black-1);
    border-radius: var(--radius);
    transform: translateY(10rem);
    transition: var(--transition);
    animation: fileInput 1s 0.5s 1;
    animation-fill-mode: forwards;
  }
  .file-upload-container__header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: calc(var(--padding-small) / 2);
  }
  .file-upload-container__header span {
    font-size: 1.25rem;
    transition: var(--transition);
    color: var(--clr-white);
  }
  .btn--close-howework:hover {
    color: var(--clr-red);
    cursor: pointer;
  }
  .file-upload-container__header div {
    margin-right: var(--margin-medium);
    text-transform: uppercase;
    font-size: 1.25rem;
    color: var(--clr-white);
    transition: var(--transition);
  }
  .file-upload-container__header div span {
    color: var(--clr-primary-5);
  }
  .file-name-container {
    padding: calc(var(--padding-small) / 2);
    margin-bottom: var(--margin-small);
  }
  .file-name-container input[type="file"] {
    color: var(--clr-white);
  }
  .btn--upload {
    width: 100%;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .feedback-container {
    text-align: center;
    animation-fill-mode: forwards;
    animation: error 1s 1;
  }
  .feedback-container p {
    font-size: 1rem;
    color: var(--clr-red);
  }
  .show {
    display: block;
  }
  .hide {
    display: none;
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
  @media screen and (min-width: 567px) {
    .file-upload-container__header span {
      font-size: 1.5rem;
    }
    .file-upload-container__header div {
      margin-right: calc(var(--margin-big) * 2);
      text-transform: uppercase;
      font-size: 1.5rem;
      color: var(--clr-white);
    }
    .file-name-container p {
      font-size: 1.25rem;
    }
    .btn--upload {
      font-size: 1.25rem;
    }
  }
  @media screen and (min-width: 1170px) {
    .file-upload-container__header span {
      font-size: 2rem;
    }
    .file-upload-container__header div {
      margin-right: calc(var(--margin-big) * 2);
      text-transform: uppercase;
      font-size: 2rem;
      color: var(--clr-white);
    }
    .file-name-container p {
      font-size: 1.5rem;
    }
    .btn--upload {
      font-size: 1.5rem;
    }
  }
  @keyframes fileInput {
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  /* ---------- END OF FILE UPLOAD ---------- */
`;
export default Upload;
