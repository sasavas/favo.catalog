import styled from "styled-components";
import Container from "../components/Container";
import CardOverlayImage from "./CardOverlayImage";
import { buttonTexts } from "../constants/strings";

function Collections() {
  return (
    <Container>
      <Wrapper>
        <CardOverlayImage
          imageSrc="/images/summercollection.jpg"
          imageAlt="summer collection"
          title="2022 Summer"
          detail="Check out our 2022 Summer Collection"
          buttonText={buttonTexts.seeProducts}
        ></CardOverlayImage>
        <CardOverlayImage
          imageSrc="/images/springcollection.jpg"
          imageAlt="summer collection"
          title="2022 Spring"
          detail="Check out our 2022 Summer Collection"
          buttonText={buttonTexts.seeProducts}
        ></CardOverlayImage>
      </Wrapper>
    </Container>
  );
}

export default Collections;

const Wrapper = styled.div`
  margin-top: 6rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;

  margin-bottom: 6rem;
`;
