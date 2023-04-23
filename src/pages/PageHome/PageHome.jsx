import classNames from "classnames";
import css from "./PageHome.module.scss";
import Hero from "../../components/Hero/Hero";
import Heading from "../../components/Heading/Heading";
import ImgText from "../../components/ImgText/ImgText";
import BigOffer from "../../components/BigOffer/BigOffer";
import AppRating from "../../components/AppRating/AppRating";
import SmallOffer from "../../components/SmallOffer/SmallOffer";
import OurLocation from "../../components/OurLocation/OurLocation";
import CustomButton from "../../components/CustomButton/CustomButton";
import IconTextLink from "../../components/IconTextLink/IconTextLink";
import DownloadTheApp from "../../components/DownloadTheApp/DownloadTheApp";

import imgText1 from "../../assets/images/homeImg1.jpeg";
import imgText2 from "../../assets/images/homeImg2.jpeg";
import imgText3 from "../../assets/images/homeImg3.jpeg";
import smOfferImg1 from "../../assets/images/offer1.jpeg";
import smOfferImg2 from "../../assets/images/offer2.jpeg";
import menuImg1 from "../../assets/images/pgHome-menu.png";
import bgOfferImg from "../../assets/images/bgOffer1.jpeg";
import menuImg2 from "../../assets/images/pgHome-menu2.png";
import menuImg3 from "../../assets/images/pgHome-menu3.png";
import pizzaImg from "../../assets/images/pizzaHomeHero.png";
import bgImg from "../../assets/images/homeBackgroundHero.jpeg";
import bgSocials from "../../assets/images/pizzeria-social.jpeg";

import { MdPhoneIphone } from "react-icons/md";
import { FaBox, FaGooglePlay, FaInstagram } from "react-icons/fa";
import { FaPizzaSlice, FaAppStore, FaUtensilSpoon } from "react-icons/fa";

