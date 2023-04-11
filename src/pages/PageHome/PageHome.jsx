import css from "./PageHome.module.scss";
import HomeHero from "../../components/HomeHero/HomeHero";

export default function PageHome() {
  return (
    <main className={css.root}>
      <section className={css.hero}>
        <HomeHero />
      </section>

      <section></section>
    </main>
  );
}
