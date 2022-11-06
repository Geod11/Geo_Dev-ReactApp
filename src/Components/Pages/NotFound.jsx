import React from "react";
import styled from "styled-components";

export default function NotFound() {
  return <NotFoundPageContent>Page not found</NotFoundPageContent>;
}

const NotFoundPageContent = styled.div`
  color: rgb(218, 34, 34);
  background-color: pink;
  width: 100%;
  height: 60vh;
`;
