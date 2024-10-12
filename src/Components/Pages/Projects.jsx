import styled from "styled-components";
// import Car from "../Car";
// import Phone from "../Phone";
// import { cars, phones } from "../Data";
// import NewsContainer from "./NewsContainer";
// import IndividualNewsContainer from "./NewsContainer";

export default function Projects() {
  return (
    <>
      <ProjectsPageContent>
        <h1>Projects</h1>
        <div>
          <h2> Project 1 </h2>
        </div>
        <div>
          <h2> Project 2 </h2>
        </div>
        <div>
          <h2> Project 3 </h2>
        </div>
      </ProjectsPageContent>
    </>
  );
}

const ProjectsPageContent = styled.div`
  color: white;
  background-color: black;
  width: 100%;
  height: 100%;

  h1 {
    font-family: KlaptArabic;
    text-align: center;
    font-size: 1.5rem;
  }
`;

// const IndividualCard = styled.div`
//   display: flex;
//   float: inline;
//   justify-content: space-evenly;
// `;
