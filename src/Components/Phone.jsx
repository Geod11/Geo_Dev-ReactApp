import React from "react";
import styled from "styled-components";

function Phone(props) {
  const { phoneBrand, phoneModel, phoneColor } = props;
  return (
    <PhoneContainer>
      <h1 className="PhoneBrand">Brand: {phoneBrand}</h1>
      <div className="PhoneModel">Color: {phoneModel}</div>
      <div className="PhoneColor">Horse Power{phoneColor}</div>
    </PhoneContainer>
  );
}

const PhoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: blueviolet;
  background-color: red;
  width: 250px;
  align-items: center;
`;

export default Phone;
