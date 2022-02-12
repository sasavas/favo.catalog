import styled from "styled-components";

function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  margin: 1rem 6rem;
  display: flex;
  gap: 2rem;

  .filterMenu {
    background-color: #dedede;
    padding: 1rem;
    flex: 1;
    min-width: 16rem;
  }

  .mainContent {
    flex: 4;
  }

  @media (max-width: 1080px) {
    margin: 1rem;
  }

  @media (max-width: 768px) {
  }
`;

export default Container;
