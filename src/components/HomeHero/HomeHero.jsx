import css from "./HomeHero.module.scss";
import pizzaImg from "../../assets/images/pizzaHomeHero.png";
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function HomeHero() {
  return (
    <main className={css.root}>
      <div className={css.wrapper}>
        <div className={css.blackBackground} />
        <div className={css.herobar}>
          <div className={css.left}>
            <div className={css.socialMedia}>
              <FaTwitter className={css.socialIcon} />
              <FaFacebook className={css.socialIcon} />
              <FaInstagram className={css.socialIcon} />
              <FaYoutube className={css.socialIcon} />
            </div>
          </div>
          <div className={css.centre}>
            <div className={css.logo}>
              <img
                src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-site-logo.svg"
                alt="The Pizzeria"
              />
            </div>
          </div>
          <div className={css.right}>
            <button className={css.orderOnline}>Download the App</button>
          </div>
        </div>

        <div className={css.routes}>
          <h3 className={css.route}>Home</h3>
          <h3 className={css.route}>Menu</h3>
          <h3 className={css.route}>Offers</h3>
          <h3 className={css.route}>Contact</h3>
          <h3 className={css.route}>About</h3>
        </div>

        <h1 className={css.title}>Authentic Italian Pizzeria</h1>
        <p className={css.description}>
          Et praesent nulla urna consequat dui arcu cursus diam fringilla libero
          risus, aliquam diam, aliquam ullamcorper urna pulvinar velit
          suspendisse aliquam lacus sollicitudin mauris.
        </p>
        <div className={css.buttons}>
          <button className={css.button}>Book a Table</button>
          <button className={css.button}>Order Online</button>
        </div>

        <div className={css.pizzaContainer}>
          <img src={pizzaImg} alt="pizza" className={css.pizza} />
        </div>
      </div>
    </main>
  );
}
