import style from './Stuff.module.css'
function Stuff (props){
    return (
        <div className={style.stuff}>
            <img src={props.img} alt="" className={style.images} />
            <p>{props.price}</p>
            <p>{props.name}</p>
            <button>{props.button}</button>
        </div>
    )
}
export default Stuff ;