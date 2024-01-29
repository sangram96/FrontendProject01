import style from './menu.options.module.css';
const MenuOptions = () => {
    return (
        <ul className={style.menuOptionContainer}>
            <li className={style.option}>Pricing</li>
            <li className={style.option}>Product</li>
            <li className={style.option}>About Us</li>
            <li className={style.option}>Careers</li>
            <li className={style.option}>Community</li>
        </ul>
    )
}

export default MenuOptions;