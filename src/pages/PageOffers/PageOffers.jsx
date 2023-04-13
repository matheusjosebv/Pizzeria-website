import css from "./PageOffers.module.scss";
import bgImg from "../../assets/images/offersHero.jpeg";

import Hero from "../../components/Hero/Hero";

export default function PageOffers() {
  return (
    <main className={css.root}>
      <Hero
        bgImg={bgImg}
        title="Offers"
        description="wckn wniwnd n wklnlkenn oifne ionoirnv irn vn in"
      />
    </main>
  );
}
