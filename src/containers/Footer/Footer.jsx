import css from "./Footer.module.scss";
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import classNames from "classnames";

export default function Footer() {
  return (
    <footer className={css.root}>
      <div className={css.wrapper}>
        <div className={classNames(css.heading, css.flexEl)}>
          <img
            alt="The Pizzeria"
            className={css.logo}
            src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-site-logo-red.svg"
          />

          <p className={css.desc}>
            Vivamus convallis fermen sollicitudin et, vitae elit in vel ultrices
            sed in urna ipsum ullamcorper auctor.
          </p>

          <div className={css.socials}>
            <FaTwitter className={css.icon} />
            <FaFacebook className={css.icon} />
            <FaInstagram className={css.icon} />
            <FaYoutube className={css.icon} />
          </div>
        </div>

        <div className={classNames(css.about, css.flexEl)}>
          <h1 className={css.title}> About Us</h1>

          <div className={css.routes}>
            <p className={css.route}>Our Story</p>
            <p className={css.route}>Our Locations</p>
            <p className={css.route}>Current Deals</p>
            <p className={css.route}>Contact Us</p>
          </div>
        </div>

        <div className={classNames(css.menu, css.flexEl)}>
          <h1 className={css.title}> Our Menu</h1>

          <div className={css.routes}>
            <p className={css.route}>Pizza</p>
            <p className={css.route}>Pasta</p>
            <p className={css.route}>Dessert</p>
            <p className={css.route}>Take & Bake</p>
          </div>
        </div>

        <div className={classNames(css.location, css.flexEl)}>
          <h1 className={css.title}> Our Location</h1>

          <div className={css.routes}>
            <p className={css.route}>The Pizzeria Rome</p>
            <p className={css.route}>The Pizzeria Madrid</p>
            <p className={css.route}>The Pizzeria Paris</p>
            <p className={css.route}>The Pizzeria Miami</p>
          </div>
        </div>
      </div>

      <p className={css.copyright}>Copyright © 2023 The Pizzeria</p>
    </footer>
  );
}
