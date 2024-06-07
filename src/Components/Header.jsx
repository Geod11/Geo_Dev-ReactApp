import { NavLink } from "react-router-dom";
import styled from "styled-components";



export default function Header() {

  return (
    <>
      <HeaderMainContainer>
      <LogoImage
              src="Geo_Dev.ico"
              alt="George's developer logo"             
            ></LogoImage>
        <ul>
          {/* <li>
            <img
              src="Geo_Dev.ico"
              alt="George's developer logo"             
            ></img>
          </li> */}
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
        <HamburgerMenuIcon href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </HamburgerMenuIcon>
      </HeaderMainContainer>
    </>
  );
}

const HeaderMainContainer = styled.div`

  display: flex;
  max-height: 120px;
  font-size: 180%;

  ul {

    @media (max-width: 768px) {
      overflow: hidden;
      position: relative;
    }

    font-family: KlaptArabic;
    display: flex;
    list-style-type: none;
    color: #808080;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding-left: 0%;
    margin-left: 0%;

    li {

      @media (max-width: 768px) {
      display:none;
    }

      cursor: pointer;
      &:link {
        color: #008000;
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
        /* color: green; */
        color: ${p => p.theme.colors.green}; 
        text-decoration: none;
        text-shadow: 1px 1px green;
      }

      .active {
        color: green;
        font-weight: bolder;
        text-decoration: none;
        text-shadow: 1px 1px green;
      }
    }
  }
`;

const LogoImage = styled.img`
          width: 120px;
          height: 120px;      
`
const HamburgerMenuIcon = styled.a`
  color: green;
  padding: 20px 20px 0px 0px;

  .icon {
    height: 120px;
    width: 120px;
    font-size: 100px;
  }

  .fa {
    font-size: 40px;
    @media (min-width:768px){
    display:none;
    }
  }
`