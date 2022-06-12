// react stuff
import React from "react";
import styled from "styled-components";
// assets
import { logo } from "../../assets/index";
import { closeIcon } from "../../utils/fontawesome";
import { links } from "../../utils/constants";
// context stuff
import { useHomepageContext } from "../../context/homepage_context";
// router stuff
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { activeLink, changeActiveLink, isSidebarOpen, sidebarToggle } =
    useHomepageContext();
  return (
    <Wrapper
      className={
        isSidebarOpen
          ? "homepage-sidebar-container show-sidebar"
          : "homepage-sidebar-container"
      }
    >
      <div className="section-center home-header">
        {/* header logo container */}
        <div className="home-header__logo-container">
          <img className="home-header__logo" src={logo} alt="logo" />
        </div>
        {/* end of header logo container */}
        {/* hamburger container */}
        <div className="hamburger-container">
          <span
            className="hamburger-container__close-icon"
            onClick={() => {
              sidebarToggle(false);
            }}
          >
            <i>{closeIcon}</i>
          </span>
        </div>
        {/* end of hamburger container */}
        {/* links container */}
        <ul className="homepage-sidebar section-center">
          {links.map((link, index) => {
            const { text, url } = link;
            return (
              <li className="homepage-sidebar__item" key={index}>
                <a
                  href={url}
                  onClick={() => {
                    sidebarToggle(false);
                    changeActiveLink(text);
                  }}
                  className={
                    text === activeLink
                      ? "active-link homepage-sidebar__link"
                      : "homepage-sidebar__link"
                  }
                >
                  {text}
                </a>
              </li>
            );
          })}
          <li className="homepage-sidebar__item">
            <Link className="homepage-sidebar__link" to="/login">
              prijava
            </Link>
          </li>
        </ul>
        {/* end of links container */}
      </div>
    </Wrapper>
  );
};
// styled components
const Wrapper = styled.aside`
  background-color: var(--clr-primary-5);
  position: fixed;
  inset: 0;
  z-index: 999;
  transform: translateX(-100%);
  overflow-x: hidden;
  transition: all 0.5s linear;
  .show-sidebar {
    transform: translateX(0rem) !important;
  }
  .active-link {
    color: var(--clr-black-1) !important;
    font-weight: 999;
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
  .homepage-sidebar__item {
    list-style-type: none;
    width: 100%;
    padding: var(--padding-small) 0rem;
    transition: var(--transition);
  }
  .homepage-sidebar__item:hover {
    box-shadow: 0px 0.1rem 0px 0px var(--clr-white);
  }
  .sidebar-link-active {
    border-bottom: 1px solid var(--clr-white);
  }
  .homepage-sidebar__link {
    text-transform: capitalize;
    color: var(--clr-white);
  }
  .close-icon:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 992px) {
    display: none !important;
    padding: var(--padding-small) 0rem;
  }
`;
export default Sidebar;
