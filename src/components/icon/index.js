import style from './icon.module.css'
function Icon(props){
    const{theme , src } = props;
    return(
        <img src={src} className={style[theme]}/>
    )
}
export default Icon;