import css from "./PageAbout.module.scss";
import bgImg from "../../assets/images/aboutHero.jpeg";

import Hero from "../../components/Hero/Hero";
import DownloadTheApp from "../../components/DownloadTheApp/DownloadTheApp";
import Heading from "../../components/Heading/Heading";
import ownerImg from "../../assets/images/owner.jpeg";
import pizzeriaImg from "../../assets/images/pizzeria.jpeg";
import { FaPizzaSlice, FaStore } from "react-icons/fa";
import { RiFilePaper2Fill } from "react-icons/ri";
import { GiFullPizza } from "react-icons/gi";

export default function PageAbout() {
  return (
    <main className={css.root}>
      <Hero
        bgImg={bgImg}
        title="About"
        desc="Dignissim sed suscipit mattis neque, in nibh blandit at nec in urna tristique ornare aliquam orci augue vestibulum dignissim vel aliquam."
        gap
      />

      <section className={css.story}>
        <div className={css.left}>
          <div className={css.heading}>
            <h6 className={css.subTitle}>Our Story</h6>
            <h2 className={css.title}>Authentic Italian Pizzeria</h2>
            <p className={css.desc}>
              Varius eu mauris est vitae ultrices et, justo, at in ut faucibus
              libero pellentesque facilisis molestie suspendisse lacinia gravida
              sed habitasse diam nec nulla.
            </p>
          </div>

          <div className={css.container}>
            <div className={css.texts}>
              <div className={css.text}>
                <h5 className={css.title}>It's All About The Family</h5>
                <p className={css.desc}>
                  Imperdiet orci, volutpat consequat fermentum, proin tempus et
                  tellus, vulputate adipiscing auctor nulla in malesuada et
                  amet, aliquam laoreet mauris gravida consectetur malesuada est
                  ultricies diam vestibulum velit sit aliquet pellentesque
                  vitae.{" "}
                </p>
              </div>
              <div className={css.text}>
                <h5 className={css.title}>Generations in The Making</h5>
                <p className={css.desc}>
                  Cursus ultricies in maecenas pulvinar ultrices integer quam
                  amet, semper dictumst sit interdum venenatis pellentesque nunc
                  libero vestibulum velit sit aliquet pellentesque vitae mauris
                  gravida consectetur malesuada.
                </p>
              </div>
            </div>

            <div className={css.ownerImg}>
              <img className={css.img} src={ownerImg} alt="owner" />
              <div className={css.desc}>
                <h6 className={css.name}>Antonnio Baggio</h6>
                <p className={css.position}>Founder of The Pizzeria</p>
              </div>
            </div>
          </div>
        </div>
        <div className={css.right}>
          <img className={css.img} src={pizzeriaImg} alt="Pizzeria in 1950" />
        </div>
      </section>

      <section className={css.cuisine}>
        <div className={css.top}>
          <div className={css.content}>
            <h6 className={css.subTitle}>The Pizzeria</h6>
            <h4 className={css.title}>Incredible Dishes Start Here</h4>
            <p className={css.desc}>
              Semper dictumst sit interdum venenatis pellentesque nunc libero
              vestibulum velit sit aliquet pellentesque vitae.
            </p>
            <div className={css.topics}>
              <div className={css.topic}>
                <div className={css.left}>
                  <FaStore className={css.icon} />
                </div>
                <div className={css.right}>
                  <h5 className={css.title}>4,200 square feet of space</h5>
                  <p className={css.desc}>
                    Bibendum rhoncus amet tellus ornare lobortis sit aliquet
                    elit, hac nisi, mauris ac tellus velit sollicitudin.
                  </p>
                </div>
              </div>

              <div className={css.topic}>
                <div className={css.left}>
                  <FaPizzaSlice className={css.icon} />
                </div>
                <div className={css.right}>
                  <h5 className={css.title}>Heritage You Can Taste</h5>
                  <p className={css.desc}>
                    Pretium, condimentum magna amet egestas ligula pretium magna
                    rutrum a in arcu, mauris porttitor fermentum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={css.bottom}>
          <div className={css.content}>
            <h6 className={css.subTitle}>Authentic</h6>
            <h4 className={css.title}>Recipe With Roots</h4>
            <p className={css.desc}>
              Semper dictumst sit interdum venenatis pellentesque nunc libero
              vestibulum velit sit aliquet pellentesque vitae.
            </p>
            <div>
              <div className={css.topics}>
                <div className={css.topic}>
                  <div className={css.left}>
                    <GiFullPizza className={css.icon} />
                  </div>
                  <div className={css.right}>
                    <h5 className={css.title}>Authentic Italian Flavors</h5>
                    <p className={css.desc}>
                      Bibendum rhoncus amet tellus ornare lobortis sit aliquet
                      elit, hac nisi, mauris ac tellus velit sollicitudin.
                    </p>
                  </div>
                </div>

                <div className={css.topic}>
                  <div className={css.left}>
                    <RiFilePaper2Fill className={css.icon} />
                  </div>
                  <div className={css.right}>
                    <h5 className={css.title}>Handmade "Secret" Ingredients</h5>
                    <p className={css.desc}>
                      Pretium, condimentum magna amet egestas ligula pretium
                      magna rutrum a in arcu, mauris porttitor fermentum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={css.franchise}>
        <Heading
          subTitle="Join The Table"
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
