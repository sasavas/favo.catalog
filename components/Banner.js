import styled from "styled-components";
import Container from "./Container";
import Image from "next/image";
import MainMenu from "./MainMenu";
import Link from "next/link";

function Banner() {
  return (
    <Wrapper>
      <Container>
        <FlexContainer>
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
          <MainMenu className="mainMenu"></MainMenu>
        </FlexContainer>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0.4rem 0;
  background-color: #fff;
  box-shadow: 0px 2px 10px 2px #ddd;
`;

const FlexContainer = styled.div`
  width: 100%;
  font-size: 1.1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default Banner;
