import Link from "next/link";
import styled from "styled-components";

const CustomLink = ({ href, text }) => {
  return (
    <Wrapper>
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </Wrapper>
  );
};

export default CustomLink;

const Wrapper = styled.div`
  a {
    background-color: #61ce70;
    color: white;
    font-weight: bold;
    padding: 0.8rem 2rem;
    border-radius: 4px;

    &:hover {
      background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
    }
  }
`;
