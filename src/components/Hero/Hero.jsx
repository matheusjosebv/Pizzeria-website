import css from "./Hero.module.scss";

import CustomRoute from "../CustomRoute/CustomRoute";

import { HiMenu } from "react-icons/hi";
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Hero({ bgImg, title, desc, firstBtn, secondBtn }) {
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
            <HiMenu className={css.mobileMenu} />
            <button className={css.downloadApp}>Download the App</button>
          </div>
        </div>

        <div className={css.routes}>
          <CustomRoute to="/" name="home" className={css.route} />
          <CustomRoute to="/menu" name="menu" className={css.route} />
          <CustomRoute to="/offers" name="offers" className={css.route} />
          <CustomRoute to="/about" name="about" className={css.route} />
          <CustomRoute to="/contact" name="contact" className={css.route} />
        </div>

        {title && <h1 className={css.title}>{title}</h1>}
        {desc && <p className={css.desc}>{desc}</p>}
        {(firstBtn || secondBtn) && (
          <div className={css.btns}>
            {firstBtn && <button className={css.btn}>{firstBtn}</button>}
            {secondBtn && <button className={css.btn}>{secondBtn}</button>}
          </div>
        )}
      </div>
    </main>
  );
}
