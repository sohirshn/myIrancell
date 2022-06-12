import style from "./menu.module.css";
import Logo from "../logo";
import Search from "../search";
import home from  '../../assets/img/home.png'
import charge from  '../../assets/img/charge.png'
import internet from  '../../assets/img/internet.png'
import chart from  '../../assets/img/chart.png'
import service from  '../../assets/img/service.png'
import manSer from  '../../assets/img/Category.png'
import Activity from  '../../assets/img/Activity.png'
import question from  '../../assets/img/question.png'
import Location from  '../../assets/img/Location.png'
function Menu() {
    return (
        <div className={style.con__menu}>
            <ul>
                <li>
                    <a className={style.active}>
                        <img src={home}/>
                        صفحه اصلی
                    </a>
                </li>
                <li className={style.sep__text}>سرویس ها</li>
                <li>
                    <a>
                        <img src={charge}/>
                        شارژ سیم کارت</a>
                </li>
                <li>
                    <a>
                        <img src={internet}/>
                        اینترنت</a>
                </li>
                <li>
                    <a>
                        <img src={chart}/>
                        کارکرد و فروش</a>
                </li>
                <li>
                    <a>
                        <img src={service}/>
                        خدمات</a>
                </li>
                <li className={style.sep__text}>مدیریت</li>
                <li>
                    <a>
                        <img src={manSer}/>
                        مدیریت خدمات</a>
                </li>
                <li>
                    <a>
                        <img src={Activity}/>
                        مدیریت سیمکارت  </a>
                </li>
                <li className={style.mt42}>
                    <a>
                        <img src={question}/>
                        سوالات متداول  </a>
                </li>
                <li>
                    <a>
                        <img src={Location}/>
                        تماس با ما  </a>
                </li>
            </ul>
        </div>
    )
}

export default Menu;