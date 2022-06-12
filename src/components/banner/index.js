import style from "./banner.module.css";

function Banner() {
    return (
        <div className={style.banner}>
            <div className={style.bannerText}>
                <h2>اینهمه بسته بی سابقست!</h2>
                <span>اینجا چخبره!</span>
            </div>
        </div>
    );
}

export default Banner;