import Banner from "./Banner";
import Footer from "./Footer";
import styled from "styled-components";
import { address } from "../../../lib/constants/strings";
import Image from "next/image";

function Layout({ children }) {
  const phoneDigits = String(address.phone || "").replace(/\D/g, "");
  const whatsappLink = phoneDigits ? `https://wa.me/${phoneDigits}` : undefined;
  return (
    <Wrapper>
      <Banner />
      <div className="mainContent">{children}</div>
      {whatsappLink && (
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="whatsappFloat"
          aria-label="WhatsApp"
          title="WhatsApp"
        >
          <Image src="/icons/whatsapp.png" alt="WhatsApp" width={28} height={28} />
        </a>
      )}
      <Footer />
    </Wrapper>
  );
}

export default Layout;

const Wrapper = styled.div`
  .whatsappFloat {
    position: fixed;
    right: 1.2rem;
    bottom: 1.2rem;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #25d366;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
    z-index: 1000;
  }
`;
