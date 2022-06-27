import styled from "styled-components";
import Container from "../../common/components/Container";
import AgeCollectionItem from "./AgeCollectionItem";
import { titles } from "../../../lib/constants/strings";
import { useRouter } from "next/router";

function AgeCollections() {
  const { locale } = useRouter();
  const { months, _2_5_age, _6_9_age } = titles[locale];

  return (
    <Wrapper>
      <h2>{titles.productsByAgeGroup}</h2>
      <Container>
        <AgeCollectionList>
          <AgeCollectionItem
            imgSrc="/images/babyboy.jpg"
            title={months}
          ></AgeCollectionItem>
          <AgeCollectionItem
            imgSrc="/images/2-5boy.jpg"
            title={_2_5_age}
          ></AgeCollectionItem>
          <AgeCollectionItem
            imgSrc="/images/6-9boy.jpg"
            title={_6_9_age}
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
