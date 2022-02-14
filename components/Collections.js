import styled from "styled-components";
import Container from "../components/Container";
import CardOverlayImage from "./CardOverlayImage";
import { buttonTexts, seeCollections, titles } from "../constants/strings";
import { useRouter } from "next/router";

function Collections() {
  const { locale } = useRouter();
  const { seeProducts } = buttonTexts[locale];
  const { summer2022, spring2022 } = titles[locale];
  const { see2022SummerCollection, see2022SpringCollection } =
    seeCollections[locale];

  return (
    <Container>
      <Wrapper>
        <CardOverlayImage
          imageSrc="/images/summercollection.jpg"
          imageAlt="summer collection"
          title={summer2022}
          detail={see2022SummerCollection}
          buttonText={seeProducts}
        ></CardOverlayImage>
        <CardOverlayImage
          imageSrc="/images/springcollection.jpg"
          imageAlt="summer collection"
          title={spring2022}
          detail={see2022SpringCollection}
          buttonText={seeProducts}
        ></CardOverlayImage>
      </Wrapper>
    </Container>
  );
}

export default Collections;

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
