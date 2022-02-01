import React from "react";
import styled from "styled-components";

function Layout({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  margin: 1rem;
`;

export default Layout;
