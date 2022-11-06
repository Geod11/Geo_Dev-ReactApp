import React from "react";
import styled from "styled-components";

function Car(props) {
  const { carName, color, horsePower } = props;
  return (
    <CarContainer>
      <h1 className="CarName">Brand: {carName}</h1>
      <div className="Color">Color: {color}</div>
      <div className="HorsePower">Horse Power{horsePower}</div>
    </CarContainer>
  );
}

const CarContainer = styled.div`
  font-family: klaptarabic;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  float: inline;
  color: black;
  background-color: blue;
  width: 250px;
  height: 250px;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 25px;
  box-shadow: blue 0px 25px 20px -20px;
`;

export default Car;
