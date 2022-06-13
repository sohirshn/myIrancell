import style from "./actives.module.css";
import Icon from "../icon";
import hafetegi from "../../assets/img/haftegi.png";

function Actives() {
const data = [
    {date: "14تا تاریخ 31 خرداد 1400" , name :"بسته پیامک هفتگی" , icon : hafetegi},
    {date: "تا تاریخ 12 خرداد 1400" , name :"بسته اینترنت ماهانه" , icon : hafetegi},
];
    return (
        <div>
            {
                data.map((value, key) => {
                    return (
                        <div className={style.ser}>

                            <Icon src={value.icon}/>
                            <div className={style.content__info}>
                                <p>{value.name}</p>
                                <span>{value.date}</span>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )}
    export default Actives;