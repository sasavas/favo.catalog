import styled from "styled-components";
import Image from "../components/Image";
import Link from "next/link";

const OverlayImage = () => {
  return (
    <Wrapper>
      <Image
        src="/images/boy-colorful-photoshoot.jpg"
        alt="Boy colorful photo"
        width="100%"
        height="calc(100vh - 65px - 3.2rem)"
        objectFit="cover"
        objectPosition="right top"
      ></Image>
      <div className="overlay">
        <div className="overlayContent">
          <h2>2022 Yaz Kreasyonumuza Bir Göz Atın</h2>
          <div className="buttonContainer">
            <Link href="#">
              <a className="catalogBtn">Ürünleri Gör</a>
            </Link>
            <Link href="#">
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

export default OverlayImage;

const Wrapper = styled.div`
  position: relative;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(10, 10, 10, 0.2);

    .overlayContent {
      margin-top: 12rem;
      margin-left: 10rem;

      h2 {
        font-size: 4rem;
        color: white;
        width: 40%;
        margin-bottom: 2rem;
      }

      .buttonContainer {
        display: flex;
        gap: 2rem;

        > * {
          color: white;
          font-weight: bold;
          padding: 1rem 2rem;
          border-radius: 4px;
        }

        .catalogBtn {
          background-color: #61ce70;

          &:hover {
            background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
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
  }
`;
