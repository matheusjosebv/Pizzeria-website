import classNames from "classnames";
import { Link } from "react-router-dom";
import css from "./ImgText.module.scss";

export default function ImgText({ className, img, title, desc, imgAnim, to }) {
  return (
    <main className={classNames(css.root, { [css.clickable]: to }, className)}>
      <Link to={to} className={css.link}>
        {img && (
          <img
            className={classNames(css.img, { [css.imgAnim]: imgAnim })}
            src={img}
            alt={title}
          />
        )}
        {title && <h4 className={css.title}>{title}</h4>}
        {desc && <p className={css.desc}>{desc}</p>}
      </Link>
    </main>
  );
}
