import styled from "styled-components";
import Image from "../../common/components/Image";

export default function InfoItem({ imgSrc, imgAlt, title, detail }) {
  return (
    <Wrapper>
      <Image src={imgSrc} alt={imgAlt} width="4rem"></Image>
      <h4>{title}</h4>
      <p>{detail}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  h4 {
    color: #aacfe9;
  }

  p {
    text-align: center;
  }

  @media (max-width: 768px) {
    max-width: 32rem;
    gap: 1rem;
  }
`;
