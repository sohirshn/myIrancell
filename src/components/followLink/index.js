import style from './followLink.module.css'
import irancleLogo from "../../assets/img/irancleLogo.png";
function FollowLink() {
return(
    <div className={style.con__followLink}>
            <p>اپلیکیشن مارا دنبال کنید!</p>

        <img src={irancleLogo}/>

    </div>
);
}
export default FollowLink;