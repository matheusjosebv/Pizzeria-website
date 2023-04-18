import classNames from "classnames";
import Heading from "../Heading/Heading";
import Location from "../Location/Location";
import css from "./OurLocation.module.scss";

export default function OurLocation({ className }) {
  return (
    <div className={classNames(css.root, className)}>
      <Heading
        subTitle="Our Location"
        title="Find The Pizzeria near you"
        desc="Cursus ultricies in maecenas pulvinar ultrices integer quam amet,
          semper dictumst sit interdum ut venenatis pellentesque."
      />

      <div className={css.places}>
        <Location
          className={css.place}
          city="Rome"
          address="Via di S. Vincenzo, 12/34A, 00123 Roma RM, Italy."
          phone="+39 123 456 7890"
        />
        <Location
          className={css.place}
          city="Florence"
          address="Viale Belfiore, 50, 50144 Firenze FI, Italy."
          phone="+39 123 456 7890"
        />
        <Location
          className={css.place}
          city="Bologna"
          address="Via delle Lame, 55, 40122 Bologna BO, Italy."
          phone="+39 123 456 7890"
        />
        <Location
          className={css.place}
          city="Venice"
          address="S. Marco, 615, 30124 Venezia VE, Italy."
          phone="+39 123 456 7890"
        />
      </div>
    </div>
  );
}
