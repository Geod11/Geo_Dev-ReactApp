import styled from "styled-components";

export default function Home() {
  return (
    <HomePageContent>
 
<Title>Welcome to my spot on the web!</Title>
      
      <br />
      Hello! I'm George, a passionate and dedicated Front-End Developer with a flair for creating dynamic, user-friendly web experiences. My portfolio showcases a blend of technical expertise, creativity, and a commitment to delivering exceptional digital solutions.
      <br />
      <br />
      I specialize in building responsive, visually appealing, and highly functional websites and web applications. My skills include:
      <br />
      <br />
      - HTML5 & CSS3: Crafting semantic, accessible, and mobile-first layouts using Styled Components.
      <br />
      - JavaScript & Frameworks: Utilizing ES6+ and React to bring interactivity and seamless user experiences.
      <br />
      - UI/UX Design: Focusing on intuitive designs and user-centered approaches to enhance usability.
      <br />
      - Performance Optimization: Ensuring fast load times and smooth performance through best practices and modern tools.
      <br />
      - Version Control: Proficient in Git for efficient collaboration and project management.
      <br />
      <br />
      Explore my projects to see how I transform ideas into engaging digital solutions. From single-page applications to complex websites, each project reflects my attention to detail, problem-solving abilities, and passion for web development.
      <br />
      <br />
      I'm always excited to discuss new opportunities and challenges. Whether you have a project in mind or just want to chat about the latest in web development, feel free to reach out!

    </HomePageContent>
  );
}

const HomePageContent = styled.div`
  flex: 1;
  color: white;
  background-color: black;
  font-family: KlaptArabic;
  text-align: left;
  font-size: 3.5vw;
  vertical-align: middle;
  padding: 20px;
  font-weight: 500;
`;

const Title = styled.h4`
  font-size: 4vw;
  text-align: center;
  font-weight: 900;
`
