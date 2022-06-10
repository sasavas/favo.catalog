import styled from "styled-components";
import Container from "./Container";
import Image from "next/image";
import NavLinks from "./MainMenu.tsx";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect } from "react";

function Banner() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    // const bigScreen = window.innerWidth > 768;
    // console.log("bigScreen", bigScreen);

    setShowMenu(false);
  }, []);

  return (
    <Wrapper showMenu={showMenu}>
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
          <div className="nav">
            <FiMenu
              className="nav-icon"
              onClick={handleMenuIconClick}
              size="42"
            ></FiMenu>
            <NavLinks
              className={`${showMenu ? "nav-links__full_screen" : "nav-links"}`}
            ></NavLinks>
          </div>
        </div>
      </Container>
    </Wrapper>
  );

  function handleMenuIconClick() {
    setShowMenu(true);
  }
}

const Wrapper = styled.div`
  padding: 0.4rem 0;
  /* background-color: #fff; */
  /* box-shadow: 0px 2px 10px 2px #ddd; */

  .menu {
    display: flex;
    justify-content: space-between;

    .nav {
      font-size: 1.1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      /** when showMenu is on then display the links and hide the icon
          when showMenu is off then hide the links and display the icon */
      .nav-icon {
        display: none;
      }

      .nav-links {
        display: block;
      }
    }
  }

  /** when the screen is small 
  and the user clicks on the hamburger menu 
  make the menu full screen */
  @media screen and (max-width: 768px) {
    .menu {
      .nav {
        .nav-icon {
          display: block;
        }

        .nav-links {
          display: none;
        }

        .nav-links__full_screen {
          display: block;
          position: fixed;
          width: 100vw;
          height: 100vh;
          top: 0;
          left: 0;
          background-color: aliceblue;
          z-index: 999;
        }
      }
    }
  }
`;

export default Banner;
