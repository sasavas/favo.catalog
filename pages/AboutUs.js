import { mainNavLinks, aboutUsPageParagraphs } from "../constants/strings";
import BlogPage from "../components/BlogPage";
import { useRouter } from "next/router";

function AboutUs() {
  const { locale } = useRouter();
  const ps = aboutUsPageParagraphs[locale];
  const { aboutUs } = mainNavLinks[locale];

  return (
    <BlogPage title={aboutUs}>
      {ps.map((p) => {
        return <p key={p.length}>{p}</p>;
      })}
    </BlogPage>
  );
}

export default AboutUs;
