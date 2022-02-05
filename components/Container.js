import styled from "styled-components";

function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  margin: 1rem 6rem;
  display: flex;
  gap: 2rem;
  min-width: 844px;

  .filterMenu {
    background-color: #dedede;
    padding: 1rem;
    flex: 1;
    min-width: 16rem;
  }

  .mainContent {
    flex: 4;
  }

  @media (max-width: 996px) {
    margin: 1rem;
  }

  @media (max-width: 768px) {
    /**TODO: For mobile screens */
  }
`;

export default Container;
