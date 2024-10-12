import styled from "styled-components";

export default function Skills() {
  return <SkillsPageContent>
    <h1>Skills</h1>
    </SkillsPageContent>;
}

const SkillsPageContent = styled.div`
  color: white;
  background-color: black;
  width: 100%;
  height: 100%;
  
  h1{
    font-family: KlaptArabic;
    text-align: center;
    font-size: 1.5rem;
  }
`;
