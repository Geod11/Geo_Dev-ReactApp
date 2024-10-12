import { NavLink } from "react-router-dom";
import styled from "styled-components";



export default function Header() {

  function myFunction() {
  
    var x = document.getElementById("myLinks");
    if (!x) return
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
   
  }

  return (
    <>
      <HeaderMainContainer>
      <NavLink to="/">
      <LogoImage
              src="SimpleLeaf.ico"
              alt="George's developer logo"             
            ></LogoImage>
            </NavLink>
        <ul id="myLinks">
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
        <HamburgerMenuIcon href="javascript:void(0);" className="icon" onClick={() => myFunction()}>
    <i class="fa fa-bars"></i>
  </HamburgerMenuIcon>
      </HeaderMainContainer>
    </>
    
  );



}



const HeaderMainContainer = styled.div`

  display: flex;
  /* max-height: 120px; */
  font-size: 180%;
  position:relative;

  @media (max-width: 768px) {
    display: inline-grid;
    }

  ul {

    @media (max-width: 768px) {
      overflow: hidden;
      position: relative;
      /* margin-top: 110px; */
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
      /* display:none; */
      
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

    .icon {
      background: black;
      display: block;
      position: absolute;
      right: 0;
      top: 0;
    }

  }
`;

const LogoImage = styled.img`
          max-width: 120px;
          max-height: 120px;  
          padding-top: 10px;    
`
const HamburgerMenuIcon = styled.a`
  color: green;
  padding: 20px 30px 0px 30px;
  position: absolute;
  right: 0;

  .icon {
    height: 120px;
    width: 120px;
    font-size: 100px;
  }

  .fa {
    font-size: 40px;
    @media (min-width: 769px){
    display:none;
    }
  }


`