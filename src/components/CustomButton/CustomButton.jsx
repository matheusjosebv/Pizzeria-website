import classNames from "classnames";
import { Link } from "react-router-dom";
import css from "./CustomButton.module.scss";

export default function CustomButton({
  to,
  red,
  icon,
  label,
  submit,
  className,
  outlineRed,
  outlineBlack,
  outlineWhite,
}) {
  return (
    <div>
      <Link to={to}>
        <button
          type={submit && "submit"}
          className={classNames(
            css.root,
            className,
            { [css.labelGap]: icon },
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
