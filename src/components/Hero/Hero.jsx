import { useState } from "react";
import css from "./Hero.module.scss";

import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

import CustomRoute from "../CustomRoute/CustomRoute";
import Sidebar from "../../containers/Sidebar/Sidebar";
import { Link } from "react-router-dom";

export default function Hero({ bgImg, title, desc, firstBtn, secondBtn }) {
  const [sidebar, setSidebar] = useState(false);

  const handleSidedar = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <main className={css.root}>
      <div className={css.wrapper} style={{ backgroundImage: `url(${bgImg})` }}>
        <div className={css.blackBackground} />
        <div className={css.herobar}>
          <div className={css.left}>
            <div className={css.socialMedia}>
              <Link to="https://www.twitter.com">
                <FaTwitter className={css.socialIcon} />
              </Link>
              <Link to="https://www.facebook.com">
                <FaFacebook className={css.socialIcon} />
              </Link>
              <Link to="https://www.instagram.com">
                <FaInstagram className={css.socialIcon} />
              </Link>
              <Link to="https://www.youtube.com">
                <FaYoutube className={css.socialIcon} />
              </Link>
            </div>
          </div>

          <div className={css.centre}>
            <div className={css.logo}>
              <Link to="/">
                <img
                  src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-site-logo.svg"
                  alt="The Pizzeria"
                />
              </Link>
            </div>
          </div>

          <div className={css.right}>
            {sidebar ? (
              <CgClose className={css.mobileMenu} onClick={handleSidedar} />
            ) : (
              <HiMenu className={css.mobileMenu} onClick={handleSidedar} />
            )}
            <Link to="https://play.google.com">
              <button className={css.downloadApp}>Download the App</button>
            </Link>
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

      <Sidebar open={sidebar} toggleMenu={handleSidedar} />
    </main>
  );
}
