import Card from "../Card";
import Button from "../UIComponent/Button";
import style from "./testimonial.module.css";
import profileAnisha from "../../assets/avatar-anisha.png";
import profileBravo from '../../assets/avatar-ali.png';
import profileWatts from '../../assets/avatar-richard.png'
const Testimonial = () => {
  return (
    <div className={style.container}>
      <p className={style.title}>What they've said</p>
      <div className={style.testimonialCard}>
        <div className={style.seprationMargin}>
          <Card
            name={"Anisha Li"}
            profileImg={profileAnisha}
            Userfeeback={
              '"Manage has supercharged our trams\'s workflow. The maintain visibility on larger milestone at all times keeps everyone motivated."'
            }
          />
        </div>
        <div className={style.seprationWebMargin}>
          <Card
            name={"Ali Bravo"}
            profileImg={profileBravo}
            Userfeeback={
              '"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused"'
            }
          />
        </div>
        <div className={style.seprationMargin}>
          <Card
            name={"Richard Watts"}
            profileImg={profileWatts}
            Userfeeback={
              '"Manage allows us to provide structure and proper keeps us organized and focused. I can\'t stop recommend them to everyone I talk to!"'
            }
          />
        </div>
      </div>
      <div className={style.btnContainer}>
        <Button text={"Get Started"} />
      </div>
    </div>
  );
};

export default Testimonial;
