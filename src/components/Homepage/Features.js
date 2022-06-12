// react stuff
import React from "react";
import styled from "styled-components";
import { Zoom } from "react-awesome-reveal";
// assets
import { laptop, circle } from "../../assets/index";
import { featuredLeft, featuredRight } from "../../utils/constants";
const Features = () => {
  return (
    <Zoom>
      <Wrapper className="functions-section section" id="functions-section">
        <div className="section-center functions">
          {/* section title */}
          <div className="section-title functions-title">
            <h2 className="functions-title__title">
              glavne{" "}
              <span className="functions-title__title--blue">funkcije</span>
            </h2>
            <p className="functions-title__paragraph">
              Na primjeru ispod pod tackama imamo navedene glavne funkcije koje
              se koriste kod platforme. Pogledajte ih.
            </p>
          </div>
          {/* end of section title */}
          {/* functions container */}
          <div className="functions-container">
            {/* left side */}
            <article className="functions-container--left-side">
              {/* single function */}
              {featuredLeft.map((left, index) => {
                const { title, icon, text } = left;
                return (
                  <div className="single-function" key={index}>
                    <h5 className="single-function__title">
                      {title}{" "}
                      <span className="single-function__icon">
                        <i>{icon}</i>
                      </span>
                    </h5>
                    <p className="single-function__text">{text} </p>
                  </div>
                );
              })}
            </article>
            {/* end of left side */}
            {/* middle */}
            <article className="functions-container--mid">
              <img
                src={circle}
                alt="circle"
                className="circle rotating-animation"
              />
              <img className="laptop-img" src={laptop} alt="" />
            </article>
            {/* end of middle */}
            {/* right side */}
            <article className="functions-container--right-side">
              {featuredRight.map((right, index) => {
                const { icon, text, title } = right;
                return (
                  <div
                    key={index}
                    className={
                      index === 1
                        ? "single-function single-function--right"
                        : "single-function"
                    }
                  >
                    <h5 className="single-function__title">
                      <span className="single-function__icon">
                        <i>{icon}</i>
                      </span>{" "}
                      {title}
                    </h5>
                    {text}
                  </div>
                );
              })}
              {/* end of single function */}
            </article>
            {/* end of right side */}
          </div>
          {/* end of functions container */}
        </div>
      </Wrapper>
    </Zoom>
  );
};
// styled components
const Wrapper = styled.section`
  overflow: hidden;
  .functions-title {
    margin-top: 4rem;
  }
  .functions-title__paragraph {
    font-weight: 999;
    font-size: 1.25rem;
  }
  .single-function {
    margin-bottom: var(--margin-small);
    transition: var(--transition);
  }
  .single-function:hover {
    transform: translateY(var(--moveUp));
  }
  .single-function__title {
    font-size: 2rem;
    text-transform: capitalize;
    margin-bottom: calc(var(--margin-small) / 2);
  }
  .single-function__icon {
    color: var(--clr-primary-5);
  }
  .single-function__text {
    margin-bottom: 0;
  }
  .functions-container--mid {
    position: relative;
    margin-top: calc(var(--margin-big) * 2);
    margin-bottom: calc(var(--margin-big) * 2);
  }
  .laptop-img {
    transition: var(--transition);
  }
  .laptop-img:hover {
    transform: scale(1.02);
  }
  .circle {
    position: absolute;
    z-index: -1;
    margin-top: -15%;
  }
  @media screen and (min-width: 992px) {
    .functions-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .functions-container--left-side {
      flex: 0 0 25%;
      align-self: center;
    }
    .functions-container--left-side .single-function:first-child,
    .functions-container--left-side .single-function:last-child {
      margin-left: var(--margin-medium);
    }
    .functions-container--mid {
      flex: 0 0 50%;
      margin-top: var(--margin-small);
      margin-bottom: var(--margin-big);
    }
    .functions-container--right-side {
      flex: 0 0 25%;
      align-self: center;
    }
    .single-function--right {
      margin-left: var(--margin-medium);
    }
  }
  @keyframes rotate {
    from {
      transform: rotate(-360deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .rotating-animation {
    animation: rotate 15s infinite linear;
    animation-fill-mode: forwards;
  }
`;
export default Features;
