// react stuff
import React from "react";
import { rightIcon, userIcon, logoutIcon } from "../../utils/fontawesome";
import { Link } from "react-router-dom";
// context stuff
import { useLoginContext } from "../../context/login_context";
// styled components
import styled from "styled-components";
const Header = ({ value, path, third }) => {
  const { user, logoutUser } = useLoginContext();
  const { username, gender, instructorName, courseName } = user;
  return (
    <Wrapper>
      <nav>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/student/" className="navigation__link">
              {instructorName}
            </Link>
            <i className="fontawesome">{rightIcon}</i>
          </li>
          {third && (
            <li className="navigation__item">
              <Link to={"/student/homepage"} className="navigation__link">
                {courseName}
              </Link>
              <i className="fontawesome">{rightIcon}</i>
            </li>
          )}
          {value ? (
            <>
              <li className="navigation__item">
                <Link to={path} className="navigation__link">
                  {value}
                </Link>
                <i className="fontawesome">{rightIcon}</i>
              </li>
            </>
          ) : null}
        </ul>
      </nav>
      <article className="user-details">
        <span className="user-details__details">
          {gender === "m" ? `dobrodosao ${username}` : `dobrodosla ${username}`}
          <i className="fontawesome">{userIcon}</i>
        </span>
        <span className="user-details__logout-btn" onClick={logoutUser}>
          odjava
          <i className="fontawesome">{logoutIcon}</i>
        </span>
      </article>
    </Wrapper>
  );
};
// styled components
const Wrapper = styled.header`
  /* ---------- HEADER ---------- */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: var(--padding-small);
  background-color: var(--clr-primary-5);
  & > * {
    flex: 0 0 50%;
    align-self: center;
  }
  .navigation {
    list-style-type: none;
  }
  .navigation__item {
    display: inline-block;
  }
  .navigation__item:not(:last-child) {
    margin-right: calc(var(--margin-small) / 2);
  }
  .navigation__link {
    color: var(--clr-white);
    font-weight: 999;
    transition: var(--transition);
    text-transform: capitalize;
  }
  .navigation__link:hover {
    color: var(--clr-black-1);
    cursor: pointer;
  }

  .user-details {
    display: flex;
    justify-content: flex-end;
  }
  .user-details span {
    text-transform: capitalize;
    color: var(--clr-white);
    transition: var(--transition);
  }
  .user-details__details {
    display: none;
    margin-right: calc(var(--margin-small) / 2);
  }
  .user-details__logout-btn:hover {
    color: var(--clr-black-1);
    cursor: pointer;
  }
  @media screen and (min-width: 567px) {
    .user-details__details {
      display: inline-block;
    }
  }
  /* ---------- END OF HEADER ---------- */
`;
export default Header;
