import style from "./footer.module.css";
import List from "../List/List";
import logo from "../../assets/logowhite.svg";
import facebook from "../../assets/icon-facebook.svg";
import youtube from "../../assets/icon-youtube.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import instagram from "../../assets/icon-instagram.svg";
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.logo}>
          <img src={logo} />
        </div>
        <div className={style.social}>
          <img src={facebook} />
          <img src={youtube} />
          <img src={twitter} />
          <img src={pinterest} />
          <img src={instagram} />
        </div>
      </div>
      <div className={style.footerMenuList}>
        <div>
          <ul className={style.footerMenu}>
            <li href="">Home</li>
            <li href="">Pricing</li>
            <li href="">Products</li>
            <li href="">About Us</li>
          </ul>
        </div>
        <div>
          <ul className={style.footerMenu}>
            <li href="">Careers</li>
            <li href="">Community</li>
            <li href="">Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className={style.footerInput}>
        <div className={style.userIpt}>
          <input
            type="text"
            placeholder="Updates in your inbox.."
            className={style.userTxtField}
          />
          <div className={style.userInputBtn}>
            <List ListNumber={"GO"} />
          </div>
        </div>
        <div className={style.footerCopyRight}>
          <p className={style.bottomTxt}>Copyright 2020. All Rights Reserved</p>
          <p className={style.bottomTxt}>(Made by Sangram Chauhan)</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
