import Container from "./Container";
import styled from "styled-components";
import Link from "next/link";
import Image from "../components/Image";
import { address } from "../constants/strings";

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <div className="content">
          <div className="categories">
            <h4>Kategoriler</h4>
            <Link href="#">
              <a>Tum Kreasyon</a>
            </Link>
            <Link href="#">
              <a>Aylik Grubu</a>
            </Link>
            <Link href="#">
              <a>2-5 Yas Grubu</a>
            </Link>
            <Link href="#">
              <a>6-9 Yas Grubu</a>
            </Link>
          </div>
          <div className="followUs">
            <h4>Bizi Takip Edin</h4>
            <div className="socialIcons">
              <Image
                width="2rem"
                src="/icons/facebook.png"
                alt="Facebook"
              ></Image>
              <Image
                width="2rem"
                src="/icons/instagram.png"
                alt="Instagram"
              ></Image>
              <Image
                width="2rem"
                src="/icons/twitter.png"
                alt="Twitter"
              ></Image>
              <Image
                width="2rem"
                src="/icons/telegram.png"
                alt="Telegram Channel"
              ></Image>
            </div>
          </div>
          <div className="address">
            <h4>Adres</h4>
            <div className="addressItem">
              <Image
                width="2rem"
                src="/icons/address.png"
                alt="address"
              ></Image>
              <span>{address.address}</span>
            </div>
            <div className="addressItem">
              <Image width="2rem" src="/icons/phone.png" alt="Phone"></Image>
              <span>{address.phone}</span>
            </div>
            <div className="addressItem">
              <Image width="2rem" src="/icons/email.png" alt="Email"></Image>
              <span>{address.email}</span>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f5f5f5;
  padding: 2rem 0;

  a {
    color: rebeccapurple;
  }

  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 4rem;

      h4 {
        text-align: center;
        margin-bottom: 1rem !important;
      }
    }

    .categories {
      flex: 1;

      & > * {
        display: block;
        margin-bottom: 0.4rem;
      }

      h4 {
        font-size: 1.6rem;
        margin-bottom: 2rem;
      }
    }

    .followUs {
      flex: 1;

      & > div {
        display: flex;
        align-items: start;
        gap: 1rem;

        & > *:hover {
          opacity: 0.6;
          cursor: pointer;
        }
      }

      h4 {
        font-size: 1.6rem;
        margin-bottom: 2rem;
      }
    }

    .address {
      flex: 1;

      & > * {
        margin-bottom: 0.4rem;
      }

      .addressItem {
        display: flex;
        align-items: start;
        span {
          margin-left: 0.6rem;
        }
      }

      h4 {
        font-size: 1.6rem;
        margin-bottom: 2rem;
      }
    }
  }
`;
