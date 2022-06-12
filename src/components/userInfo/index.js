import style from './userInfo.module.css';
import profile from '../../assets/img/profile.png'

function UserInfo() {
    return (
        <div className={style.con__UserInfo}>

            <img src={profile}/>
<div className={style.content__info}>
    <p>سلام حسین احمد پناه</p>
    <span>+98 012367548</span>
</div>
        </div>
    );
}

export default UserInfo;