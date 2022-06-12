import style from './chargeSIM.module.css'
import PieChartLib from "../lib/pieChart";
function ChargeSIM() {
    return (
        <div className={style.con__charge}>
            <h3>شارژ باقی مانده سیمکارت</h3>
            <PieChartLib fill={'#FDC816'}/>
            <button className={style.btn}>سیمکارتت رو شارژ کن!</button>
        </div>
    );
}

export default ChargeSIM;