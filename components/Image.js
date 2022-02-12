/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

function Image({
  src,
  alt,
  width,
  maxWidth,
  height,
  objectFit,
  objectPosition,
}) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: width || "auto",
        maxWidth: maxWidth || "auto",
        height: height || "auto",
        objectFit: objectFit,
        objectPosition: objectPosition,
      }}
    />
  );
}

export default Image;
