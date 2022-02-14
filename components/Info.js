import styled from "styled-components";
import Container from "./Container";
import InfoItem from "./InfoItem";
import { InfoTileTexts } from "../constants/strings";
import { useRouter } from "next/router";

function Info() {
  const { locale } = useRouter();
  const { youCanFindOurProducts, quality, reasonablePrices } =
    InfoTileTexts[locale];

  return (
    <Container>
      <Wrapper>
        <InfoItem
          imgSrc="/images/globe.png"
          imgAlt="globe"
          title="A global brand"
          detail={youCanFindOurProducts}
        ></InfoItem>
        <InfoItem
          imgSrc="/images/silhouette.png"
          imgAlt="silhouette"
          title="High quality"
          detail={quality}
        ></InfoItem>
        <InfoItem
          imgSrc="/images/tag.png"
          imgAlt="tag"
          title="Best offers"
          detail={reasonablePrices}
        ></InfoItem>
      </Wrapper>
    </Container>
  );
}

export default Info;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-around;

  margin-bottom: 6rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4rem;
    align-items: center;
  }
`;
