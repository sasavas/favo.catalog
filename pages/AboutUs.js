import { mainNavLinks, aboutUsPageParagraphs } from "../lib/constants/strings";
import BlogPage from "../modules/blogs/components/BlogPage";
import { useRouter } from "next/router";

function AboutUs() {
  const { locale } = useRouter();
  const { aboutUs } = mainNavLinks[locale];
  const { paragraphs } = aboutUsPageParagraphs[locale];

  return (
    <BlogPage title={aboutUs}>
      {paragraphs.map((p) => {
        return <p key={p.length}>{p}</p>;
      })}
    </BlogPage>
  );
}

export default AboutUs;
