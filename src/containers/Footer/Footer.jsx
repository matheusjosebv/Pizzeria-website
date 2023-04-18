import css from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={css.root}>
      <div className={css.wrapper}>
        <div className={css.heading}>
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

        <div className={css.about}>
          <h1 className={css.title}> About Us</h1>
          <div className={css.routes}>
            <Link to="/about">
              <p className={css.route}>Our Story</p>
            </Link>
            <Link to="/contact">
              <p className={css.route}>Our Locations</p>
            </Link>
            <Link to="/offers">
              <p className={css.route}>Current Deals</p>
            </Link>
            <Link to="/contact">
              <p className={css.route}>Contact Us</p>
            </Link>
          </div>
        </div>

        <div className={css.menu}>
          <h1 className={css.title}> Our Menu</h1>
          <div className={css.routes}>
            <Link to="/menu">
              <p className={css.route}>Pizza</p>
            </Link>
            <Link to="/menu">
              <p className={css.route}>Pasta</p>
            </Link>
            <Link to="/menu">
              <p className={css.route}>Dessert</p>
            </Link>
            <Link to="/menu">
              <p className={css.route}>Take & Bake</p>
            </Link>
          </div>
        </div>

        <div className={css.location}>
          <h1 className={css.title}> Our Location</h1>
          <div className={css.routes}>
            <Link to="/contact">
              <p className={css.route}>The Pizzeria Rome</p>
            </Link>
            <Link to="/contact">
              <p className={css.route}>The Pizzeria Madrid</p>
            </Link>
            <Link to="/contact">
              <p className={css.route}>The Pizzeria Paris</p>
            </Link>
            <Link to="/contact">
              <p className={css.route}>The Pizzeria Miami</p>
            </Link>
          </div>
        </div>
      </div>

      <p className={css.copyright}>Copyright © 2023 The Pizzeria</p>
    </footer>
  );
}
