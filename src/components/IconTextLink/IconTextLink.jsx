import classNames from "classnames";
import css from "./IconTextLink.module.scss";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function IconTextLink({ className, icon, title, link }) {
  return (
    <main className={classNames(css.root, className)}>
      <div className={css.imgWrapper}>
        <div className={css.img}>{icon}</div>
      </div>
      <h1 className={css.title}>{title}</h1>
      <div className={css.link}>
        <p className={css.linkName}>{link}</p>
        <TbArrowNarrowRight className={css.arrow} />
      </div>
    </main>
  );
}
