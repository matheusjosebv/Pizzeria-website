import { gsap } from "gsap";
import classNames from "classnames";
import css from "./Sidebar.module.scss";
import { memo, useEffect, useRef } from "react";

import CustomRoute from "../../components/CustomRoute/CustomRoute";

function Sidebar({ open, toggleMenu }) {
  const startAnim = useRef();
  const routesRef = useRef();
  const sidebarRef = useRef();

  useEffect(() => {
    if (open) {
      open ? startAnim.current.play() : startAnim.current.reverse();
    }
  }, [open]);

  useEffect(() => {
    startAnim.current = gsap.timeline({ paused: true });
    startAnim.current.set(sidebarRef.current, { opacity: 1 });
  }, []);

  return (
    <nav
      className={classNames(css.root, { [css.open]: open })}
      ref={sidebarRef}
    >
      <div className={css.routes} ref={routesRef}>
        <div className={css.routeWrapper}>
          <CustomRoute
            to="/"
            name="home"
            className={css.route}
            onClick={toggleMenu}
          />
        </div>
        <div className={css.routeWrapper}>
          <CustomRoute
            to="/menu"
            name="menu"
            className={css.route}
            onClick={toggleMenu}
          />
        </div>
        <div className={css.routeWrapper}>
          <CustomRoute
            to="/offers"
            name="offers"
            className={css.route}
            onClick={toggleMenu}
          />
        </div>
        <div className={css.routeWrapper}>
          <CustomRoute
            to="/about"
            name="about"
            className={css.route}
            onClick={toggleMenu}
          />
        </div>
        <div className={css.routeWrapper}>
          <CustomRoute
            to="/contact"
            name="contact"
            className={css.route}
            onClick={toggleMenu}
          />
        </div>
      </div>
    </nav>
  );
}

export default memo(Sidebar);
