import styled from "styled-components";
import Image from "./Image";
import CustomLink from "./CustomLink";

const CardOverlayImage = ({
  imageSrc,
  imageAlt,
  title,
  detail,
  buttonText,
  href,
}) => {
  return (
    <Wrapper>
      <Image
        src={imageSrc}
        alt={imageAlt}
        maxWidth="100%"
        objectFit="cover"
        objectPosition="right top"
      ></Image>
      <div className="overlay">
        <div className="overlayContent">
          <h3 className="title">{title}</h3>
          <p className="detail">{detail}</p>
          <CustomLink href={href ?? "#"} text={buttonText}></CustomLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default CardOverlayImage;

const Wrapper = styled.div`
  position: relative;
  min-width: 16rem;
  max-width: 28rem;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(10, 10, 10, 0.2);

    .overlayContent {
      position: absolute;
      bottom: 2rem;
      left: 2rem;
      right: 2rem;

      .title {
        font-size: 3rem;
        color: white;
        width: 80%;
        margin-bottom: 1rem;
      }

      .detail {
        font-size: 1rem;
        color: white;
        width: 80%;
        margin-bottom: 2rem;
      }
    }
  }

  @media (max-width: 1080px) {
    .overlay .overlayContent {
      bottom: 2rem;

      .title {
        font-size: 2rem;
      }
    }
  }

  @media (max-width: 768px) {
    max-width: 36rem;
  }
`;
