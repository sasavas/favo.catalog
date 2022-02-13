/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

function Image({
  src,
  alt,
  width,
  height,
  maxWidth,
  objectFit,
  objectPosition,
}) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: width || "auto",
        height: height || "auto",
        maxWidth: maxWidth || "auto",
        objectFit: objectFit,
        objectPosition: objectPosition,
      }}
    />
  );
}

export default Image;
