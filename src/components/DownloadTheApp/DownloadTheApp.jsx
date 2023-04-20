import classNames from "classnames";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import css from "./DownloadTheApp.module.scss";
import phoneImg from "../../assets/images/phone.png";
import CustomButton from "../CustomButton/CustomButton";

export default function DownloadTheApp({ className }) {
  return (
    <div className={classNames(css.root, className)}>
      <div className={css.details}>
        <div className={css.heading}>
          <h4 className={css.subTitle}>Free Delivery!</h4>
          <h2 className={css.title}>Download the App now!</h2>
          <p className={css.desc}>
            Malesuada dignissim non, aliquam id tincidunt amet in sed et gravida
            pulvinar ipsum mauris etiam mattis nisl.
          </p>
        </div>

        <div className={css.btns}>
          <CustomButton
            label="google play"
            className={css.btn}
            icon={<FaGooglePlay />}
            to="https://google.playstore.com"
            outlineRed
          />

          <CustomButton
            label="app store"
            className={css.btn}
            icon={<FaAppStore />}
            to="https://appstore.com"
            outlineRed
          />
        </div>
      </div>

      <div className={css.phoneContainer}>
        <img className={css.phone} src={phoneImg} alt="phone" />
      </div>
    </div>
  );
}
