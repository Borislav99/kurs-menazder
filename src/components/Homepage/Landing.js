// react stuff
import React from "react";
import styled from "styled-components";
// assets
import { phone } from "../../assets/index";
// router stuff
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper className="landing-section" id="landing-section">
      <div className="section-center landing-showcase">
        <div className="landing-showcase__text">
          <p className="landing-showcase__text-paragrapf">kurs menadzer nudi</p>
          <h2 className="landing-showcase__text-heading2">uspjeh</h2>
          <p className="landing-showcase__about">
            Specijalizovani softver za sve predavace na kursevima. Preko
            platforme postavljajte prezentacije, vjezbe, zadacu. Chat uzivo sa
            polaznicima, kao i mogucnost slanja zadace na server.
          </p>
          <Link to="/login" className="btn--landing btn">
            prijava
          </Link>
        </div>
        <div className="landing-showcase__image">
          <img
            className="landing-showcase__image-phone-img"
            src={phone}
            alt="phone"
          />
        </div>
      </div>
    </Wrapper>
  );
};
// styled components
const Wrapper = styled.section`
  height: calc(100vh - 4rem);
  overflow: hidden;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    /* background-color: var(--clr-primary-5); */
    background: linear-gradient(
      90deg,
      #2caeba 0%,
      #5cbfc8 46.88%,
      #206271 100%
    );
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
  }
  .landing-showcase {
    height: inherit;
  }
  .landing-showcase__text {
    margin-top: var(--margin-big);
    opacity: 0;
    transform: translateX(-10rem);
    animation: moveFromLeftAndRight 1s 0.25s 1;
    animation-fill-mode: forwards;
  }
  .landing-showcase__text-paragrapf {
    text-transform: capitalize;
    color: var(--clr-white);
    margin-bottom: calc(var(--margin-small) / 2);
  }
  .landing-showcase__text-heading2 {
    color: var(--clr-white);
    font-size: 3rem;
    margin-bottom: calc(var(--margin-small) / 2);
  }
  .landing-showcase__about {
    color: var(--clr-white);
    max-width: 25rem;
    margin-bottom: calc(var(--margin-small) / 2);
  }
  .btn--landing {
    border-radius: calc(var(--radius) * 2);
    background-color: var(--clr-white);
    color: var(--clr-primary-5);
  }
  .btn--landing:hover {
    background-color: var(--clr-primary-8);
    color: var(--clr-white);
  }
  .landing-showcase__image {
    margin-top: var(--margin-small);
    opacity: 0;
    transform: translateX(10rem);
    animation: moveFromLeftAndRight 1s 0.25s 1;
    animation-fill-mode: forwards;
  }
  .landing-showcase__image-phone-img {
    transition: var(--transition);
  }
  .landing-showcase_image:hover .landing-showcase__image-phone-img {
    transform: translateY(var(--moveUp));
  }
  .landing-showcase__image-phone-img {
    max-width: 30rem;
    margin: 0 auto;
    overflow: visible !important;
  }
  @media screen and (min-width: 567px) {
    .landing-showcase {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .landing-showcase > div {
      flex: 0 0 50%;
      align-self: center;
    }
    .landing-showcase__image {
      margin-top: 0;
    }
    .landing-showcase__image-phone-img {
      max-width: 35rem;
      margin: 0 auto;
      overflow: visible !important;
    }
    .landing-showcase__text {
      margin-top: 0;
    }
  }
  @keyframes moveFromLeftAndRight {
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
export default Landing;
