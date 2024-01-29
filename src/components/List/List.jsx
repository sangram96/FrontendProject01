import style from './list.module.css'
const List = (props) => {
    return (
        <div className={style.container}>{props.ListNumber}</div>
    )
}

export default List;