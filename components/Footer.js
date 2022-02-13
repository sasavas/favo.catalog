import Container from "./Container";
import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <div>Footer</div>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f5f5f5;
  padding: 2rem 0;
`;
