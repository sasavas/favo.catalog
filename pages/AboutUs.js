import { mainNavLinks, aboutUsPageParagraphs } from "../constants/strings";
import BlogPage from "../modules/blogs/components/BlogPage";
import { useRouter } from "next/router";

function AboutUs() {
  const { locale } = useRouter();
  const { aboutUs } = mainNavLinks[locale];
  const { paragraphs } = aboutUsPageParagraphs[locale];

  return (
    <BlogPage title={aboutUs}>
      {paragraphs
        ? paragraphs.map((p) => {
            return <p key={p.length}>{p}</p>;
          })
        : "About Us.. no content"}
    </BlogPage>
  );
}

export default AboutUs;
