import { NavLink } from "react-router-dom";
import styled from "styled-components";


export default function Header() {

  return (
    <>
      <HeaderMainContainer>
        <ul>
          <li>
            <img
              src="Geo_Dev.ico"
              alt="George's developer logo"             
            ></img>
          </li>
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink  to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink              
              to="/projects"
              index={true}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink  to="/skills">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink  to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </HeaderMainContainer>
    </>
  );
}

const HeaderMainContainer = styled.div`
  display: flex;
  max-height: 90px;
  font-size: 180%;

  ul {
    font-family: KlaptArabic;
    display: flex;
    list-style-type: none;
    color: gray;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding-left: 0%;
    margin-left: 0%;

    li {
      cursor: pointer;
      &:link {
        color: green;
        text-decoration: none;
      }
      &:active,
      &:hover,
      &:visited {
        color: green;
        font-weight: bolder;
        text-decoration: none;
      }
      &:focus {
        color: green;
        font-weight: bolder;
        text-decoration: none;
        text-shadow: 1px 1px green;
      }

      a {
        color: green;
        text-decoration: none;
        text-shadow: 1px 1px green;
      }

      .active {
        color: green;
        font-weight: bolder;
        text-decoration: none;
        text-shadow: 1px 1px green;
      }

      img {
        width: 120px;
      }

    }
  }
`;

const HeaderLink = styled.a``;
