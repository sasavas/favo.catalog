import { mainNavLinks, aboutUsPageParagraphs } from "../constants/strings";
import BlogPage from "../modules/blogs/components/BlogPage";
import { useRouter } from "next/router";

function AboutUs() {
  const { locale } = useRouter();
  const { aboutUs } = mainNavLinks[locale];
  const ps = aboutUsPageParagraphs[locale];

  return (
    <BlogPage title={aboutUs}>
      {ps.map((p) => {
        return <p key={p.length}>{p}</p>;
      })}
    </BlogPage>
  );
}

export default AboutUs;
