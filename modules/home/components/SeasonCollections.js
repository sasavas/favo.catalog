import styled from "styled-components";
import Container from "../../common/components/Container";
import SeasonCollectionItem from "../../common/components/SeasonCollectionItem";
import {
  buttonTexts,
  seeCollections,
  titles,
} from "../../../constants/strings";
import { useRouter } from "next/router";

function SeasonCollections() {
  const { locale } = useRouter();
  const { seeProducts } = buttonTexts[locale];
  const { summer2022, spring2022 } = titles[locale];
  const { see2022SummerCollection, see2022SpringCollection } =
    seeCollections[locale];

  return (
    <Container>
      <Wrapper>
        <SeasonCollectionItem
          imageSrc="/images/summercollection.jpg"
          imageAlt="summer collection"
          title={summer2022}
          detail={see2022SummerCollection}
          buttonText={seeProducts}
          href="/products"
        ></SeasonCollectionItem>
        <SeasonCollectionItem
          imageSrc="/images/springcollection.jpg"
          imageAlt="summer collection"
          title={spring2022}
          detail={see2022SpringCollection}
          buttonText={seeProducts}
          href="/products"
        ></SeasonCollectionItem>
      </Wrapper>
    </Container>
  );
}

export default SeasonCollections;

const Wrapper = styled.div`
  margin-top: 6rem;
  margin-bottom: 6rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1080px) {
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    flex-direction: column;
  }
`;
