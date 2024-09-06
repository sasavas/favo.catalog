import styled from "styled-components";
import Container from "../../common/components/Container";

function BlogPage({ title, children }) {
  return (
    <div className="mainContent">
      <Container>
        <Wrapper>
          {/* <AboutUs/> */}
          
        </Wrapper>
      </Container>
    </div>
  );
}

export default BlogPage;

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
