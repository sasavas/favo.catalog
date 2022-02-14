import styled from "styled-components";

function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  margin: 0 6rem;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 1080px) {
    margin: 1rem;
  }

  @media (max-width: 768px) {
  }
`;

export default Container;
