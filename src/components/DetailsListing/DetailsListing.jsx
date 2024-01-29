import List from "../List/List";
import style from "./details.listing.module.css";
import Content from "../Content";
const DetailsListing = () => {
  return (
    <>
      <div>
        <div className={style.subContainer}>
          <List ListNumber="01" />
          <div className={style.contentContainer}>
            <Content
              element={"h6"}
              text={"Track company-wide progress"}
              paragrahText={
                "see how your day-today tasks fit into wider vision go from tracking progress of the milestone level all the way done to smallest of details. Never lose sight of the bigger picture again"
              }
              styles={style.headingText}
              stylesForText={style.paragraphText}
            />
          </div>
        </div>
        <div className={style.subContainer}>
          <List ListNumber="02" />
          <div className={style.contentContainer}>
            <Content
              element={"h6"}
              text={"Avanced built-in reports"}
              paragrahText={
                "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keey key stakeholders informed"
              }
              styles={style.headingText}
              stylesForText={style.paragraphText}
            />
          </div>
        </div>
        <div className={style.subContainer}>
          <List ListNumber="03" />
          <div className={style.contentContainer}>
            <Content
              element={"h6"}
              text={"Everything you need in one place"}
              paragrahText={
                "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution"
              }
              styles={style.headingText}
              stylesForText={style.paragraphText}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsListing;
