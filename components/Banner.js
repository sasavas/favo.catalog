import styled from "styled-components";
import Container from "./Container";
import Image from "next/image";
import MainMenu from "./MainMenu";

function Banner() {
  return (
    <Wrapper>
      <Container>
        <Image
          src="/favologosade.png"
          alt="Favo Kids Logo"
          width="124"
          height="65"
        />
        <MainMenu></MainMenu>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0.4rem 0;
  background-color: #fff;
  box-shadow: 0px 2px 10px 2px #ddd;
`;

export default Banner;
