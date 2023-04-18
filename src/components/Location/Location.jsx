import classNames from "classnames";
import css from "./Location.module.scss";

export default function Location({ className, city, address, phone }) {
  return (
    <div className={classNames(css.root, className)}>
      <div className={css.place}>
        <h1 className={css.city}>{city}</h1>
        <p className={css.address}>{address}</p>
        <p className={css.phone}>{phone}</p>
      </div>
    </div>
  );
}
