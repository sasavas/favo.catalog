import { aboutUsPageParagraphs } from "../lib/constants/strings";
import Container from "../modules/common/components/Container";
import { useRouter } from "next/router";
import styled from "styled-components";

function AboutUs() {
  const { locale } = useRouter();
  const { paragraphs } = aboutUsPageParagraphs[locale];

  console.log({ paragraphs })

  return (
    <div className="mainContent section">
      <Container>
        <Wrapper>
          <h1>About us</h1>
          {paragraphs.map((p) => {
            return <p key={p.length}>{p}</p>;
          })}
        </Wrapper>
      </Container>
    </div>
  );
}

export default AboutUs;

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;

  h1 {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 2rem;
    line-height: 1.6rem;
  }

  @media (max-width: 900px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;
