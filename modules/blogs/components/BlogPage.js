import Layout from "../../common/components/Layout";
import styled from "styled-components";
import Container from "../../common/components/Container";

function AboutUs({ title, children }) {
  return (
    <div className="mainContent">
      <Container>
        <Wrapper>
          <h1>{title}</h1>
          {children}
        </Wrapper>
      </Container>
    </div>
  );
}

export default AboutUs;

const Wrapper = styled.div`
  /** width: 60%; */
  margin: 0 auto;
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

  @media (max-width: 900px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;
