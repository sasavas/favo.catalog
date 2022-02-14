import Link from "next/link";
import styled from "styled-components";
import { mainNavLinks } from "../constants/strings";
import { useRouter } from "next/router";

function MainMenu() {
  const { locale } = useRouter();
  const { homepage, catalog, aboutUs, contact } = mainNavLinks[locale];

  return (
    <div>
      <NavMenu>
        <Link href="/">
          <a>{homepage}</a>
        </Link>
        <Link href="/ProductListing">
          <a>{catalog}</a>
        </Link>
        <Link href="/AboutUs">
          <a>{aboutUs}</a>
        </Link>
        <Link href="/Contact">
          <a>{contact}</a>
        </Link>
      </NavMenu>
    </div>
  );
}

const NavMenu = styled.nav`
  display: flex;
  gap: 2rem;

  > *:hover {
    color: rgba(0, 0, 0, 0.6);
  }
`;

export default MainMenu;
