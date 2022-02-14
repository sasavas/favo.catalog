import Layout from "../components/Layout";
import styled from "styled-components";
import Container from "../components/Container";

function AboutUs({ title, children }) {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <h1>{title}</h1>
          {children}
        </Wrapper>
      </Container>
    </Layout>
  );
}

export default AboutUs;

const Wrapper = styled.div`
  width: 60%;
  min-height: calc(100vh - 12rem);

  h1 {
    font-size: 4rem;
    text-align: center;
    margin: 4rem 0;
  }

  p {
    font-size: 1rem;
    margin-bottom: 2rem;
    line-height: 1.6rem;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;
