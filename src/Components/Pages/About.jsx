import styled from "styled-components";
//import { TabSwitcher } from "../TabSwitcher";
//import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";

//export type ButtonType = "leftside" | "rightside";

export default function About() {
  //const [activeButton, setActiveButton] = useState < ButtonType > "leftside";

  return (
    <Wrapper>
      {/* <TabSwitcher
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      /> */}
      About Page information
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: green;
  background-color: black;
  width: 100%;
  height: 100%;
`;
