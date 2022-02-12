import styled from "styled-components";
import Image from "../components/Image";
import Link from "next/link";

export default function AgeCollectionItem({ imgSrc, imgAlt, title }) {
  return (
    <Link href="/ProductListing">
      <a>
        <Wrapper>
          <Image src={imgSrc} alt={imgAlt || "boy"} width="100%"></Image>
          <div className="overlay">
            <h4>{title}</h4>
          </div>
        </Wrapper>
      </a>
    </Link>
  );
}

const Wrapper = styled.div`
  position: relative;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: right;
    align-items: center;
    margin-right: 2rem;

    h4 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
