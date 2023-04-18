import classNames from "classnames";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import css from "./DownloadTheApp.module.scss";
import phoneImg from "../../assets/images/phone.png";

export default function DownloadTheApp({ className }) {
  return (
    <div className={classNames(css.root, className)}>
      <div className={css.details}>
        <div className={css.heading}>
          <h1 className={css.subTitle}>Free Delivery!</h1>
          <h1 className={css.title}>Download the App now!</h1>
          <p className={css.desc}>
            Malesuada dignissim non, aliquam id tincidunt amet in sed et gravida
            pulvinar ipsum mauris etiam mattis nisl.
          </p>
        </div>

        <div className={css.btns}>
          <button className={css.btn}>
            <FaGooglePlay className={css.icon} /> <span>Google Play </span>
          </button>
          <button className={css.btn}>
            <FaAppStore className={css.icon} /> <span>App Store </span>
          </button>
        </div>
      </div>

      <div className={css.phoneContainer}>
        <img className={css.phone} src={phoneImg} alt="phone" />
      </div>
    </div>
  );
}
