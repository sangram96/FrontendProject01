import style from "./message.module.css";
import capsuleBackground from "../../assets/bg-simplify-section-desktop.svg";
const Message = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className={style.container}>
        <h2 className={style.title}>Simplify how your team works today.</h2>
        <div className={style.btnContainer}>
          <button className={style.btn}>Get Started</button>
        </div>
      </div>
      <img src={capsuleBackground} className={style.bgImg} />
    </div>
  );
};

export default Message;
