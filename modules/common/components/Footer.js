import styled from "styled-components";
import Link from "next/link";
import Container from "./Container";
import Image from "./Image";
import { externalLinks } from "../../../lib/constants/network";
import { address, titles, callToActions } from "../../../lib/constants/strings";
import { useRouter } from "next/router";

export default function Footer() {
  const { locale } = useRouter();
  const {
    months,
    _2_5_age,
    _6_9_age,
    allCollection,
    categories,
    address: addressTitle,
  } = titles[locale];
  const { followUs } = callToActions[locale];
  const { facebook, instagram, twitter, telegram, vkontakte } = externalLinks;

  return (
    <Wrapper>
      <Container>
        <div className="content">
          <div className="followUs">
            <h4>{followUs}</h4>
            <div className="socialIcons">
              <a href={facebook} target="_blank" rel="noreferrer">
                <Image
                  width="2rem"
                  src="/icons/facebook.png"
                  alt="Facebook"
                ></Image>
              </a>
              <a href={instagram} target="_blank" rel="noreferrer">
                <Image
                  width="2rem"
                  src="/icons/instagram.png"
                  alt="Instagram"
                ></Image>
              </a>
              <a href={twitter} target="_blank" rel="noreferrer">
                <Image
                  width="2rem"
                  src="/icons/twitter.png"
                  alt="Twitter"
                ></Image>
              </a>
              <a href={telegram} target="_blank" rel="noreferrer">
                <Image
                  width="2rem"
                  src="/icons/telegram.png"
                  alt="Telegram Channel"
                ></Image>
              </a>
              <a href={vkontakte} target="_blank" rel="noreferrer">
                <Image
                  width="2rem"
                  src="/icons/vkontakte.png"
                  alt="Vkontakte"
                ></Image>
              </a>
            </div>
          </div>
          <div className="address">
            <h4>{addressTitle}</h4>
            <div className="item addressItem">
              <Image
                width="2rem"
                src="/icons/address.png"
                alt="address"
              ></Image>
              <span>{address.address}</span>
            </div>
            <div className="item addressItem">
              <Image width="2rem" src="/icons/phone.png" alt="Phone"></Image>
              <span>{address.phone}</span>
            </div>
            <div className="item addressItem">
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
  padding-left: 8rem;
  padding-right: 8rem;

  a {
    &:hover {
      opacity: 0.4;
    }
  }

  h4 {
    margin-bottom: 3rem;
    font-size: 1.6rem;
  }

  .item {
    display: block;
    margin-bottom: 1.2rem;
  }

  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    .followUs {
      flex: 1;

      div {
        display: flex;
        align-items: start;
        gap: 1rem;

        & > *:hover {
          opacity: 0.6;
          cursor: pointer;
        }
      }
    }

    .address {
      flex: 1;

      .addressItem {
        display: flex;
        align-items: center;

        span {
          margin-left: 0.6rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;

    h4 {
      text-align: center;
    }

    .content {
      flex-direction: column;
      align-items: center;
      gap: 4rem;
    }

    .address {
      width: 70%;
    }
  }
`;
