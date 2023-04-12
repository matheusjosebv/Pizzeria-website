import css from "./HomeHero.module.scss";

import Route from "../Route/Route";
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function HomeHero({
  bgImg,
  title,
  description,
  firstButton,
  secondButton,
}) {
  return (
    <main className={css.root}>
      <div className={css.wrapper} style={{ backgroundImage: `url(${bgImg})` }}>
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
          <Route to="/" name="home" className={css.route} />
          <Route to="/menu" name="menu" className={css.route} />
          <Route to="/offers" name="offers" className={css.route} />
          <Route to="/about" name="about" className={css.route} />
          <Route to="/contact" name="contact" className={css.route} />
        </div>

        {title && <h1 className={css.title}>{title}</h1>}

        {description && <p className={css.description}>{description}</p>}

        {(firstButton || secondButton) && (
          <div className={css.buttons}>
            {firstButton && (
              <button className={css.button}>{firstButton}</button>
            )}
            {secondButton && (
              <button className={css.button}>{secondButton}</button>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
