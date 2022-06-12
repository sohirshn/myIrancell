import style from './button.module.css'
function Buttons(props){
    const{content , theme , onclick , type , value , name , disable } = props;
    return(
        <button className={style[theme]}  type={type} name={name} onClick={onclick}>{content}</button>
    )
}
export default Buttons;