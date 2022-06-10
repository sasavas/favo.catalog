import Link from "next/link";
import styled from "styled-components";
import { mainNavLinks } from "../../../constants/strings";
import { useRouter } from "next/router";

function NavLinks({ className }) {
  const { locale } = useRouter();
  const { homepage, catalog, aboutUs, contact } = mainNavLinks[locale];

  return (
    <Wrapper className={className}>
      <Link href="/">
        <a>{homepage}</a>
      </Link>
      <Link href="/products">
        <a>{catalog}</a>
      </Link>
      <Link href="/AboutUs">
        <a>{aboutUs}</a>
      </Link>
      <Link href="/Contact">
        <a>{contact}</a>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  gap: 2rem;

  > *:hover {
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    /** if this component's class name is nav-links */
    &.nav-links {
      display: none;
    }

    /** if this component's class name is nav-links__full_screen */
    &.nav-links__full_screen {
      display: block;
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      background-color: aliceblue;
      z-index: 999;

      > :nth-child(1) {
        margin-top: 4rem;
      }

      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default NavLinks;
