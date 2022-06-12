// react stuff
import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
// assets
import { phone } from "../../assets/index";
import { business } from "../../utils/constants";
const Business = () => {
  return (
    <Slide>
      <Wrapper className="information-section section" id="information-section">
        <div className="section-center information">
          {/* img container */}
          <div className="information-img-container">
            <img
              className="information-img-container__image"
              src={phone}
              alt="phone"
            />
          </div>
          {/* end of img container */}
          {/* text container */}
          <div className="information-text-container">
            <h3 className="information-text-container__title">
              poslovanje sa nama <br /> je lagano
            </h3>
            <p className="information-text-container__text">
              Nas tim iz kurs menadzera je proces pristupanja admin panelu kao i
              student panelu omogucio na veoma lak nacin.{" "}
            </p>
            <div className="business-container">
              {/* end of text container */}
              {/* single business */}
              {business.map((biz, index) => {
                const { icon, text } = biz;
                return (
                  <article key={index} className="single-business">
                    <span className="single-business__icon">
                      <i>{icon}</i>
                    </span>
                    <p className="single-business__text">{text} </p>
                  </article>
                );
              })}
            </div>
          </div>
          {/* end of text cotainer */}
        </div>
      </Wrapper>
    </Slide>
  );
};
// styled components
const Wrapper = styled.section`
  position: relative;
  .information-img-container {
    transition: var(--transition);
    margin-bottom: var(--margin-small);
  }
  ::before {
    z-index: -1;
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      90deg,
      #206271 0%,
      #5cbfc8 46.88%,
      #2caeba 100%
    );
    clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
  }
  .information-img-container:hover {
    transform: translateY(var(--moveUp));
    cursor: pointer;
  }
  .information-text-container__title {
    text-transform: uppercase;
  }
  .information-text-container__text {
    color: var(--clr-white);
    margin-bottom: 0;
  }
  .single-business {
    transition: var(--transition);
  }
  .single-business:hover {
    transform: translateY(var(--moveUp));
    cursor: pointer;
  }
  .single-business:not(:last-child) {
    margin-bottom: var(--margin-small);
  }
  .single-business span {
    font-size: 2rem;
  }
  .single-business p {
    max-width: 15rem;
    color: var(--clr-white);
  }
  @media screen and (min-width: 567px) {
    .information {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .information > div {
      flex: 0 0 calc(50% - 1rem);
      align-self: center;
    }
    .business-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: var(--margin-small);
    }
    .business-container > article {
      flex: 0 0 calc(50% - 1rem);
    }
    .information-img-container {
      margin-bottom: 0;
    }
  }
`;
export default Business;
