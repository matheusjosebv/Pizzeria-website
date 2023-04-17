import classNames from "classnames";
import css from "./Heading.module.scss";
import { Link } from "react-router-dom";

export default function Heading({ className, subTitle, title, desc, to, btn }) {
  return (
    <main className={classNames(css.root, className)}>
      {subTitle && <h1 className={css.subtitle}>{subTitle}</h1>}
      {title && <h1 className={css.title}>{title}</h1>}
      {desc && <p className={css.desc}>{desc}</p>}
      {btn && (
        <Link to={to}>
          <button className={css.btn}>{btn}</button>
        </Link>
      )}
    </main>
  );
}
