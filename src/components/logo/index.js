import Style from  './logo.module.css';
import { Link, useNavigate } from "react-router-dom";
import  logo from '../../assets/img/Logo.png'
function Logo()
{
    return(
        <div className={Style.logo}>
            <img src={logo}></img>

        </div>
    )
}
export default Logo;