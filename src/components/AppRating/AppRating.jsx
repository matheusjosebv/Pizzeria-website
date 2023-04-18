import classNames from "classnames";
import { HiStar } from "react-icons/hi";

import css from "./AppRating.module.scss";

export default function AppRating({ className, icon, rating, numReviews }) {
  return (
    <div className={classNames(css.root, className)}>
      <div className={css.iconWrapper}>
        <div className={css.icon}>{icon}</div>
      </div>

      <div className={css.details}>
        <h1 className={css.rating}>{rating}</h1>
        <div className={css.reviews}>
          <div className={css.stars}>
            <HiStar className={css.star} />
            <HiStar className={css.star} />
            <HiStar className={css.star} />
            <HiStar className={css.star} />
            <HiStar className={css.star} />
          </div>
          <p className={css.review}>{numReviews} reviews</p>
        </div>
      </div>
    </div>
  );
}
