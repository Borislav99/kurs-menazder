// react stuff
import React from "react";
import styled from "styled-components";
// assets
import { getDate } from "../../functions/index";
const Footer = () => {
  return (
    <Wrapper className="footer section">
      <div className="footer-content">
        <h5 className="footer-content__title">
          &copy; {getDate()}{" "}
          <span className="footer-content__title--blue">kurs menadzer</span>
        </h5>{" "}
        <h5 className="footer-content__title">sva prava zadrzana</h5>
      </div>
    </Wrapper>
  );
};
// styled components
const Wrapper = styled.footer`
  background-color: var(--clr-black-1);
  display: flex;
  justify-content: center;
  align-items: center;
  .footer-content__title {
    display: inline;
    text-transform: capitalize;
    color: var(--clr-white);
    font-size: 0.75rem;
  }
  @media screen and (min-width: 567px) {
    .footer-content__title {
      font-size: 1.5rem;
    }
  }
  .footer-content__title--blue {
    color: var(--clr-primary-5);
  }
`;
export default Footer;
