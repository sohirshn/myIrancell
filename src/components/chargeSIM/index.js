import style from './chargeSIM.module.css'
import PieChartLib from "../lib/pieChart";
import Buttons from "../button";
function ChargeSIM() {
    return (
        <div className={style.con__charge}>
            <h3>شارژ باقی مانده سیمکارت</h3>
            <PieChartLib fill={'#FDC816'}/>
            <Buttons content={'سیمکارتت رو شارژ کن!'} theme={'yellow'}/>
        </div>
    );
}

export default ChargeSIM;