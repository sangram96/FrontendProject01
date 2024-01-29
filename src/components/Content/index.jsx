import style from './content.module.css';
const ContentSection = ({ element, text, paragrahText, styles, stylesForText}) => {
    const El = element;
    const v = stylesForText
    return (
        <div className={style.container}>
            <El className={`${style.heading} ${styles}`} >{text}</El>
            <p className={`${style.paragraphText} ${v}`} >{paragrahText}</p>
        </div>
    )
}

export default ContentSection;