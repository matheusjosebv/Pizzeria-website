import classNames from "classnames";
import css from "./BigOffer.module.scss";
import svg from "../../assets/svgs/svg.svg";
import CustomClearance from "../CustomClearance/CustomClearance";

export default function BigOffer({
  className,
  bgImg,
  number,
  yellow,
  red,
  subTitle,
  title,
  desc,
  price,
}) {
  return (
    <div className={classNames(css.root, className)}>
      <div
        className={css.background}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <CustomClearance
          className={css.clearance}
          number={number}
          yellow={yellow}
          red={red}
        />
      </div>
      <div className={css.details}>
        <img className={css.type} src={svg} />
        <h1 className={css.subTitle}>{subTitle}</h1>
        <h1 className={css.title}>{title}</h1>
        <p className={css.desc}>{desc}</p>
        <h1 className={css.price}>${price}</h1>
      </div>
    </div>
  );
}
