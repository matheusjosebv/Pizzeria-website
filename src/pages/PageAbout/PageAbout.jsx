import css from "./PageAbout.module.scss";
import bgImg from "../../assets/images/aboutHero.jpeg";

import Hero from "../../components/Hero/Hero";

export default function PageAbout() {
  return (
    <main className={css.root}>
      <Hero
        bgImg={bgImg}
        title="About"
        description="wckn wniwnd n wklnlkenn oifne ionoirnv irn vn in"
      />
    </main>
  );
}
