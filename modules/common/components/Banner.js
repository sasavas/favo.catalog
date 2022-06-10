import styled from "styled-components";
import Container from "./Container";
import Image from "next/image";
import NavLinks from "./NavLinks.tsx";
import Link from "next/link";

function Banner() {
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
        </div>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0.4rem 0;
  /* background-color: #fff; */
  /* box-shadow: 0px 2px 10px 2px #ddd; */

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default Banner;
