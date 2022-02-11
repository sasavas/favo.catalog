import Link from "next/link";
import styled from "styled-components";
import { mainNavLinks } from "../constants/strings";

function MainMenu() {
  return (
    <div>
      <NavMenu>
        <Link href="/">
          <a>{mainNavLinks.homepage}</a>
        </Link>
        <Link href="/ProductListing">
          <a>{mainNavLinks.catalog}</a>
        </Link>
        <Link href="#">
          <a>{mainNavLinks.aboutus}</a>
        </Link>
        <Link href="#">
          <a>{mainNavLinks.contact}</a>
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
