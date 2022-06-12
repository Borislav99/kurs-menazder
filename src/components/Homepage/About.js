// react stuff
import React from "react";
import styled from "styled-components";
import { Bounce } from "react-awesome-reveal";
// assets
import { plans } from "../../utils/constants";
const About = () => {
  return (
    <Bounce>
      <Wrapper className="landing-about-section section">
        <div className="section-center about-showcase">
          {/* section title */}
          <div className="section-title about-title">
            <h2 className="about-title__heading">
              imali smo{" "}
              <span className="about-title__heading--blue">u planu</span>
            </h2>
          </div>
          {/* end of section title */}
          {/* about plan */}
          <div className="about-plan-container">
            {/* single plan */}
            {plans.map((plan, index) => {
              const { icon, title, text } = plan;
              return (
                <article key={index} className="single-plan">
                  <span className="single-plan__icon">
                    <i>{icon}</i>
                  </span>
                  <p className="single-plan__title">{title}</p>
                  <p className="single-plan__text">{text}</p>
                </article>
              );
            })}
          </div>
          {/* end of about plan */}
        </div>
      </Wrapper>
    </Bounce>
  );
};
// styled components
const Wrapper = styled.section`
  .about-title {
    margin-bottom: var(--margin-medium);
  }
  .single-plan {
    box-shadow: var(--dark-shadow);
    background-color: var(--clr-primary-5);
    max-width: 80vw;
    margin: 0 auto;
    text-align: center;
    padding: var(--padding-small);
    margin-bottom: var(--margin-small);
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .single-plan:hover {
    transform: translateY(var(--moveUp));
    cursor: pointer;
  }
  .single-plan:hover .single-plan__icon {
    color: var(--clr-black-1);
  }
  .single-plan:hover .single-plan__text {
    color: var(--clr-black-1);
  }
  .single-plan span {
    font-size: 2rem;
    padding: calc(var(--padding-small) / 2) var(--padding-small);
    border-radius: 50%;
    background-color: var(--clr-white);
    color: var(--clr-primary-5);
    transition: var(--transition);
  }
  .single-plan p {
    margin-bottom: 0;
    margin-top: var(--margin-small);
    color: var(--clr-white);
  }
  .single-plan__title {
    font-size: 2rem;
    text-transform: capitalize;
  }
  .single-plan__text {
    max-width: 15rem;
    margin: 0 auto;
    transition: var(--transition);
  }
  @media screen and (min-width: 882px) {
    .about-plan-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .single-plan {
      flex: 0 0 calc(33.33% - 1rem);
      margin-bottom: 0rem;
    }
  }
`;
export default About;
