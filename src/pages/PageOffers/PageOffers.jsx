import css from "./PageOffers.module.scss";

import Hero from "../../components/Hero/Hero";
import BigOffer from "../../components/BigOffer/BigOffer";
import OurLocation from "../../components/OurLocation/OurLocation";
import SmallOffer from "../../components/SmallOffer/SmallOffer";
import DownloadTheApp from "../../components/DownloadTheApp/DownloadTheApp";

import svg from "../../assets/images/svg2.svg";
import bgImg from "../../assets/images/offersHero.jpeg";
import bgOfferImg from "../../assets/images/pizzaOffer.jpeg";
import smOfferImg from "../../assets/images/pizzaOffer2.jpeg";
import CustomButton from "../../components/CustomButton/CustomButton";

export default function PageOffers() {
  return (
    <main className={css.root}>
      <Hero
        gap
        bgImg={bgImg}
        title="Offers"
        desc="Dignissim sed suscipit mattis neque, in nibh blandit at nec in urna tristique ornare aliquam orci augue vestibulum dignissim vel aliquam."
      />

      <section className={css.offers}>
        <h2 className={css.title}>Best Deals!</h2>
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
            bgImg={smOfferImg}
            number="40"
            yellow
            title="Combo Double Box"
            price="24"
            type1
          />

          <SmallOffer
            className={css.smallOffer}
            bgImg={smOfferImg}
            number="40"
            yellow
            title="Combo Double Box"
            price="27"
            desc="Starting at"
            type2
          />
        </div>

        <div className={css.smallOffers}>
          <SmallOffer
            className={css.smallOffer}
            bgImg={smOfferImg}
            number="40"
            yellow
            title="Combo Double Box"
            price="32"
            type1
          />

          <SmallOffer
            className={css.smallOffer}
            bgImg={smOfferImg}
            number="40"
            yellow
            title="Combo Double Box"
            price="18"
            desc="Starting at"
            type2
          />
        </div>

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

        <div className={css.hostParty}>
          <div className={css.blackBackground} />
          <img className={css.type} src={svg} />

          <div className={css.details}>
            <h3 className={css.title}>Host a Party!</h3>
            <p className={css.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus.
            </p>
            <CustomButton
              outlineWhite
              to="/contact"
              className={css.btn}
              label="get in touch"
            />
          </div>
        </div>
      </section>

      <section className={css.location}>
        <OurLocation />
      </section>
      <section className={css.app}>
        <DownloadTheApp />
      </section>
    </main>
  );
}
