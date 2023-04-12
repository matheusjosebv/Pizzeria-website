import classNames from "classnames";
import css from "./Route.module.scss";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Route({ className, to, name }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <div className={className}>
      <Link to={to}>
        <p className={classNames(css.route, { [css.active]: isActive })}>
          {name}
        </p>
      </Link>
    </div>
  );
}
