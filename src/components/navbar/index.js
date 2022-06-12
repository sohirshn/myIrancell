import  style from'./navbar.module.css';
import { Link, useNavigate } from "react-router-dom";
import Logo from "../logo";
import Search from "../search";
import Menu from "../menu";
function Navbar()
{
    return(
        <div className={style.con__navbar}>
            <Logo />
            <div className={style.search__div}>
                <Search type={'text'} placeholder={'جستجو'} className={'search__input'}/>
            </div>
            <Menu/>
        </div>
    )
}
export default Navbar;