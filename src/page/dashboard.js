import style from './dashboard.module.css';
import {Link, useNavigate} from "react-router-dom";
import Navbar from "../components/navbar";
import banner from '../assets/img/banner.png'
import Chart from "../components/chart";
import Banner from "../components/banner";

function Dashboard() {
    return (
        <div className={style.container}>
            <Navbar/>
            <div className={style.setcionCenter}>
                <h2 className={style.m0}>صفحه اصلی</h2>
                <Banner/>
                <div className={style.chartDiv}>
                    <Chart/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;