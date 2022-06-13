import style from './dashboard.module.css';
import {Link, useNavigate} from "react-router-dom";
import Navbar from "../components/navbar";
import banner from '../assets/img/banner.png'
import Chart from "../components/chart";
import Banner from "../components/banner";
import Suggestion from "../components/suggestion";
import Sidebar from "../components/sidebar";

function Dashboard() {
    return (
        <div className={style.container}>
            <Navbar/>
            <div className={style.setcionCenter}>
                <h2 className={style.m0}>صفحه اصلی</h2>
                <Banner title={'اینهمه بسته بی سابقست!'} content={'اینجا چخبره!'}/>
                <div className={style.chartDiv}>
                    <Chart/>
                </div>
                <div className={style.suggestions}>
                    <Suggestion/>
                </div>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Dashboard;