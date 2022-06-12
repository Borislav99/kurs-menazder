// react stuff
import React from "react";
import { Link } from "react-router-dom";
import { folderIcon } from "../../utils/fontawesome";
import { data } from "../../utils/constants";
// styled components
import styled from "styled-components";
const Main = () => {
  return (
    <Wrapper>
      {data.map((item, index) => {
        const { value, path } = item;
        return (
          <Link key={index} to={path} className="single-course">
            <span className="single-course__icon">
              <i className="font-awesome ">{folderIcon}</i>
            </span>
            {value}
          </Link>
        );
      })}
    </Wrapper>
  );
};
// styled components
const Wrapper = styled.main`
  /* ---------- MAIN ---------- */
  min-height: calc(100vh - 56px);
  padding: var(--padding-small);
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  background-color: var(--clr-primary-10);
  .single-course {
    flex: 0 0 calc(50% - 1rem);
    text-align: center;
    text-transform: capitalize;
    color: var(--clr-grey-1);
    font-size: 1.5rem;
  }
  .single-course__icon {
    transition: var(--transition);
    cursor: pointer;
    display: block;
    font-size: 5rem;
  }
  .single-course__icon:hover {
    color: var(--clr-primary-5);
  }
  .single-course-not-allowed span {
    cursor: not-allowed !important;
  }
  .single-course-not-allowed span:hover {
    color: var(--clr-grey-1) !important;
  }
  @media screen and (min-width: 567px) {
    .single-course {
      flex: 0 0 calc(33.33% - 1rem);
    }
  }
  @media screen and (min-width: 769px) {
    .single-course {
      flex: 0 0 calc(25% - 1rem);
    }
  }
  @media screen and (min-width: 1170px) {
    .single-course {
      flex: 0 0 calc(20% - 1rem);
    }
  }
  /* ---------- END OF MAIN ---------- */
`;
export default Main;
