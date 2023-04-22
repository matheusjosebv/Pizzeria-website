import css from "./PageOffers.module.scss";

import Hero from "../../components/Hero/Hero";
import BigOffer from "../../components/BigOffer/BigOffer";
import OurLocation from "../../components/OurLocation/OurLocation";
import SmallOffer from "../../components/SmallOffer/SmallOffer";
import DownloadTheApp from "../../components/DownloadTheApp/DownloadTheApp";

import svg from "../../assets/images/svg2.svg";
import bgImg from "../../assets/images/offersHero.jpeg";
import offerImg1 from "../../assets/images/offer1.jpeg";
import offerImg2 from "../../assets/images/offer2.jpeg";
import offerImg3 from "../../assets/images/offer3.jpeg";
import offerImg4 from "../../assets/images/offer4.jpeg";
import bgOfferImg1 from "../../assets/images/bgOffer1.jpeg";
import bgOfferImg2 from "../../assets/images/bgOffer2.jpeg";
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
        <h2 className={css.heading}>Best Deals!</h2>
        <BigOffer
          red
          price="18"
          number="15"
          bgImg={bgOfferImg1}
          subTitle="Daily Deal!"
          title="Big Meat Monsta"
          className={css.bigOffer}
          desc="Cursus ultricies in maecenas pulvinar ultrices integer quam amet"
        />

        <div className={css.smallOffers}>
          <SmallOffer
            red
            type1
            price="24"
            number="10"
            bgImg={offerImg1}
            title="Combo Double Box"
            className={css.smallOffer}
          />

          <SmallOffer
            type2
            yellow
            price="40"
            number="25"
            bgImg={offerImg2}
            desc="Starting at"
            title="2-in-1 Combo Deal"
            className={css.smallOffer}
          />
        </div>

        <div className={css.smallOffers}>
          <SmallOffer
            type3
            yellow
            price="32"
            number="30"
            bgImg={offerImg3}
            title="Combo Double Box"
            className={css.smallOffer}
          />

          <SmallOffer
            red
            type1
            price="18"
            number="15"
            bgImg={offerImg4}
            desc="Starting at"
            title="Combo Double Box"
            className={css.smallOffer}
          />
        </div>

        <BigOffer
          red
          price="22"
          number="15"
          bgImg={bgOfferImg2}
          subTitle="Daily Deal!"
          title="Special Pepperoni"
          desc="Cursus ultricies in maecenas pulvinar ultrices integer quam amet"
          className={css.bigOffer}
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
