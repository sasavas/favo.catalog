import styled from "styled-components";
import Container from "./Container";
import AgeCollectionItem from "./AgeCollectionItem";

function AgeCollections() {
  return (
    <Wrapper>
      <h2>Yaş Gruplarına Göre Ürünler</h2>
      <Container>
        <AgeCollectionList>
          <AgeCollectionItem
            imgSrc="/images/babyboy.jpg"
            title="Aylık"
          ></AgeCollectionItem>
          <AgeCollectionItem
            imgSrc="/images/2-5boy.jpg"
            title="2-3-4-5 Yaş"
          ></AgeCollectionItem>
          <AgeCollectionItem
            imgSrc="/images/6-9boy.jpg"
            title="6-7-8-9 Yaş"
          ></AgeCollectionItem>
        </AgeCollectionList>
      </Container>
    </Wrapper>
  );
}

export default AgeCollections;

const Wrapper = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const AgeCollectionList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  margin-bottom: 6rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
