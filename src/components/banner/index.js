import style from "./banner.module.css";

function Banner(props) {
    const{src , title , content} = props;
    return (
        <div className={style.banner} >
            <div className={style.bannerText}>
                <h2>{title}</h2>
                <span>{content}</span>
            </div>
        </div>
    );
}

export default Banner;