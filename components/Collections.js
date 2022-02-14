import styled from "styled-components";
import Container from "../components/Container";
import CardOverlayImage from "./CardOverlayImage";
import { buttonTexts, seeCollections, titles } from "../constants/strings";

function Collections() {
  return (
    <Container>
      <Wrapper>
        <CardOverlayImage
          imageSrc="/images/summercollection.jpg"
          imageAlt="summer collection"
          title={titles.summer2022}
          detail={seeCollections.see2022SummerCollection}
          buttonText={buttonTexts.seeProducts}
        ></CardOverlayImage>
        <CardOverlayImage
          imageSrc="/images/springcollection.jpg"
          imageAlt="summer collection"
          title={titles.spring2022}
          detail={seeCollections.see2022SpringCollection}
          buttonText={buttonTexts.seeProducts}
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
