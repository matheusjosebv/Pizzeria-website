import classNames from "classnames";
import css from "./PageHome.module.scss";
import Hero from "../../components/Hero/Hero";
import ImgText from "../../components/ImgText/ImgText";

import imgText1 from "../../assets/images/homeImg1.jpeg";
import imgText2 from "../../assets/images/homeImg2.jpeg";
import imgText3 from "../../assets/images/homeImg3.jpeg";
import pizzaImg from "../../assets/images/pizzaHomeHero.png";
import bgImg from "../../assets/images/homeBackgroundHero.jpeg";
import IconTextLink from "../../components/IconTextLink/IconTextLink";

import { MdPhoneIphone } from "react-icons/md";
import { FaBox, FaPizzaSlice } from "react-icons/fa";

export default function PageHome() {
  return (
    <main className={css.root}>
      <Hero
        bgImg={bgImg}
        title="Authentic Italian Pizzeria"
        desc="Et praesent nulla urna consequat dui arcu cursus diam fringilla
            libero risus, aliquam diam, aliquam ullamcorper urna pulvinar velit
            suspendisse aliquam lacus sollicitudin mauris."
        firstBtn="Book a Table"
        secondBtn="Order Online"
      />

      <section className={css.features}>
        <div className={css.pizzaContainer}>
          <img src={pizzaImg} alt="pizza" className={css.pizza} />
        </div>

        <div className={css.highlights}>
          <ImgText
            img={imgText1}
            className={css.imgText}
            title="Fresh Ingredients"
            description="Risus egestas felis, purus ultricies tortor feugiat aliquam euismod senectus sed amet felis viverra mi bibendum."
          />
          <ImgText
            img={imgText2}
            className={classNames(css.imgText, css.middleImgText)}
            title="Handmade Mozarella"
            description="Feugiat neque, rhoncus suspendisse proin amet aliquet diam pretium condimentum nisl tempus risus imperdiet egestas sit."
          />
          <ImgText
            img={imgText3}
            className={css.imgText}
            title='"Secret Recipe" Sauce'
            description="Placerat id sagittis dolor dictum sit ante dui varius dui eu iaculis pellentesque nam lobortis lectus."
          />
        </div>
      </section>
      <section className={css.services}>
        <div className={css.blackBackground} />
        <div className={css.content}>
          <h1 className={css.title}>Bringing Happiness To You</h1>
          <p className={css.desc}>
            Tellus id nisl quis at sollicitudin nisl nisi tincidunt purus .
          </p>

          <div className={css.iconTextLinks}>
            <IconTextLink
              className={css.iconTextLink}
              title="Online Delivery"
              icon={<MdPhoneIphone />}
              link="Order Online"
            />
            <IconTextLink
              className={css.iconTextLink}
              title="Click & Collect"
              icon={<FaBox />}
              link="Takeout Order"
            />
            <IconTextLink
              className={css.iconTextLink}
              title="Restaurant Dining"
              icon={<FaPizzaSlice />}
              link="Book a Table"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
