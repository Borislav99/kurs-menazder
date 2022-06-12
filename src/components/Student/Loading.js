// react stuff
import React from "react";
import loading from "../../assets/loading.gif";
// context stuff
import { useStudentContext } from "../../context/student_context";
// styled components
import styled from "styled-components";
const Loading = () => {
  const { uploadLoading } = useStudentContext();
  if (uploadLoading) {
    return (
      <Wrapper>
        <img src={loading} alt="" />
      </Wrapper>
    );
  } else {
    return null;
  }
};
const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 25%;
    max-width: 10rem;
  }
  &::before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
export default Loading;
