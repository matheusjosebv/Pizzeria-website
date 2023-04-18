import classNames from "classnames";
import css from "./Heading.module.scss";
import { Link } from "react-router-dom";

export default function Heading({
  className,
  flex,
  subTitle,
  title,
  desc,
  to,
  btn,
}) {
  return (
    <main className={classNames(css.root, { [css.flex]: flex }, className)}>
      <div className={css.left}>
        {subTitle && <h1 className={css.subtitle}>{subTitle}</h1>}
        {title && <h1 className={css.title}>{title}</h1>}
      </div>

      <div className={css.right}>
        {desc && <p className={css.desc}>{desc}</p>}
        {btn && (
          <Link to={to}>
            <button className={css.btn}>{btn}</button>
          </Link>
        )}
      </div>
    </main>
  );
}
