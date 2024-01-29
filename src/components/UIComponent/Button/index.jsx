import style from './button.module.css'
const Button = (props) => {
    return (
        <button className={style.btn}>{props.text}</button>
    )
}

export default Button;