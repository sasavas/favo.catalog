import BlogPage from "../modules/blogs/components/BlogPage";
import { mainNavLinks } from "../constants/strings";

function Contact() {
  return (
    <BlogPage title={mainNavLinks.contact}>
      <p>Ilet</p>
    </BlogPage>
  );
}

export default Contact;
