// react stuff
import React from "react";
import styled from "styled-components";
// assets
import { logo } from "../../assets/index";
import { barsIcon } from "../../utils/fontawesome";
import { links } from "../../utils/constants";
// context stuff
import { useHomepageContext } from "../../context/homepage_context";
// router stuff
import { Link } from "react-router-dom";
const Header = () => {
  const { sidebarToggle, activeLink, changeActiveLink, scrolledPercentage } =
    useHomepageContext();
  return (
    <Wrapper className="homepage-header shadow-active" id="header-section">
      <div className="section-center home-header">
        {/* header logo container */}
        <div className="home-header__logo-container">
          <a className="home-header__link" href="#">
            <img className="home-header__logo-img" src={logo} alt="logo" />
          </a>
        </div>
        {/* end of header logo container */}
        {/* links container */}
        <div className="home-links-container">
          <ul className="home-links">
            {links.map((link, index) => {
              const { text, url } = link;
              return (
                <li className="home-links__item" key={index}>
                  <a
                    href={url}
                    className={
                      text === activeLink
                        ? "home-links__link active-link"
                        : "home-links__link"
                    }
                    onClick={() => {
                      changeActiveLink(text);
                    }}
                  >
                    {text}
                  </a>
                </li>
              );
            })}
            <li className="home-links__item">
              <Link className="home-links__link" to="/login">
                prijava
              </Link>
            </li>
          </ul>
        </div>
        {/* end of links container */}
        {/* hamburger container */}
        <div className="hamburger-container">
          <span
            className="hamburger-container__hamburger-icon"
            onClick={() => {
              sidebarToggle(true);
            }}
          >
            <i>{barsIcon}</i>
          </span>
        </div>
        {/* end of hamburger container */}
      </div>
      <div
        className="divider"
        style={{
          width: `${scrolledPercentage}%`,
        }}
      ></div>
    </Wrapper>
  );
};
// styled components
const Wrapper = styled.header`
  background-color: var(--clr-primary-5);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 3;
  .shadow-active {
    box-shadow: var(--main-shadow);
  }
  .active-link {
    color: var(--clr-white) !important;
  }
  .home-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: var(--padding-small) 0rem;
  }
  .home-header__logo-container:hover {
    cursor: pointer;
  }
  .home-links-container {
    display: none;
  }
  .home-links__item {
    list-style-type: none;
    display: inline-block;
  }
  .home-links__link {
    text-transform: capitalize;
    color: var(--clr-white);
    margin-right: var(--margin-small);
    font-size: 1.25rem;
    color: var(--clr-black-1);
    transition: var(--transition);
  }
  .home-links__link:hover {
    color: var(--clr-white);
  }
  .hamburger-container__hamburger-icon {
    font-size: 1.5rem;
    color: var(--clr-white);
    cursor: pointer;
  }
  .divider {
    height: 0.35rem;
    width: 100%;
    background: var(--clr-black-1);
  }
  @media screen and (min-width: 992px) {
    .home-links-container {
      display: block;
    }
    .hamburger-container {
      display: none;
    }
  }
`;
export default Header;
