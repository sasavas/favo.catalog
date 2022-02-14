import styled from "styled-components";
import Container from "./Container";
import AgeCollectionItem from "./AgeCollectionItem";
import { titles } from "../constants/strings";

function AgeCollections() {
  return (
    <Wrapper>
      <h2>{titles.productsByAgeGroup}</h2>
      <Container>
        <AgeCollectionList>
          <AgeCollectionItem
            imgSrc="/images/babyboy.jpg"
            title={titles.months}
          ></AgeCollectionItem>
          <AgeCollectionItem
            imgSrc="/images/2-5boy.jpg"
            title={titles._2_5_age}
          ></AgeCollectionItem>
          <AgeCollectionItem
            imgSrc="/images/6-9boy.jpg"
            title={titles._6_9_age}
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
