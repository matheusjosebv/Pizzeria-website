import classNames from "classnames";
import css from "./PageHome.module.scss";

import Hero from "../../components/Hero/Hero";
import Heading from "../../components/Heading/Heading";
import ImgText from "../../components/ImgText/ImgText";

import phoneImg from "../../assets/images/phone.png";
import imgText1 from "../../assets/images/homeImg1.jpeg";
import imgText2 from "../../assets/images/homeImg2.jpeg";
import imgText3 from "../../assets/images/homeImg3.jpeg";
import menuImg1 from "../../assets/images/pgHome-menu.png";
import menuImg2 from "../../assets/images/pgHome-menu2.png";
import menuImg3 from "../../assets/images/pgHome-menu3.png";
import pizzaImg from "../../assets/images/pizzaHomeHero.png";
import bgOfferImg from "../../assets/images/pizzaOffer.jpeg";
import smOfferImg1 from "../../assets/images/pizzaOffer2.jpeg";
import smOfferImg2 from "../../assets/images/pizzaOffer3.jpeg";
import bgImg from "../../assets/images/homeBackgroundHero.jpeg";
import IconTextLink from "../../components/IconTextLink/IconTextLink";

import { MdPhoneIphone } from "react-icons/md";
import { FaBox, FaPizzaSlice, FaGooglePlay, FaAppStore } from "react-icons/fa";
import BigOffer from "../../components/BigOffer/BigOffer";
import SmallOffer from "../../components/SmallOffer/SmallOffer";

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
            className={classNames(css.imgText, css.middleImgText)}
            title="Handmade Mozarella"
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
          <h1 className={css.title}>Bringing Happiness To You</h1>
          <p className={css.desc}>
            Tellus id nisl quis at sollicitudin nisl nisi tincidunt purus .
          </p>

          <div className={css.iconTextLinks}>
            <IconTextLink
              className={css.iconTextLink}
              title="Online Delivery"
              icon={<MdPhoneIphone />}
              link="Order Online"
            />
            <IconTextLink
              className={css.iconTextLink}
              title="Click & Collect"
              icon={<FaBox />}
              link="Takeout Order"
            />
            <IconTextLink
              className={css.iconTextLink}
              title="Restaurant Dining"
              icon={<FaPizzaSlice />}
              link="Book a Table"
            />
          </div>
        </div>
      </section>

      <section className={css.menu}>
        <Heading
          subTitle="Choose Your Flavors"
          title="Food that brings people together"
          desc="Cursus ultricies in maecenas pulvinar ultrices integer quam amet,
          semper dictumst sit interdum ut venenatis pellentesque nunc."
          to="/menu"
          btn="view all menu"
        />

        <div className={css.highlights}>
          <ImgText
            className={css.meal}
            title="Pasta"
            img={menuImg1}
            imgAnim
            to="/menu"
          />
          <ImgText
            className={classNames(css.meal, css.middleMeal)}
            title="Pizza"
            img={menuImg2}
            imgAnim
            to="/menu"
          />
          <ImgText
            className={css.meal}
            title="Desert"
            img={menuImg3}
            imgAnim
            to="/menu"
          />
        </div>
      </section>

      <section className={css.offers}>
        <div className={css.heading}>
          <h1 className={css.title}> Best Deals!</h1>
          <button className={css.btn}>View All</button>
        </div>

        <div className={css.offersWrapper}>
          <BigOffer
            className={css.bigOffer}
            bgImg={bgOfferImg}
            number="15"
            red
            subTitle="Daily Deal!"
            title="Big Meat Monsta"
            desc="Cursus ultricies in maecenas pulvinar ultrices integer quam amet"
            price="18"
          />

          <div className={css.smallOffers}>
            <SmallOffer
              className={css.smallOffer}
              bgImg={smOfferImg1}
              number="40"
              yellow
              title="Combo Double Box"
              price="24"
              type1
            />
            <SmallOffer
              className={css.smallOffer}
              bgImg={smOfferImg2}
              number="25"
              red
              title="Italian Box Special"
              desc="Starting at"
              price="26"
              type2
            />
          </div>
        </div>
      </section>

      <section className={css.locations}>
        <Heading
          subTitle="Our Location"
          title="Find The Pizzeria near you"
          desc="Cursus ultricies in maecenas pulvinar ultrices integer quam amet,
          semper dictumst sit interdum ut venenatis pellentesque."
        />

        <div className={css.places}>
          <div className={css.place}>
            <h1 className={css.city}>Rome</h1>
            <p className={css.address}>
              Via di S. Vincenzo, 12/34A, 00123 Roma RM, Italy.
            </p>
            <p className={css.phone}>+39 123 456 7890</p>
          </div>

          <div className={css.place}>
            <h1 className={css.city}>Florence</h1>
            <p className={css.address}>
              Viale Belfiore, 50, 50144 Firenze FI, Italy.
            </p>
            <p className={css.phone}>+39 123 456 7890</p>
          </div>

          <div className={css.place}>
            <h1 className={css.city}>Bologna</h1>
            <p className={css.address}>
              Via delle Lame, 55, 40122 Bologna BO, Italy.
            </p>
            <p className={css.phone}>+39 123 456 7890</p>
          </div>

          <div className={css.place}>
            <h1 className={css.city}>Venice</h1>
            <p className={css.address}>
              S. Marco, 615, 30124 Venezia VE, Italy.
            </p>
            <p className={css.phone}>+39 123 456 7890</p>
          </div>
        </div>
      </section>

      <section className={css.franchise}>
        <Heading
          subtitle="Join The Table"
          title="Franchise Opportunities"
          desc="Fermentum non quis vitae viverra ipsum eget tincidunt consequat ac velit leo, rutrum tellus augue dolor leo massa augue rhoncus pellentesque pulvinar pellentesque potenti cras arcu praesent urna a, vitae mattis pellentesque rhoncus cursus enim ac eu justo."
          to="/contact"
          btn="Get in Touch"
        />
      </section>

      <section className={css.social}></section>

      <section className={css.app}>
        <div className={css.details}>
          <div className={css.heading}>
            <h1 className={css.subTitle}>Free Delivery!</h1>
            <h1 className={css.title}>Download the App now!</h1>
            <p className={css.desc}>
              Malesuada dignissim non, aliquam id tincidunt amet in sed et
              gravida pulvinar ipsum mauris etiam mattis nisl.
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
      </section>
    </main>
  );
}
