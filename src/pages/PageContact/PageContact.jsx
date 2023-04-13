import css from "./PageContact.module.scss";
import bgImg from "../../assets/images/ContactHero.jpeg";
import Hero from "../../components/Hero/Hero";

export default function PageContact() {
  return (
    <main className={css.root}>
      <Hero
        bgImg={bgImg}
        title="Contact"
        description="Something  nwfnownf nno fn3ofoii 3nofn3fn3condkns l lksndlfn s  n"
      />
    </main>
  );
}
