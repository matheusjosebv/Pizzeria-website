import classNames from "classnames";
import css from "./PageMenu.module.scss";
import bgImg from "../../assets/images/menuHero.jpeg";
import mealImg1 from "../../assets/images/meal1.jpeg";
import mealImg2 from "../../assets/images/meal2.jpeg";
import mealImg3 from "../../assets/images/meal3.jpeg";
import mealImg4 from "../../assets/images/meal4.jpeg";
import pizzaImg1 from "../../assets/images/pizza1.jpeg";
import pizzaImg2 from "../../assets/images/pizza2.jpeg";
import pizzaImg3 from "../../assets/images/pizza3.jpeg";
import pizzaImg4 from "../../assets/images/pizza4.jpeg";
import pizzaImg5 from "../../assets/images/pizza5.jpeg";
import pizzaImg6 from "../../assets/images/pizza6.jpeg";
import dessertImg1 from "../../assets/images/dessert1.jpeg";
import dessertImg2 from "../../assets/images/dessert2.jpeg";
import dessertImg3 from "../../assets/images/dessert3.jpeg";
import dessertImg4 from "../../assets/images/dessert4.jpeg";
import dessertImg5 from "../../assets/images/dessert5.jpeg";
import bgOfferImg from "../../assets/images/bgOffer1.jpeg";
import highlightImg1 from "../../assets/images/pgHome-menu.png";
import highlightImg2 from "../../assets/images/pgHome-menu2.png";
import highlightImg3 from "../../assets/images/pgHome-menu3.png";

import Hero from "../../components/Hero/Hero";
import BigOffer from "../../components/BigOffer/BigOffer";
import MealOption from "../../components/MealOption/MealOption";
import OurLocation from "../../components/OurLocation/OurLocation";
import DownloadTheApp from "../../components/DownloadTheApp/DownloadTheApp";

