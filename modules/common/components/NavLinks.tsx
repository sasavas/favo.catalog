import { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { mainNavLinks } from "../../../lib/constants/strings";
import { useRouter } from "next/router";
import { CgClose } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import React from "react";

function NavLinks() {
  const { locale } = useRouter();
  const { homepage, catalog, aboutUs, contact } = mainNavLinks[locale];

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setShowMenu(false);
  }, []);

  return (
    <Wrapper>
      {/* <FiMenu
        className={`nav-icon ${showMenu ? "hide" : "show"}`}
        onClick={openMenu}
        size="42"
      ></FiMenu> */}
      <div className={`links ${showMenu ? "links__show" : "links__hide"}`}>
        {/* <Link href="/">
          <a>{homepage}</a>
        </Link> */}
        {/* <Link href="/products">
          <a>{catalog}</a>
        </Link> */}
        {/* <Link href="/AboutUs">
          <a>{aboutUs}</a>
        </Link>
        <Link href="/Contact">
          <a>{contact}</a>
        </Link> */}
        <CgClose
          className={`close-icon ${showMenu ? "show" : "hide"}`}
          size={36}
          onClick={closeMenu}
        ></CgClose>
      </div>
    </Wrapper>
  );

  function openMenu() {
    setShowMenu(true);
  }

  function closeMenu() {
    setShowMenu(false);
  }
}

const Wrapper = styled.nav`
  .links {
    display: block;
    font-size: 1.1rem;
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: flex-end;

    > *:hover {
      color: rgba(0, 0, 0, 0.6);
      cursor: pointer;
    }
  }

  .nav-icon,
  .close-icon {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .show {
      display: block;
    }

    .hide {
      display: none;
    }

    .links__show {
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      z-index: 999;

      background-color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      > :nth-child(1) {
        margin-top: 4rem;
      }
    }

    .links__hide {
      display: none;
    }
  }
`;

export default NavLinks;
