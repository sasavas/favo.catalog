import BlogPage from "../modules/blogs/components/BlogPage";
import { mainNavLinks } from "../lib/constants/strings";
import Image from "next/image";
import styled from "styled-components";

function Contact() {
  return (
    <BlogPage title={mainNavLinks.contact}>
      <FlexWrapper>
        <div style={{
          flexGrow: 1,
        }}>
          <StyledDiv>
            <Icon imagePath="/icons/phone.png" altText="Phone" />
            <span>+905435236345</span>
          </StyledDiv>
          <StyledDiv>
            <Icon imagePath="/icons/phone.png" altText="Phone" />
            <span>+905532677748</span>
          </StyledDiv>
          <StyledDiv>
            <Icon imagePath="/icons/email.png" altText="Email address" />
            <span>muhasebe.favo@gmail.com</span>
          </StyledDiv>
          <StyledDiv>
            <Icon imagePath="/icons/address.png" altText="address" />
            <span>Yunusemre Mh. 2. Kıyıcı Sk. No: 24/A Yıldırım/Bursa TURKEY</span>
          </StyledDiv>
        </div>

        <StyledDiv>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.403325792975!2d29.107395251032774!3d40.200090379289676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3eee5e4df8db%3A0x1ebf43b1949ff6f5!2sFavo%20Kids!5e0!3m2!1sen!2str!4v1655567694293!5m2!1sen!2str"
            className="map"
            loading="lazy"
          ></iframe>
        </StyledDiv>
      </FlexWrapper>

    </BlogPage>
  );
}

function Icon({ imagePath, altText }) {
  return (
    <Image
      width="32"
      height="32"
      objectFit="contain"
      src={imagePath}
      alt={altText}
    ></Image>
  );
}

const StyledDiv = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;

  .map {
    width: 36rem;
    height: 24rem;
    border: 0;
    margin-bottom: 4rem;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;

  @media screen and (max-width: 1024px){
    flex-direction: column;
  }
`;

export default Contact;
