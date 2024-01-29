import style from "./details.module.css";
import ContentSection from "../Content";
import DetailsListing from "../DetailsListing/DetailsListing";
import capsuleBackground from "../../assets/bg-tablet-pattern.svg";
const Details = () => {
  return (
    <div className={style.container}>
      <div
        className={style.subContainer}
      >
        <div className={style.contentContainer}>
          <ContentSection
            element={"h5"}
            text={"What's different about Manage ?"}
            paragrahText={
              "Manage provides all the functionality your teams needs, without the complexity. Our software is tailor-made for modern digital product teams."
            }
          />
        </div>
        <div>
          <DetailsListing />
        </div>
      </div>
      <div className={style.bgcapsule}>
        <img src={capsuleBackground} className={style.bgImg}/>
      </div>
    </div>
  );
};

export default Details;
