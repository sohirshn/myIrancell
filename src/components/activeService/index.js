import style from './activeService.module.css'
import hafetegi from "../../assets/img/haftegi.png";
import wifi from "../../assets/img/wifi.png";

function ActiveService() {
    return (
        <div className={style.con__activeService}>
            <h4>خدمات فعال</h4>
                <div className={style.ser}>

                    <img src={hafetegi}/>
                    <div className={style.content__info}>
                        <p>بسته پیامک هفتگی</p>
                        <span>تا تاریخ 31 خرداد 1400</span>
                    </div>

            </div>
            <div className={style.ser}>

                <img src={wifi}/>
                <div className={style.content__info}>
                    <p>بسته اینترنت ماهانه</p>
                    <span>تا تاریخ 12 خرداد 1400</span>
                </div>

            </div>
        </div>
    );
}

export default ActiveService;