export default function PageMenu() {
  return (
    <main className={css.root}>
      <Hero bgImg={bgImg} title="Menu" gap />

      <section className={css.highlights}>
        <div className={css.meal}>
          <img className={css.img} src={highlightImg1} />
          <h4 className={css.title}>Pizza</h4>
        </div>
        <div className={classNames(css.meal, css.middle)}>
          <img className={css.img} src={highlightImg2} />
          <h4 className={css.title}>Pizza</h4>
        </div>
        <div className={css.meal}>
          <img className={css.img} src={highlightImg3} />
          <h4 className={css.title}>Pizza</h4>
        </div>
      </section>

      <section className={css.menuOptions}>
        <div className={css.heading}>
          <h2 className={css.title}>Pasta</h2>
          <p className={css.desc}>
            Eros ornare nullam phasellus morbi mi rhoncus nunc neque risus
            mattis risus metus in suscipit scelerisque eu duis penatibus eros
            magna cursus elementum orci.
          </p>
        </div>

        <div className={css.mealCol}>
          <MealOption
            className={css.meal}
            title="SPAGHETTI BOLOGNESE"
            desc="With Chianti-braised meat sauce and fresh basil."
            img={mealImg1}
          />
          <MealOption
            className={css.meal}
            title="CAPRESE PASTA"
            desc="Roma tomatoes, fresh basil, Sicilian extra-virgin olive oil, pine nuts, and fresh mozzarella."
            img={mealImg2}
          />
        </div>

        <div className={css.mealCol}>
          <MealOption
            className={css.meal}
            title="FETTUCCINE ALFREDO"
            desc="Freshly prepared fettuccine pasta swirled in homemade cream sauce."
            img={mealImg3}
          />
          <MealOption
            className={css.meal}
            title="TRUFFLE TORTELLONI"
            desc="Cheese tortelloni with truffle mushroom sauce, topped with fresh arugula."
            img={mealImg4}
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

        <div className={css.heading}>
          <h2 className={css.title}>Pizza</h2>
          <p className={css.desc}>
            Eros ornare nullam phasellus morbi mi rhoncus nunc neque risus
            mattis risus metus in suscipit scelerisque eu duis penatibus eros
            magna cursus elementum orci.
          </p>
        </div>

        <div className={css.menu}>
          <div className={css.mealCol}>
            <MealOption
              className={css.meal}
              title="PAESANO"
              desc="Pepperoni, sliced sausage, roasted peppers, red onions, Pecorino Romano cheese, Sicilian extra-virgin olive oil, and fresh garlic."
              img={pizzaImg1}
            />
            <MealOption
              className={css.meal}
              title="TUSCAN VEGAN"
              desc="No Cheese. Marinara sauce, zucchini & squash, Portabella mushrooms, black olives, eggplant, roasted peppers, artichoke hearts, red onions, and fresh arugula."
              img={pizzaImg2}
            />
          </div>

          <div className={css.mealCol}>
            <MealOption
              className={css.meal}
              title="SPICY FENNEL"
              desc="House-made fennel sausage, jalapeño, roasted red peppers, garlic sauce, carmelized onions, goat cheese, and Wisconsin mozzarella."
              img={pizzaImg3}
            />
            <MealOption
              className={css.meal}
              title="SHRIMP ALFREDO"
              desc="Pancetta, shrimp, red onions, Alfredo sauce, mozzarella, and fresh arugula."
              img={pizzaImg4}
            />
          </div>

          <div className={css.mealCol}>
            <MealOption
              className={css.meal}
              title="ITALIAN MARKET"
              desc="Prosciutto di Parma, ricotta cheese, pepperoni, red onions, Wisconsin mozzarella, and pizza sauce, drizzled with pesto sauce."
              img={pizzaImg5}
            />
            <MealOption
              className={css.meal}
              title="BUFALINA PIZZA"
              desc="Truffle olive oil sauce, Wisconsin mozzarella, Prosciutto di Parma, fresh arugula, and fresh mozzarella."
              img={pizzaImg6}
            />
          </div>
        </div>
      </section>

      <section className={css.createOptions}>
        <div className={css.heading}>
          <h2 className={css.title}>Create Your Own</h2>
          <p className={css.desc}>
            Eros ornare nullam phasellus morbi mi rhoncus nunc neque risus
            mattis risus metus in suscipit scelerisque eu duis penatibus eros
            magna cursus elementum orci.
          </p>
        </div>

        <div className={css.createArea}>
          <div className={css.wrapper}>
            <div className={css.left}>
              <div className={css.step}>
                <h5 className={css.subTitle}>Step 1</h5>
                <h3 className={css.title}>Choose Your Size</h3>
                <h4 className={css.option}>8″, 12″, 14″, 18″</h4>
              </div>

              <div className={css.step}>
                <h5 className={css.subTitle}>Step 2</h5>
                <h3 className={css.title}>Choose Your Sauce</h3>
                <h4 className={css.option}>
                  Marinara, BBQ, Spicy BBQ, oil, alfredo, or hot sauce
                </h4>
              </div>
            </div>

            <div className={css.right}>
              <div className={css.step}>
                <h5 className={css.subTitle}>Step 3</h5>
                <h3 className={css.title}>Choose Your Topping</h3>
                <h4 className={css.option}>8″, 12″, 14″, 18″</h4>

                <h5 className={css.listTitle}>Tradicional Topping</h5>

                <div className={css.toppingListWrapper}>
                  <div className={css.toppingList}>
                    <h6 className={css.topping}>Extra Mozzarella</h6>
                    <h6 className={css.topping}>Canadian Bacon</h6>
                    <h6 className={css.topping}>Sliced Sausage</h6>
                    <h6 className={css.topping}>Sun-Dried Tomatoes</h6>
                    <h6 className={css.topping}>Roasted Peppers</h6>
                    <h6 className={css.topping}>Fresh Basil</h6>
                    <h6 className={css.topping}>Feta Cheese</h6>
                    <h6 className={css.topping}>Caramelized Onions</h6>
                  </div>
                </div>

                <h5 className={css.listTitle}>Premium Topping</h5>
                <div className={css.toppingListWrapper}>
                  <div className={css.toppingList}>
                    <p className={css.topping}>Ricotta Cheese</p>
                    <p className={css.topping}>Portabella Mushrooms</p>
                    <p className={css.topping}>Prosciutto di Parma</p>
                    <p className={css.topping}>Goat Cheese</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={css.dessertOptions}>
        <div className={css.heading}>
          <h2 className={css.title}>Dessert</h2>
          <p className={css.desc}>
            Eros ornare nullam phasellus morbi mi rhoncus nunc neque risus
            mattis risus metus in suscipit scelerisque eu duis penatibus eros
            magna cursus elementum orci.
          </p>
        </div>

        <div className={css.mealCol}>
          <MealOption
            className={css.meal}
            title="ITALIAN CANNOLI"
            desc="An Italian handcrafted pastry shell filled with fresh ricotta cheese and chocolate."
            img={dessertImg1}
          />
          <MealOption
            className={css.meal}
            title="TRUFFLE CHOCOLATE"
            desc="Crafted with layers of dark, moist chocolate and a silky truffle chocolate filling."
            img={dessertImg2}
          />
        </div>

        <div className={css.mealCol}>
          <MealOption
            className={css.meal}
            title="CARROT CAKE"
            desc="Studded with raisins, walnuts, and pineapple, finished with a smooth cream cheese icing."
            img={dessertImg3}
          />
          <MealOption
            className={css.meal}
            title="Pizzeria's Tiramisu"
            desc="Homemade with ladyfingers soaked in espresso, layered with fresh mascarpone cheese."
            img={dessertImg4}
          />
        </div>

        <div className={css.mealCol}>
          <MealOption
            className={css.meal}
            title="ITALIAN CREAM CAKE"
            desc="Sweet cream cake with coconut, pecans, and cream cheese frosting."
            img={dessertImg5}
          />
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
