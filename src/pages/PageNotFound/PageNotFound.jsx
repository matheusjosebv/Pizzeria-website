import CustomButton from "../../components/CustomButton/CustomButton";
import css from "./PageNotFound.module.scss";

export default function PageNotFound() {
  return (
    <div className={css.root}>
      <div className={css.content}>
        <h1 className={css.title}>Page Not Found</h1>
        <p className={css.desc}>
          Et praesent nulla urna consequat dui arcu cursus diam fringilla libero
          risus, aliquam diam, aliquam ullamcorper urna pulvinar velit
          suspendisse aliquam lacus sollicitudin mauris.
        </p>
        <CustomButton
          to="/"
          outlineRed
          className={css.btn}
          label="Back to Home"
        />
      </div>
    </div>
  );
}
