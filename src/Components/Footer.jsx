function Footer() {
  return (
    <div className="Footer-main-container">
      <ul className="Footer-main-list">
        <li className="Footer-child-list">Contact Info</li>
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
            href="https://github.com/Danilestii"
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
        <li className="Footer-child-list">Phone Number: +34 644 302 652</li>
        <li className="Footer-child-list">
          Email address: georgedanilescu88@gmail.com
        </li>
      </ul>
    </div>
  );
}

export default Footer;
