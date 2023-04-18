import classNames from "classnames";
import { Link } from "react-router-dom";
import css from "./CustomButton.module.scss";

export default function CustomButton({
  className,
  to,
  red,
  outlineBlack,
  outlineRed,
  outlineWhite,
  icon,
  label,
}) {
  return (
    <div className={className}>
      <Link to={to}>
        <button
          className={classNames(
            css.root,
            { [css.red]: red },
            { [css.outlineBlack]: outlineBlack },
            { [css.outlineRed]: outlineRed },
            { [css.outlineWhite]: outlineWhite }
          )}
        >
          {icon && <div className={css.icon}>{icon}</div>}
          {label}
        </button>
      </Link>
    </div>
  );
}
