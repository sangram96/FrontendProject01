import style from "./card.module.css";
const Card = ({name,profileImg, Userfeeback}) => {
  return (
    <div className={style.container}>
      <div className={style.profileImg}>
        <img src={profileImg} width={"80px"} />
      </div>
      <p className={style.title}>{name}</p>
      <p className={style.feedback}>
       {Userfeeback}
      </p>
    </div>
  );
};
export default Card;
