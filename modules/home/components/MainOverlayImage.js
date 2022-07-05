import styled from "styled-components";
import Image from "../../common/components/Image";
import Link from "next/link";
import useMediaQuery from "../../../lib/hooks/useMediaQuery";
import { buttonTexts, seeCollections } from "../../../lib/constants/strings";
import { useRouter } from "next/router";

const MainOverlayImage = () => {
  const isSmallScreen = useMediaQuery(768);
  const { locale } = useRouter();
  const { seeProducts } = buttonTexts[locale];
  const { see2022SpringCollection } = seeCollections[locale];

  return (
    <Wrapper contentPosition="left" dim={0.2}>
      <Image
        src="/images/banner-spring-boy-red.jpg"
        // /images/banner-spring-bw.jpg
        // /images/banner-spring-umbrella.jpg
        // /images/banner-spring-boy-red.jpg
        alt="Boy colorful photo"
        width="100%"
        height={isSmallScreen ? "24rem" : "calc(100vh - 65px - 3.2rem)"}
        objectFit="cover"
        objectPosition="right top"
      ></Image>
      <div className="overlay">
        <div className="overlayContent">
          <div className="titleContainer">
            <h2>{see2022SpringCollection}</h2>
          </div>
          <div className="buttonContainer">
            <Link href="/products">
              <a className="catalogBtn">{seeProducts}</a>
            </Link>
            <Link href="https://wa.me/00905435236345">
              <a className="whatsappBtn">
                <Image
                  src="/icons/whatsapp.png"
                  alt="whatsapp icon"
                  width="24px"
                  height="24px"
                ></Image>
                <span>Whatsapp</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MainOverlayImage;

const Wrapper = styled.div`
  position: relative;

  span {
    color: white;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(10, 10, 10, ${(props) => props.dim ?? 0.1});

    .overlayContent {
      position: absolute;
      right: 6rem;
      bottom: 4rem;

      .titleContainer {
        width: 100%;
        display: flex;
        justify-content: ${(props) =>
          props.contentPosition === "right" ? "end" : "start"};

        h2 {
          font-size: 4rem;
          color: white;
          width: 50%;
          margin-bottom: 2rem;
          text-align: ${(props) =>
            props.contentPosition === "right" ? "right" : "left"};
        }
      }

      .buttonContainer {
        display: flex;
        gap: 2rem;
        justify-content: ${(props) =>
          props.contentPosition === "right" ? "end" : "start"};

        > * {
          color: white;
          font-weight: bold;
          padding: 1rem 2rem;
          border-radius: 4px;
        }

        .catalogBtn {
          background-color: #61ce70;

          &:hover {
            background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
          }
        }

        .whatsappBtn {
          border: 1px solid white;
          display: flex;
          align-items: center;
          gap: 0.4rem;

          &:hover {
            background: black;
          }
        }
      }
    }

    @media (max-width: 1080px) {
      .overlayContent {
        left: 4rem;

        .titleContainer {
          h2 {
            font-size: 3rem;
          }
        }
      }
    }

    @media (max-width: 768px) {
      .overlayContent {
        left: 1rem;

        .titleContainer {
          h2 {
            font-size: 2rem;
          }
        }
      }
    }
  }
`;
