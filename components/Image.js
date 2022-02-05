/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

function Image({ src, alt, width, height, objectFit, objectPosition }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: width,
        height: height,
        objectFit: objectFit,
        objectPosition: objectPosition,
      }}
    />
  );
}

// const StyledImage = styled.img`
//     width: ${props};

// `;

export default Image;
