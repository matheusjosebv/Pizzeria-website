import classNames from "classnames";
import css from "./Heading.module.scss";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";

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
        {subTitle && <h5 className={css.subtitle}>{subTitle}</h5>}
        {title && <h2 className={css.title}>{title}</h2>}
      </div>

      <div className={css.right}>
        {desc && <p className={css.desc}>{desc}</p>}
        {btn && (
          <CustomButton to={to} label={btn} className={css.btn} outlineRed />
        )}
      </div>
    </main>
  );
}
