// import { findByLabelText } from '@testing-library/react';
// import { type } from '@testing-library/user-event/dist/type';
// import React from 'react'
// import styled from "styled-components";
// import { ButtonType } from './Pages/Test';

// interface PropsInterface {
//   activeButton: ButtonType;
//   onChangeActiveButton: (newActiveButton: ButtonType) => void;
// }

// interface ButtonProps {
//   active: boolean;
// }

// export const TabSwitcher = (props:PropsInterface) => {
// const {activeButton, onChangeActiveButton} = props;

//   return (
//     <ButtonsContainer>
//      <LeftsideButton active={activeButton==="leftside"} onClick={() => onChangeActiveButton("leftside")}>This month</LeftsideButton>
//      <RightsideButton active={activeButton==="rightside" }  onClick={() => onChangeActiveButton("rightside")}>Overall</RightsideButton>
//     </ButtonsContainer>
//   )
// }

//     const ButtonsContainer = styled.div`

//     `;

// const LeftsideButton = styled.button<ButtonProps>`
// color: ${p=> p.active ? "#2488eb" : "white"};
// //background-color:
// //top and bottom left border radius aprox 13px / gray backgound aprox /  tex color hex: #2488eb
// `;

// const RightsideButton = styled.button<ButtonProps>`
// color: ${p=> p.active ? "#2488eb" : "white"}
// `;

// //display similar to flex / border-radius
