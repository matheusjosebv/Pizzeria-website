import css from "./PageContact.module.scss";

import Hero from "../../components/Hero/Hero";
import Heading from "../../components/Heading/Heading";
import OurLocation from "../../components/OurLocation/OurLocation";
import DownloadTheApp from "../../components/DownloadTheApp/DownloadTheApp";

import bgImg from "../../assets/images/contactHero.jpeg";

export default function PageContact() {
  return (
    <main className={css.root}>
      <Hero
        bgImg={bgImg}
        title="Contact"
        description="Something  nwfnownf nno fn3ofoii 3nofn3fn3condkns l lksndlfn s  n"
      />
      <section className={css.form}></section>

      <section className={css.location}>
        <OurLocation />
      </section>

      <section className={css.franchise}>
        <Heading
          subtitle="Join The Table"
          title="Franchise Opportunities"
          desc="Fermentum non quis vitae viverra ipsum eget tincidunt consequat ac velit leo, rutrum tellus augue dolor leo massa augue rhoncus pellentesque pulvinar pellentesque potenti cras arcu praesent urna a, vitae mattis pellentesque rhoncus cursus enim ac eu justo."
          to="/contact"
          btn="Get in Touch"
          // flex
        />
      </section>

      <section className={css.app}>
        <DownloadTheApp />
      </section>
    </main>
  );
}
