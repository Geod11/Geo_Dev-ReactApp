import styled from "styled-components";

export default function Footer() {
  return (
    <FooterMainContainer>
      <ul className="Footer-main-list">
        {/* <li className="Footer-child-list">Contact Info</li> */}
        <li className="Footer-child-list">
          <a
            href="https://www.linkedin.com/in/george-alexandru-danilescu-6b6aa456"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="LogoFooterLI"
              src="LinkedIn_Logo.ico"
              alt="LinkdeIn logo"
              width={40}
            ></img>
          </a>
        </li>
        <li className="Footer-child-list">
          <a
            href="https://github.com/Geod11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="LogoFooterGit"
              src="GitHub_Logo.ico"
              alt="GitHub logo"
              width={40}
            ></img>
          </a>
        </li>
        <li className="Footer-child-list">Phone: +40752675068</li>
        <li className="Footer-child-list">
          Email: georgedanilescu88@gmail.com
        </li>
      </ul>
    </FooterMainContainer>
  );
}

const FooterMainContainer = styled.div`
  @font-face {
    font-family: Audiowide;
    src: url("../Fonts/Audiowide-Regular.ttf");
    
  }

  max-height: 100px;

  .Footer-main-list {
    font-family: Audiowide;
    display: flex;
    list-style-type: none;
    color: gray;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding-left: 0%;
  }

  .LogoFooterLI .LogoFooterGit {
    cursor: pointer;
  }

  /* @media all and (min-width: 1000px) {
    .Footer-main-container {
      max-height: 100px;
    } */

    /* .Footer-main-list {
      font-family: Audiowide;
      display: flex;
      list-style-type: none;
      color: gray;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      padding-left: 0%;
    } */
  
    .Footer-child-list {
      padding: 5px;
    }

  li {
    @media (max-width: 768px){
        font-size: 10px;
      }
      
  }


`;

