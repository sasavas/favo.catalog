import styled from "styled-components";
import Container from "./Container";
import Image from "next/image";
import NavLinks from "./NavLinks.tsx";
import Link from "next/link";
import { address } from "../../../lib/constants/strings";

function Banner() {
  const phoneDigits = String(address.phone || "").replace(/\D/g, "");
  const whatsappLink = phoneDigits ? `https://wa.me/${phoneDigits}` : undefined;
  return (
    <Wrapper>
      <Container>
        <div className="menu">
          <div className="logo">
            <Link href="/">
              <a>
                <Image
                  src="/favologosade.png"
                  alt="Favo Kids Logo"
                  width="124"
                  height="65"
                />
              </a>
            </Link>
          </div>
          <NavLinks></NavLinks>
          {whatsappLink && (
            <a className="whatsappTop" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <Image src="/icons/whatsapp.png" width={24} height={24} alt="WhatsApp" />
              <span>WhatsApp</span>
            </a>
          )}
        </div>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0.4rem 0;

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .logo {
    display: flex;
    align-items: center;
  }

  .whatsappTop {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #25d366;
    color: #fff;
    border-radius: 999px;
    padding: 0.35rem 0.75rem;
    font-size: 0.95rem;
    text-decoration: none;
    white-space: nowrap;
  }
`;

export default Banner;
