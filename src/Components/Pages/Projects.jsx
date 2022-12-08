import styled from "styled-components";
// import Car from "../Car";
// import Phone from "../Phone";
// import { cars, phones } from "../Data";
import NewsContainer from "./NewsContainer";
import IndividualNewsContainer from "./NewsContainer";

export default function Projects() {
  return (
    <>
      <ProjectsPageContent>
        {/* <IndividualCard>
          {cars.map((car, index) => {
            return (
              <Car
                key={car.id}
                carName={car.carName}
                color={car.color}
                horsePower={car.horsePower}
              />
            );
          })}
        </IndividualCard> */}
        {/* {phones.map((phone, index) => {
          return (
            <Phone
              key={phone.id}
              phoneBrand={phone.phoneBrand}
              phoneModel={phone.phoneModel}
              phoneColor={phone.phoneColor}
            />
          );
        })} */}
        <IndividualNewsContainer />
        <NewsContainer />
      </ProjectsPageContent>
    </>
  );
}

const ProjectsPageContent = styled.div`
  color: green;
  background-color: black;
  width: 100%;
  height: 100%;
`;

// const IndividualCard = styled.div`
//   display: flex;
//   float: inline;
//   justify-content: space-evenly;
// `;
