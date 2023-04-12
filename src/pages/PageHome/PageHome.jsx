import css from "./PageHome.module.scss";
import HomeHero from "../../components/HomeHero/HomeHero";
import ImgText from "../../components/ImgText/ImgText";

import img from "../../assets/images/homeImg1.jpeg";
import pizzaImg from "../../assets/images/pizzaHomeHero.png";
import bgImg from "../../assets/images/homeBackgroundHero.jpeg";

export default function PageHome() {
  return (
    <main className={css.root}>
      <HomeHero
        bgImg={bgImg}
        title="Authentic Italian Pizzeria"
        description="Et praesent nulla urna consequat dui arcu cursus diam fringilla
            libero risus, aliquam diam, aliquam ullamcorper urna pulvinar velit
            suspendisse aliquam lacus sollicitudin mauris."
        firstButton="Book a Table"
        secondButton="Order Online"
      />

      <section className={css.features}>
        <div className={css.pizzaContainer}>
          <img src={pizzaImg} alt="pizza" className={css.pizza} />
        </div>

        <div className={css.highlights}>
          <ImgText
            img={img}
            className={css.imgText}
            title="Fresh Ingredients"
            description="Risus egestas felis, purus ultricies tortor feugiat aliquam euismod senectus sed amet felis viverra mi bibendum."
          />
          <ImgText
            img={img}
            className={css.imgText}
            title="Handmade Mozarella"
            description="Feugiat neque, rhoncus suspendisse proin amet aliquet diam pretium condimentum nisl tempus risus imperdiet egestas sit."
          />
          <ImgText
            img={img}
            className={css.imgText}
            title='"Secret Recipe" Sauce'
            description="Placerat id sagittis dolor dictum sit ante dui varius dui eu iaculis pellentesque nam lobortis lectus."
          />
        </div>
      </section>
    </main>
  );
}
