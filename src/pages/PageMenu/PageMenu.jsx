import css from "./PageMenu.module.scss";
import bgImg from "../../assets/images/menuHero.jpeg";
import Hero from "../../components/Hero/Hero";

export default function PageMenu() {
  return (
    <main className={css.root}>
      <Hero
        bgImg={bgImg}
        title="Menu"
        description="Something  nwfnownf nno fn3ofoii 3nofn3fn3condkns l lksndlfn s  n"
      />
    </main>
  );
}
