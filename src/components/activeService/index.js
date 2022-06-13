import style from './activeService.module.css'
import hafetegi from "../../assets/img/haftegi.png";
import wifi from "../../assets/img/wifi.png";
import Icon from "../icon";
import Actives from "../actives";

function ActiveService() {
    return (
        <div className={style.con__activeService}>
            <h4>خدمات فعال</h4>
            <Actives/>
        </div>
    );
}

export default ActiveService;
