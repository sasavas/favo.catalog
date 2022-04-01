import BlogPage from "../modules/blogs/components/BlogPage";
import { mainNavLinks } from "../constants/strings";

function Contact() {
  return (
    <BlogPage title={mainNavLinks.contact}>
      <p>Contact us</p>
      <p>Phone: +905435236345</p>
      <p>Email: savasusame@gmail.com</p>
      <p>
        Address: Yunusemre Mh. 2. Yenibag Sk. No: 23/1 Yıldırım/Bursa TURKEY
      </p>
    </BlogPage>
  );
}

export default Contact;
