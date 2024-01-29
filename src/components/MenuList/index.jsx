import style from './menu.list.module.css';
import logo from '../../assets/logo.svg';
import MenuOptions from '../MenuOptions';
import Button from '../UIComponent/Button';
import hamburger from '../../assets/icon-hamburger.svg';

const MenuList = () => {
    return (
        <div className={style.menuContainer}>
            <div className={style.logo}>
                <img src={logo} />
            </div>
            <div>
                <MenuOptions />
            </div>
            <div className={style.btnContainer}>
                <Button text={"Get Started"}/>
            </div>
            <div className={style.hamburgerMenuContainer}>
                <img src={hamburger} />
            </div>
        </div>
    )
}

export default MenuList;