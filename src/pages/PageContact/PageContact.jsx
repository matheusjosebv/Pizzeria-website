import css from "./PageContact.module.scss";

import Hero from "../../components/Hero/Hero";
import Heading from "../../components/Heading/Heading";
import OurLocation from "../../components/OurLocation/OurLocation";
import DownloadTheApp from "../../components/DownloadTheApp/DownloadTheApp";

import bgImg from "../../assets/images/contactHero.jpeg";
import { MdEmail } from "react-icons/md";
import {
  FaPhone,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import CustomButton from "../../components/CustomButton/CustomButton";

export default function PageContact() {
  return (
    <main className={css.root}>
      <Hero bgImg={bgImg} title="Contact" gap />

      <section className={css.infos}>
        <div className={css.container}>
          <div className={css.left}>
            <div className={css.propertyInfo}>
              <h3 className={css.title}>Corporate Office</h3>

              <div className={css.iconInfo}>
                <FaMapMarkerAlt className={css.icon} />
                <p className={css.info}>
                  Via di S. Vincenzo, 12/34A, 00123 Roma RM, Italy.
                </p>
              </div>

              <div className={css.iconInfo}>
                <FaPhone className={css.icon} />
                <p className={css.info}>+39 123 456 7890</p>
              </div>

              <div className={css.iconInfo}>
                <MdEmail className={css.icon} />
                <p className={css.info}>mail@example.com</p>
              </div>
            </div>

            <div className={css.ownerInfo}>
              <h4 className={css.title}>Press Inquiries</h4>
              <h5 className={css.name}>Matteo Damian</h5>

              <div className={css.iconInfo}>
                <FaPhone className={css.icon} />
                <p className={css.info}>+39 123 456 7890</p>
              </div>

              <div className={css.iconInfo}>
                <MdEmail className={css.icon} />
                <p className={css.info}>mail@example.com</p>
              </div>
            </div>

            <div className={css.socialMedia}>
              <h4 className={css.title}>Stay Connected</h4>
              <div className={css.socials}>
                <FaTwitter className={css.socialIcon} />
                <FaFacebook className={css.socialIcon} />
                <FaInstagram className={css.socialIcon} />
                <FaYoutube className={css.socialIcon} />
              </div>
            </div>
          </div>

          <div className={css.right}>
            <div className={css.heading}>
              <h3 className={css.title}>We love to hear from you</h3>
              <p className={css.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            <form className={css.form}>
              <label className={css.name}>
                Name <span>*</span>
              </label>
              <div className={css.fullNameInputs}>
                <input
                  type="text"
                  className={css.first}
                  placeholder="First"
                  required
                />
                <input type="text" className={css.last} placeholder="Last" />
              </div>
              <label className={css.email}>
                Email <span>*</span>
              </label>
              <input
                type="email"
                placeholder="youremail@example.com"
                className={css.emailInput}
                required
              />
              <label className={css.phone}>
                Phone Number <span>*</span>
              </label>
              <input
                type="tel"
                placeholder="+12 345 678 9012"
                className={css.phoneInput}
                required
              />
              <label className={css.subject}>
                Subject <span>*</span>
              </label>
              <input
                type="text"
                placeholder="Subject"
                className={css.subjectInput}
                required
              />
              <label className={css.message}>
                Message <span>*</span>
              </label>
              <textarea
                type="text"
                placeholder="Your message..."
                className={css.messageInput}
                required
              />
            </form>
            <CustomButton
              className={css.submitBtn}
              label="submit"
              submit
              outlineRed
            />
          </div>
        </div>
      </section>

      <section className={css.location}>
        <OurLocation />
      </section>

      <section className={css.franchise}>
        <Heading
          subtitle="Join The Table"
          title="Franchise Opportunities"
          desc="Fermentum non quis vitae viverra ipsum eget tincidunt consequat ac velit leo, rutrum tellus augue dolor leo massa augue rhoncus pellentesque pulvinar pellentesque potenti cras arcu praesent urna a, vitae mattis pellentesque rhoncus cursus enim ac eu justo."
          to="/contact"
          btn="Get in Touch"
          flex
        />
      </section>

      <section className={css.app}>
        <DownloadTheApp />
      </section>
    </main>
  );
}
