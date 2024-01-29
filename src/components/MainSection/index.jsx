import style from "./main.section.module.css";
import ContentSection from "../Content";
import illustrationImg from "../../assets/illustration-intro.svg";
import Button from "../UIComponent/Button";

const MainSection = () => {
  return (
    <main className={style.container}>
      <div className={style.subContainer}>
        <ContentSection
          element={"h1"}
          text={"Bring everyone together to build better products"}
          paragrahText={
            "Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger teams goals in view"
          }
          stylesForText={style.customWidth}
        />
        <Button text={"Get Started"} />
      </div>
      <div className={style.imgMainSectionContainer}>
        <img src={illustrationImg} width={"100%"} height={"100%"}/>
      </div>
    </main>
  );
};

export default MainSection;
