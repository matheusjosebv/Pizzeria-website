import css from "./Navbar.module.scss";
import classNames from "classnames";
import { HiMenu } from "react-icons/hi";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const scrollDetector = () => {
      window.scrollY > 75 ? setNavbar(true) : setNavbar(false);
    };
    window.addEventListener("scroll", scrollDetector);

    return () => {
      window.removeEventListener("scroll", scrollDetector);
    };
  }, []);

  return (
    <nav className={classNames(css.root, { [css.showNavbar]: navbar })}>
      <div className={css.mobileNavbar}>
        <div className={css.left}>
          <div className={css.logo}>
            <img
              src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-site-logo.svg"
              alt="The Pizzeria"
            />
          </div>
        </div>
        <div className={css.right}>
          <HiMenu className={css.menuIcon} />
        </div>
      </div>
    </nav>
  );
}
