import classNames from "classnames";
import css from "./MealOption.module.scss";

export default function MealOption({ className, img, title, desc }) {
  return (
    <div className={classNames(css.root, className)}>
      <div className={css.left}>
        <img className={css.img} src={img} alt={title} />
      </div>
      <div className={css.right}>
        <h4 className={css.title}>{title}</h4>
        <p className={css.desc}>{desc}</p>
      </div>
    </div>
  );
}
