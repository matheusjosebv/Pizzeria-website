import classNames from "classnames";
import css from "./ImgText.module.scss";

export default function ImgText({ className, img, title, description }) {
  return (
    <main className={classNames(css.root, className)}>
      <img className={css.img} src={img} alt={title} />
      <h1 className={css.title}>{title}</h1>
      <p className={css.description}>{description}</p>
    </main>
  );
}
