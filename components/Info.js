import styled from "styled-components";
import Container from "./Container";
import InfoItem from "./InfoItem";

function Info() {
  return (
    <Container>
      <Wrapper>
        <InfoItem
          imgSrc="/images/globe.png"
          imgAlt="globe"
          title="A global brand"
          detail="You can find our products all across the world"
        ></InfoItem>
        <InfoItem
          imgSrc="/images/silhouette.png"
          imgAlt="silhouette"
          title="High quality"
          detail="We use the best quality fabrics and materials in our products."
        ></InfoItem>
        <InfoItem
          imgSrc="/images/tag.png"
          imgAlt="tag"
          title="Best offers"
          detail="We offer you the best quality products at the best prices."
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
