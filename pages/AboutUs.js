import { mainNavLinks, aboutUsPageParagraphs } from "../constants/strings";
import BlogPage from "../components/BlogPage";

function AboutUs() {
  return (
    <BlogPage title={mainNavLinks.aboutUs}>
      {aboutUsPageParagraphs.map((p) => {
        return <p key={p.length}>{p}</p>;
      })}
    </BlogPage>
  );
}

export default AboutUs;
