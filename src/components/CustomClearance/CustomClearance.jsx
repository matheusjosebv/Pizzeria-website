import classNames from "classnames";
import css from "./CustomClearance.module.scss";

export default function CustomClearance({ className, yellow, red, number }) {
  return (
    <div className={classNames(css.root, className)}>
      <div
        className={classNames(
          css.wrapper,
          { [css.yellow]: yellow },
          { [css.red]: red }
        )}
      >
        <h1 className={css.text}>Save</h1>
        <h1 className={css.text}>{number}%</h1>
      </div>
    </div>
  );
}
