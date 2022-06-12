// react stuff
import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Slide } from "react-awesome-reveal";
// assets
import examplesArray from "../../assets/featured";
// slider settings
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
};
const Examples = () => {
  return (
    <Slide>
      <Wrapper className="examples-section section" id="examples-section">
        <div className="section-center examples">
          {/* section title */}
          <div className="section-title examples-title">
            <h2 className="examples-title__title">
              Galerija <span>primjera</span>
            </h2>
            <p className="examples-title__paragraph">
              Na galeriji slika pregledajte skrinsotove aplikacije u fazi rada.{" "}
            </p>
          </div>
          {/* end of section title */}
          {/* gallery container */}
          <div className="gallery-container">
            <Slider {...sliderSettings} className="slider-component">
              {examplesArray.map((example, index) => {
                return (
                  <div className="single-slide" key={index}>
                    <img
                      className="single-slide__image"
                      src={example}
                      alt="single-slide__image"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
          {/* end of gallery container */}
        </div>
      </Wrapper>
    </Slide>
  );
};
// styled components
const Wrapper = styled.section`
  background: linear-gradient(90deg, #2caeba 0%, #5cbfc8 46.88%, #206271 100%);
  .examples-title__title span {
    color: var(--clr-white);
  }
  .examples-title__paragraph {
    font-weight: 999;
    font-size: 1.25rem;
    color: var(--clr-white);
  }
  .slider-component {
    margin: 0 auto;
    width: 90%;
  }
`;
export default Examples;
