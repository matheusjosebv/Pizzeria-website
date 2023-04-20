import classNames from "classnames";
import CustomClearance from "../CustomClearance/CustomClearance";
import css from "./SmallOffer.module.scss";

export default function SmallOffer({
  red,
  desc,
  bgImg,
  price,
  type1,
  type2,
  title,
  number,
  yellow,
  className,
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
        {type1 && (
          <img
            className={css.type1}
            src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-shape-bg-2.svg"
          />
        )}
        {type2 && (
          <img
            className={css.type2}
            src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-shape-bg-3.svg"
          />
        )}

        <div className={css.text}>
          {title && <h1 className={css.title}>{title}</h1>}
          {desc && <h1 className={css.desc}>{desc}</h1>}
          {price && <h1 className={css.price}>${price}</h1>}
        </div>
      </div>
    </div>
  );
}
