import { gsap } from "gsap";
import classNames from "classnames";
import css from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import Sidebar from "../Sidebar/Sidebar";
import CustomRoute from "../../components/CustomRoute/CustomRoute";
import CustomButton from "../../components/CustomButton/CustomButton";
import useLayout from "../../hooks/useLayout";
import { FaGooglePlay } from "react-icons/fa";

export default function Navbar() {
  const rootRef = useRef();
  const appleRef = useRef();
  const googleRef = useRef();
  const [navbar, setNavbar] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const layout = useLayout();

  const handleSidedar = () => {
    setSidebar((prev) => !prev);
  };

  useEffect(() => {
    const scrollDetector = () => {
      window.scrollY > 130 ? setNavbar(true) : setNavbar(false);
    };
    window.addEventListener("scroll", scrollDetector);

    return () => {
      window.removeEventListener("scroll", scrollDetector);
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    const root = rootRef.current;

    if (navbar) {
      tl.set(root, { display: "block", opacity: 0 });
      tl.to(root, { opacity: 1, duration: 1, ease: "expo" });
    } else {
      tl.to(root, { opacity: 0, duration: 1, ease: "expo" });
      tl.set(root, { display: "none" });
    }

    return () => {
      tl.kill();
    };
  }, [navbar]);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 2 });

    if (navbar) {
      tl.set(appleRef.current, { opacity: 0 })
        .set(googleRef.current, { opacity: 1 })
        .to(googleRef.current, { opacity: 0, duration: 1.5 })
        .to(appleRef.current, { opacity: 1, duration: 1.5 })
        .to(appleRef.current, { opacity: 0, duration: 1.5 })
        .to(googleRef.current, { opacity: 1, duration: 1.5 });
    }

    return () => {
      tl.kill();
    };
  }, [navbar]);

  return (
    <nav
      className={classNames(css.root, { [css.showNavbar]: navbar })}
      ref={rootRef}
    >
      <div className={css.mobileNavbar}>
        <div className={css.left}>
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
          <div className={css.routes}>
            <CustomRoute to="/" name="home" className={css.route} />
            <CustomRoute to="/menu" name="menu" className={css.route} />
            <CustomRoute to="/offers" name="offers" className={css.route} />
            <CustomRoute to="/about" name="about" className={css.route} />
            <CustomRoute to="/contact" name="contact" className={css.route} />
          </div>

          <CustomButton
            className={css.btn}
            to="https://play.google.com"
            outlineWhite
            label={layout.tabletLg ? "app" : "download the app"}
          />

          {sidebar ? (
            <CgClose className={css.mobileMenu} onClick={handleSidedar} />
          ) : (
            <HiMenu className={css.mobileMenu} onClick={handleSidedar} />
          )}
        </div>
      </div>

      <Sidebar open={sidebar} toggleMenu={handleSidedar} />
    </nav>
  );
}
