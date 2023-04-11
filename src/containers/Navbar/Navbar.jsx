import css from "./Navbar.module.scss";
import { HiMenu } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className={css.root}>
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