export default function PageHome() {
  return (
    <main className={css.root}>
      <Hero
        bgImg={bgImg}
        title="Authentic Italian Pizzeria"
        desc="Et praesent nulla urna consequat dui arcu cursus diam fringilla
        libero risus, aliquam diam, aliquam ullamcorper urna pulvinar velit
        suspendisse aliquam lacus sollicitudin mauris."
        firstBtn="Book a Table"
        secondBtn="Order Online"
      />

      <section className={css.features}>
        <div className={css.pizzaContainer}>
          <img src={pizzaImg} alt="pizza" className={css.pizza} />
        </div>

        <div className={css.highlights}>
          <ImgText
            img={imgText1}
            className={css.imgText}
            title="Fresh Ingredients"
            desc="Risus egestas felis, purus ultricies tortor feugiat aliquam euismod senectus sed amet felis viverra mi bibendum."
          />
          <ImgText
            img={imgText2}
            title="Handmade Mozarella"
            className={classNames(css.imgText, css.middleImgText)}
            desc="Feugiat neque, rhoncus suspendisse proin amet aliquet diam pretium condimentum nisl tempus risus imperdiet egestas sit."
          />
          <ImgText
            img={imgText3}
            className={css.imgText}
            title='"Secret Recipe" Sauce'
            desc="Placerat id sagittis dolor dictum sit ante dui varius dui eu iaculis pellentesque nam lobortis lectus."
          />
        </div>
      </section>

      <section className={css.services}>
        <div className={css.blackBackground} />
        <div className={css.content}>
          <h2 className={css.title}>Bringing Happiness To You</h2>
          <p className={css.desc}>
            Tellus id nisl quis at sollicitudin nisl nisi tincidunt purus .
          </p>

          <div className={css.iconTextLinks}>
            <IconTextLink
              link="Order Online"
              title="Online Delivery"
              icon={<MdPhoneIphone />}
              className={css.iconTextLink}
            />
            <IconTextLink
              icon={<FaBox />}
              link="Takeout Order"
              title="Click & Collect"
              className={css.iconTextLink}
            />
            <IconTextLink
              link="Book a Table"
              icon={<FaPizzaSlice />}
              title="Restaurant Dining"
              className={css.iconTextLink}
            />
          </div>
        </div>
      </section>

      <section className={css.menu}>
        <Heading
          to="/menu"
          btn="view all menu"
          subTitle="Choose Your Flavors"
          title="Food that brings people together"
          desc="Cursus ultricies in maecenas pulvinar ultrices integer quam amet,
          semper dictumst sit interdum ut venenatis pellentesque nunc."
        />

        <div className={css.highlights}>
          <ImgText
            imgAnim
            to="/menu"
            title="Pasta"
            img={menuImg1}
            className={css.meal}
          />
          <ImgText
            imgAnim
            to="/menu"
            title="Pizza"
            img={menuImg2}
            className={classNames(css.meal, css.middleMeal)}
          />
          <ImgText
            imgAnim
            to="/menu"
            title="Desert"
            img={menuImg3}
            className={css.meal}
          />
        </div>
      </section>

      <section className={css.offers}>
        <div className={css.heading}>
          <h2 className={css.title}> Best Deals!</h2>
          <CustomButton
            outlineRed
            to="/offers"
            label="view all"
            className={css.btn}
          />
        </div>

        <div className={css.offersWrapper}>
          <BigOffer
            red
            price="18"
            number="15"
            bgImg={bgOfferImg}
            subTitle="Daily Deal!"
            title="Big Meat Monsta"
            className={css.bigOffer}
            desc="Cursus ultricies in maecenas pulvinar ultrices integer quam amet"
          />

          <div className={css.smallOffers}>
            <SmallOffer
              type1
              yellow
              price="24"
              number="40"
              bgImg={smOfferImg1}
              title="Combo Double Box"
              className={css.smallOffer}
            />
            <SmallOffer
              red
              type2
              price="26"
              number="25"
              desc="Starting at"
              bgImg={smOfferImg2}
              className={css.smallOffer}
              title="Italian Box Special"
            />
          </div>
        </div>
      </section>

      <section className={css.locations}>
        <OurLocation className={css.location} />
      </section>

      <section className={css.franchise}>
        <Heading
          flex
          to="/contact"
          btn="Get in Touch"
          subTitle="Join The Table"
          title="Franchise Opportunities"
          desc="Fermentum non quis vitae viverra ipsum eget tincidunt consequat ac velit leo, rutrum tellus augue dolor leo massa augue rhoncus pellentesque pulvinar pellentesque potenti cras arcu praesent urna a, vitae mattis pellentesque rhoncus cursus enim ac eu justo."
        />
      </section>

      <section className={css.social}>
        <div className={css.top}>
          <div className={css.box}>
            <div className={css.contentWrapper}>
              <div className={css.content}>
                <div className={css.icon}>
                  <FaInstagram />
                </div>

                <div className={css.text}>
                  <h4 className={css.title}>Follow @ThePizzeria</h4>
                  <p className={css.desc}>
                    Leo nulla cras augue eros, diam vivamus et lectus volutpat
                    at facilisi tortor porta
                  </p>
                  <CustomButton
                    outlineWhite
                    className={css.btn}
                    label="visit our instagram"
                    to="https://www.instagram.com"
                  />
                </div>
              </div>
            </div>
          </div>

          <img
            src={bgSocials}
            alt="instagram images"
            className={css.background}
          />
        </div>

        <div className={css.bottom}>
          <div className={css.ratings}>
            <AppRating
              rating="4.9"
              numReviews="1234"
              className={css.rating}
              icon={<FaGooglePlay />}
            />
            <AppRating
              rating="4.6"
              numReviews="2345"
              className={css.rating}
              icon={<FaAppStore />}
            />
            <AppRating
              rating="4.3"
              numReviews="678"
              className={css.rating}
              icon={<FaUtensilSpoon />}
            />
          </div>
        </div>
      </section>

      <section className={css.app}>
        <DownloadTheApp className={css.downloadTheApp} />
      </section>
    </main>
  );
}
