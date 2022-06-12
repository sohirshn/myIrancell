import style from './chart.module.css'
import ChartLib from "../lib/chartLIb";
import { LineChart, Line } from 'recharts';
function Chart() {
    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
    return (
        <div className={style.con__chart}>
            <h2>نمودار میزان مصرف کل</h2>
            <ChartLib/>
            {/*<LineChart width={400} height={400} data={data}>*/}
            {/*    <Line type="monotone" dataKey="uv" stroke="#8884d8" />*/}
            {/*</LineChart>*/}
        </div>
    );
}
export default Chart;